const express = require("express");
const cors = require("cors");
const axios = require("axios");
const ethers = require("ethers");
const bp = require("body-parser");
require("dotenv").config();
const { BigNumber, utils } = require("ethers");

const PaymentManagerABI = require("./ABI/PaymentManagerFacet.json");
const ERC20ABI = require("./ABI/ERC20.json");
const STARGATEABI = require("./ABI/STARGATE.json");
const BridgeFacetABI = require("./ABI/BridgeFacet.json");

const asyncMiddleware = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch((err) => {
        console.log(err);
        res.status(500).send("Something broke!");
    });
};

const contracts = {
    250: {
        diamond: "0xA73a0d640d421e0800FDc041DA7bA954605E95D6",
    },
    137: {
        diamond: "0xA73a0d640d421e0800FDc041DA7bA954605E95D6"
    },
    43114: {
        diamond: "0xA73a0d640d421e0800FDc041DA7bA954605E95D6"
    },
};

const openOceanBlockchain = {
    56: "bsc",
    250: "fantom",
    137: "matic",
    43114: "avax",
};

const RPCs = {
    250: "https://rpcapi.fantom.network",
    56: "https://bsc-dataseed.binance.org",
    137: "https://rpc-mainnet.maticvigil.com",
    43114: "https://api.avax.network/ext/bc/C/rpc",
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
    43114: "avax",
};

/* Express Part */
const app = express();

app.use(cors());
app.options("*", cors());

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.get(
    "/chain",
    asyncMiddleware(async (req, res, next) => {
        res.send(contracts);
    })
);

