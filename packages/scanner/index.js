const ethers = require("ethers");
const { MongoClient, ServerApiVersion } = require("mongodb");
const axios = require("axios");
const PaymentManagerFacet = require("./ABI/PaymentManagerFacet.json");
const Sentry = require("@sentry/node");
const chains = require("@wagmi/chains");
const { stringify } = require("querystring");

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
    //lastScannedBlock = 62793636;

    const fixAddress = (address) => {
        address = address.substring(address.length - 40);
        return "0X" + address.toUpperCase();
    };

    const diamondAddress = "0xA73a0d640d421e0800FDc041DA7bA954605E95D6";

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
                    "0x2f5f2ee5aa57a7095e4d595ee43379ebe9db86f64a35c08ec2b2f345564c52c7", //PaymentDoneWithCicleo
                ],
                null,
                null,
            ],
            address: diamondAddress,
        });

        console.log(logsRaw.length);

        const diamond = new ethers.Contract(
            diamondAddress,
            PaymentManagerFacet,
            customHttpProvider
        );

        for (i = 0; i < logsRaw.length; i++) {
            console.log(logsRaw[i])
            const paymentManagerId = Number(logsRaw[i].topics[1]);
            
            console.log(paymentManagerId);
            
            const address = fixAddress(logsRaw[i].topics[2]);

            //PaymentDoneWithCicleo
            if (
                logsRaw[i].topics[0] ==
                "0x2f5f2ee5aa57a7095e4d595ee43379ebe9db86f64a35c08ec2b2f345564c52c7"
            ) {
                console.log("PaymentDoneWithCicleo");

                const name = logsRaw[i].topics[2];

                console.log("jdfjdj")

                let abi = [
                    "event PaymentDoneWithCicleo(uint256 indexed paymentManagerId,address indexed user,string indexed nameOfPayment,uint256 price);"
                ];

                let iface = new ethers.utils.Interface(abi)

                let decodedRetVal = iface.decodeEventLog("PaymentDoneWithCicleo", logsRaw[i].data, logsRaw[i].topics)

                const info = await diamond.getPaymentManagerInfo(paymentManagerId);

                const data = {
                    embeds: [
                      {
                        title: "New Payment",
                        description: `${address} have done a ${ethers.utils.formatUnits(decodedRetVal.price, info[1])} ${info[2]} payment !`,
                        color: 5814783
                      }
                    ],
                    attachments: []
                }

                await axios.post(process.env.DISCORD_WEBHOOK, data)
              
                await logs.insertOne({
                    user: address,
                    action: "payment",
                    date: Date.now() / 1000,
                    paymentManagerId: paymentManagerId,
                    blockchain: Number(process.env.CHAIN_ID),
                    name: name,
                    price: decodedRetVal.price.toString(),
                });
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
                type: "logs-payment",
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
