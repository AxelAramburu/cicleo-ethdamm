const express = require("express");
const cors = require("cors");
const axios = require("axios");
const ethers = require("ethers");
const bp = require("body-parser");
require("dotenv").config()
const {BigNumber, utils} = require("ethers");

const PaymentManagerABI = require("./ABI/PaymentManagerFacet.json");

const asyncMiddleware = fn =>
  (req, res, next) => {
    Promise.resolve(fn(req, res, next))
      .catch(err => {
        console.log(err);
        res.status(500).send('Something broke!');
      })
  };

const contracts = {
    250: {
        diamond: "0xA73a0d640d421e0800FDc041DA7bA954605E95D6",
    },
};

const RPCs = {
    250: "https://rpcapi.fantom.network",
    56: "https://bsc-dataseed.binance.org",
    137: "https://rpc-mainnet.maticvigil.com",
};

const sleep = async (ms) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
};

const tableChangeBlockchain = {
    56: "bsc",
    250: "ftm",
    137: "matic",
};


/* Express Part */
const app = express();

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed
});


app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.get(
    "/chain",
    asyncMiddleware(async (req, res, next) => {
        res.send(contracts);
    })
);

app.post("/chain/:paymentManagerChain/getUserInfo/:paymentManagerId/:user/:fromChain",
    asyncMiddleware(async (req, res, next) => {
        if (tableChangeBlockchain[req.params.fromChain] == undefined)
            return res
                .status(400)
                .json({ message: "Blockchain not supported" });
    
        var config = {
            method: "get",
            maxBodyLength: Infinity,
            url: `https://pro-openapi.debank.com/v1/user/token_list?id=${req.params.user
                }&chain_id=${tableChangeBlockchain[req.params.fromChain]
                }&is_all=false`,
            headers: {
                AccessKey: process.env.DEBANK_ACCESS_KEY,
            },
        };

        const resp = await axios(config);
        let coinData = resp.data;

        let toDelete = {};

        const PROVIDER = new ethers.providers.JsonRpcProvider(
            RPCs[req.params.paymentManagerChain]
        );

        const paymentManager = new ethers.Contract(
            contracts[req.params.paymentManagerChain].diamond,
            PaymentManagerABI,
            PROVIDER
        );

        const paymentManagerInfo = await paymentManager.getPaymentManagerInfo(
            req.params.paymentManagerId
        );

        console.log(paymentManagerInfo)

        const tokenOutAddress = paymentManagerInfo[0].paymentToken;
        const tokenOutAmount = BigNumber.from(req.body.tokenOutAmount);

        for (let i = 0; i < coinData.length; i++) {
            if (coinData[i].id.substring(0, 2) != "0x") {
                toDelete[i] = true;
                continue;
            }

            if (
                coinData[i].id.toUpperCase() ==
                tokenOutAddress.toUpperCase()
            ) {
                coinData[i].toPay = tokenOutAmount.toString();
                continue;
            }

            //In case of bridging
            if (req.params.paymentManagerChain != req.params.fromChain) {

            } else {
                try {
                    const price = await axios.get(
                        `https://ethapi.openocean.finance/v2/${req.params.fromChain}/quote` +
                            `?inTokenAddress=${coinData[i].id}` +
                            `&outTokenAddress=${tokenOutAddress}` +
                            `&amount=${ethers.utils
                                .parseUnits("1", coinData[i].decimals)
                                .toString()}` +
                            `&gasPrice=5` +
                            `&slippage=1`
                    );

                    await sleep(50);

                    coinData[i].toPay = tokenOutAmount
                        .mul(utils.parseUnits("1", coinData[i].decimals))
                        .div(price.data.outAmount)
                        .toString();
                } catch (error) {
                    console.log(error);
                    toDelete[i] = true;
                }
            }
        }

        let coinList = [];

        for (let i = 0; i < coinData.length; i++) {
            if (toDelete[i] == true) continue;

            coinList.push(coinData[i]);
        }

        res.send({coinList: coinList});
    })
);



app.listen(6001);

module.exports = app;