app.post(
    "/chain/:paymentManagerChain/getUserInfo/:paymentManagerId/:user/:fromChain",
    asyncMiddleware(async (req, res, next) => {
        if (tableChangeBlockchain[req.params.fromChain] == undefined)
            return res
                .status(400)
                .json({ message: "Blockchain not supported" });

        var config = {
            method: "get",
            maxBodyLength: Infinity,
            url: `https://pro-openapi.debank.com/v1/user/token_list?id=${
                req.params.user
            }&chain_id=${
                tableChangeBlockchain[req.params.fromChain]
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

        console.log(paymentManagerInfo);
        console.log(coinData);

        const tokenOutAddress = paymentManagerInfo[0].paymentToken;
        const tokenOutAmount = BigNumber.from(req.body.tokenOutAmount);

        for (let i = 0; i < coinData.length; i++) {
            if (coinData[i].id.substring(0, 2) != "0x") {
                toDelete[i] = true;
                continue;
            }

            //console.log(coinData[i].id.toUpperCase(), tokenOutAddress.toUpperCase())

            if (coinData[i].id.toUpperCase() == tokenOutAddress.toUpperCase()) {
                coinData[i].toPay = tokenOutAmount.toString();
                continue;
            }

            //In case of bridging
            if (req.params.paymentManagerChain != req.params.fromChain) {
                try {
                    const quoteRequest = {
                        fromChain: req.params.fromChain,
                        fromToken: coinData[i].id,
                        fromAddress: "0xfa5FF1747Df46e146A8cD85D6Bd9c115abF819Cd", //Use as refund address
                        toChain: req.params.paymentManagerChain,
                        toToken: tokenOutAddress,
                        toAmount: tokenOutAmount.toString(),
                        toContractAddress: contracts[req.params.paymentManagerChain].diamond,
                        toContractCallData: "0x",
                        toContractGasLimit: '900000',
                        maxPriceImpact: '0.5'
                    };

                    console.log(quoteRequest)
                
                    const response = await axios.post("https://li.quest/v1/quote/contractCall", quoteRequest);

                    console.log(response.data);

                    const data = response.data.transactionRequest.data;

                    const ifaceStargate = new ethers.utils.Interface(STARGATEABI);
                    const decodedArgsStargate = ifaceStargate.decodeFunctionData(
                        data.slice(0, 10),
                        data
                    );
                    const functionNameStargate = ifaceStargate.getFunction(
                        data.slice(0, 10)
                    ).name;

                    console.log(functionNameStargate);

                    let _bridgeData
                    let _swapData = []
                    let _stargateData

                    if (functionNameStargate == "startBridgeTokensViaStargate") {
                        _bridgeData = decodedArgsStargate[0]
                        _stargateData = decodedArgsStargate[1]
                    } else if (functionNameStargate == "swapAndStartBridgeTokensViaStargate") {
                        _bridgeData = decodedArgsStargate[0]
                        _swapData = decodedArgsStargate[1]
                        _stargateData = decodedArgsStargate[2]
                    }

                    coinData[i]._bridgeData = _bridgeData
                    coinData[i]._swapData = _swapData
                    coinData[i]._stargateData = _stargateData
                    coinData[i].toPay = response.data.estimate.fromAmount;
                } catch (error) {
                    console.log(error);
                    toDelete[i] = true;
                }
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

        res.send({ coinList: coinList });
    })
);

app.post(
    "/chain/:blockchain/getExactPrice/:paymentManagerId",
    asyncMiddleware(async (req, res, next) => {
        const tokenIn = req.body.tokenIn;

        const _price = req.body.price;

        const PROVIDER = new ethers.providers.JsonRpcProvider(
            RPCs[req.params.blockchain]
        );

        const paymentManager = new ethers.Contract(
            contracts[req.params.blockchain].diamond,
            PaymentManagerABI,
            PROVIDER
        );

        const token = new ethers.Contract(tokenIn, ERC20ABI, PROVIDER);

        const tokenInDecimals = await token.decimals();

        const paymentManagerInfo = await paymentManager.getPaymentManagerInfo(
            req.params.paymentManagerId
        );

        console.log(paymentManagerInfo);

        const tokenOut = paymentManagerInfo[0].paymentToken;

        if (tableChangeBlockchain[req.params.blockchain] == undefined)
            return res
                .status(400)
                .json({ message: "Blockchain not supported" });

        const price = await axios.get(
            `https://ethapi.openocean.finance/v2/${req.params.blockchain}/quote` +
                `?inTokenAddress=${tokenIn}` +
                `&outTokenAddress=${tokenOut}` +
                `&amount=${ethers.utils
                    .parseUnits("1", tokenInDecimals)
                    .toString()}` +
                `&gasPrice=5` +
                `&slippage=1`
        );

        let estimation = BigNumber.from(_price)
            .mul(utils.parseUnits("1", price.data.inToken.decimals))
            .div(price.data.outAmount);

        let isGood = false;

        await sleep(100);

        while (!isGood) {
            console.log("Verfiy", estimation.toString());

            const verify = await axios.get(
                `https://ethapi.openocean.finance/v2/${req.params.blockchain}/quote` +
                    `?inTokenAddress=${tokenIn}` +
                    `&outTokenAddress=${tokenOut}` +
                    `&amount=${estimation.toString()}` +
                    `&gasPrice=5` +
                    `&slippage=1`
            );
            console.log(verify.data.outAmount);

            if (BigNumber.from(verify.data.outAmount).gte(_price)) {
                isGood = true;
                break;
            } else {
                estimation = estimation.mul(105).div(100);
                await sleep(100);
            }
        }

        await sleep(100);

        const swap = await axios.get(
            `https://open-api.openocean.finance/v3/${
                openOceanBlockchain[req.params.blockchain]
            }/swap_quote` +
                `?inTokenAddress=${tokenIn}` +
                `&outTokenAddress=${tokenOut}` +
                `&amount=${utils.formatUnits(
                    estimation,
                    price.data.inToken.decimals
                )}` +
                `&account=${contracts[req.params.blockchain].diamond}` +
                `&gasPrice=5` +
                `&slippage=1`
        );

        res.send(swap.data.data);
    })
);

app.get(
    "/chain/:blockchain/getPaymentManagerInfo/:paymentManagerId",
    asyncMiddleware(async (req, res, next) => {
        const PROVIDER = new ethers.providers.JsonRpcProvider(
            RPCs[req.params.blockchain]
        );

        const paymentManager = new ethers.Contract(
            contracts[req.params.blockchain].diamond,
            PaymentManagerABI,
            PROVIDER
        );

        const paymentManagerInfo = await paymentManager.getPaymentManagerInfo(
            req.params.paymentManagerId
        );

        res.send(paymentManagerInfo);
    })
);

app.get(
    "/chain/:blockchain/getNonce/:user",
    asyncMiddleware(async (req, res, next) => {
        const PROVIDER = new ethers.providers.JsonRpcProvider(
            RPCs[req.params.blockchain]
        );

        const paymentManager = new ethers.Contract(
            contracts[req.params.blockchain].diamond,
            BridgeFacetABI,
            PROVIDER
        );

        const nonce = await paymentManager.getUserNonce(
            req.params.user
        );

        res.send(nonce.toString());
    })
);

app.listen(6001);

module.exports = app;
