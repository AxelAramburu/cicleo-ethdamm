const ethers = require("ethers");
const { MongoClient, ServerApiVersion } = require("mongodb");
const axios = require("axios");
const factoryABI = require("./ABI/factory.json");
const erc20ABI = require("./ABI/erc20.json");
const Sentry = require("@sentry/node");
const chains = require("@wagmi/chains");

require("dotenv").config();

//root
//m7nBBfztdBn55$8a]

async function main() {
    let url = "";

    for (chain in chains) {
        if (chains[chain].id == Number(process.env.CHAIN_ID)) {
            console.log(chains[chain].rpcUrls);
            url = chains[chain].rpcUrls.default.http[0];
        }
    }

    console.log(url);

    const customHttpProvider = new ethers.providers.JsonRpcProvider(url);

    const delay = (time) => new Promise((res) => setTimeout(res, time));

    const uri = process.env.MONGO_URI;
    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverApi: ServerApiVersion.v1,
    });
    await client.connect();

    const lastScaned = client.db("Cicleo").collection("LastScanned");
    const logs = client.db("Cicleo").collection("LogsPayment");

    let lastScannedBlock = await lastScaned.findOne({
        blockchain: Number(process.env.CHAIN_ID),
        type: "logs-payment",
    });

    lastScannedBlock = lastScannedBlock.blockNumber;
    //lastScannedBlock =  60757618;

    const fixAddress = (address) => {
        address = address.substring(address.length - 40);
        return "0X" + address.toUpperCase();
    };

    while (true) {
        const lastBlock = await customHttpProvider.getBlockNumber();

        console.log(lastScannedBlock)

        if (lastScannedBlock >= lastBlock) {
            console.log("wait new block");
            await delay(1000);
            continue;
        }

        

        let gap = lastBlock - lastScannedBlock;

        if (gap > 100) {
            gap = 100;
        }

        /* Logs on diamond */

        const logsRaw = await customHttpProvider.getLogs({
            fromBlock: lastScannedBlock,
            toBlock: lastScannedBlock + gap,
            topics: [
                [
                    "0x2f5f2ee5aa57a7095e4d595ee43379ebe9db86f64a35c08ec2b2f345564c52c7", //PaymentSubscription
                ],
                null,
                null,
            ],
            address: routerAddress,
        });

        console.log(logsRaw.length);

        for (i = 0; i < logsRaw.length; i++) {
            const subManagerId = Number(logsRaw[i].topics[1]);
            

            console.log(subManagerId)

            const subManager = await subscriptionManager.findOne({
                id: subManagerId,
                blockchain: Number(process.env.CHAIN_ID),
            });

            if (subManager == null) continue;
            
            const address = fixAddress(logsRaw[i].topics[2]);

            //PaymentSubscription
            if (
                logsRaw[i].topics[0] ==
                "0x9a609a853c9e2ab0e30b81e8dd73c72d48e2842194767c532f778ad9b3591253"
            ) {
                console.log("PaymentSubscription");

                await logs.insertOne({
                    user: address,
                    action: "payment",
                    date: Date.now() / 1000,
                    subscriptionManagerId: subManagerId,
                    blockchain: Number(process.env.CHAIN_ID),
                    subscriptionId: Number(logsRaw[i].topics[3]),
                    price: Number(logsRaw[i].data),
                    paymentBlockchain: Number(process.env.CHAIN_ID),
                });

            //UserEdited
            } else if (
                logsRaw[i].topics[0] ==
                "0xfcda9f876b19b1444bd7bbe7732cf0c2eb5764f619714c9d7a7d6e75f87e1c18"
            ) {
                console.log("UserEdited");

                if (subManager.url != null) {
                    try {
                        await axios.post(subManager.url, {
                            address: address.toUpperCase(),
                            subscriptionId: Number(logsRaw[i].topics[3]),
                            secret: subManager.secret,
                            endTime: Number(logsRaw[i].data),
                        });
                    } catch (error) {
                        try {
                            await axios.post(subManager.url, {
                                address: address.toUpperCase(),
                                subscriptionId: Number(logsRaw[i].topics[3]),
                                secret: subManager.secret,
                                endTime: Number(logsRaw[i].data),
                            });
                        } catch (error) {
                            console.log(error);
                        }
                    }
                }

                const query = await user.findOne({
                    address: address,
                    blockchain: Number(process.env.CHAIN_ID),
                    subscriptionManagerId: subManagerId,
                });
                if (query == null) {
                    let infoToInsert = {
                        address: address,
                        blockchain: Number(process.env.CHAIN_ID),
                        subscriptionId: Number(logsRaw[i].topics[3]),
                        subscriptionManagerId: subManagerId,
                        triedRenew: false,
                        endSubscription: Number(logsRaw[i].data),
                        isCanceled: false,
                    };

                    if (Number(logsRaw[i].topics[3]) == 255) {
                        for (let j = 0; j < logsRaw.length; j++) {  
                            if (
                                logsRaw[j].topics[0] ==
                                "0x9a609a853c9e2ab0e30b81e8dd73c72d48e2842194767c532f778ad9b3591253"
                            ) {
                                infoToInsert.subscriptionPrice = Number(logsRaw[j].data)
                            }
                        }
                    }

                    await user.insertOne(infoToInsert);

                    await logs.insertOne({
                        user: address,
                        action: "newSubscriber",
                        date: Date.now() / 1000,
                        subscriptionManagerId: subManagerId,
                        blockchain: Number(process.env.CHAIN_ID),
                        subscriptionId: Number(logsRaw[i].topics[3]),
                        tokenPaymentAddress: "",
                        tokenPaymentSymbol: "",
                    });
                } else {
                    let infoToUpdate = {
                        triedRenew: false,
                        isCanceled: false,
                        endSubscription: Number(logsRaw[i].data),
                        subscriptionId: Number(logsRaw[i].topics[3]),
                    };

                    if (Number(logsRaw[i].topics[3]) == 255) {
                        for (let j = 0; j < logsRaw.length; j++) {  
                            if (
                                logsRaw[j].topics[0] ==
                                "0x9a609a853c9e2ab0e30b81e8dd73c72d48e2842194767c532f778ad9b3591253"
                            ) {
                                infoToUpdate.subscriptionPrice = Number(logsRaw[j].data)
                            }
                        }
                    }

                    await user.updateOne(
                        {
                            address: address,
                            blockchain: Number(process.env.CHAIN_ID),
                            subscriptionManagerId: subManagerId,
                        },
                        {
                            $set: infoToUpdate,
                        }
                    );
                }

                //SelectToken
            } else if (
                logsRaw[i].topics[0] ==
                "0x74c91477beff2e693b50864f8f539037dae74fee2710b1fc6a9da5634c86a326"
            ) {
                console.log("SelectToken");

                const erc20Contract = new ethers.Contract(
                    fixAddress(logsRaw[i].topics[3]).toLowerCase(),
                    erc20ABI,
                    customHttpProvider
                );

                const symbol = await erc20Contract.symbol();

                await user.updateOne(
                    {
                        address: address,
                        blockchain: Number(process.env.CHAIN_ID),
                        subscriptionManagerId: subManagerId,
                    },
                    {
                        $set: {
                            tokenPaymentAddress: fixAddress(
                                logsRaw[i].topics[3]
                            ),
                            tokenPaymentSymbol: symbol,
                        },
                    }
                );
                ``;
            }
        }

        lastScannedBlock += gap + 1;

        const update = {
            $set: {
                blockNumber: lastScannedBlock,
            },
        };

        await lastScaned.updateOne(
            {
                blockchain: Number(process.env.CHAIN_ID),
                type: "logs",
            },
            update
        );
    }
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
