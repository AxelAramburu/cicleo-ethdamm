const express = require("express");
const cors = require("cors");
const axios = require("axios");
const ethers = require("ethers");
const bp = require("body-parser");
require("dotenv").config()

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

app.use(
    cors({
        credentials: true,
        methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD"],
        saveUninitialized: true,
        origin: true,
    })
);

app.options(
    "*",
    cors({
        credentials: true,
        methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD"],
        saveUninitialized: true,
        origin: true,
    })
);

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

        console.log(coinData)

        let toDelete = {};

        /* const PROVIDER = new ethers.providers.JsonRpcProvider(
            RPCs[req.params.paymentManagerChain]
        );

        const paymentManager = new ethers.Contract(
            contracts[req.params.paymentManagerChain].diamond,
            PaymentManagerABI,
            PROVIDER
        );

        const paymentManagerInfo = await paymentManager.paymentManagers(
            req.params.paymentManagerId
        ); */

        //const tokenOutAddress = paymentManagerInfo.paymentToken;

        const tokenOutAddress = "0x04068DA6C83AFCFA0e13ba15A6696662335D5B75";
        const tokenOutPrice = req.body.tokenOutPrice;

        for (let i = 0; i < coinData.length; i++) {
            if (coinData[i].id.substring(0, 2) != "0x") {
                toDelete[i] = true;
                continue;
            }

            if (
                coinData[i].id.toUpperCase() ==
                tokenOutAddress.toUpperCase()
            ) {
                coinData[i].toPay = tokenOutPrice;
                continue;
            }

            //In case of bridging
            if (req.params.paymentManagerChain != req.params.fromChain) {

            } else {
                try {
                    const price = await axios.get(
                        `https://ethapi.openocean.finance/v2/${fromChain}/quote` +
                            `?inTokenAddress=${coinData[i].id}` +
                            `&outTokenAddress=${tokenOutAddress}` +
                            `&amount=${ethers.utils
                                .parseUnits("1", coinData[i].decimals)
                                .toString()}` +
                            `&gasPrice=5` +
                            `&slippage=1`
                    );

                    await sleep(50);

                    coinData[i].toPay = userPrice
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