
/* global ethers task */
require('@nomiclabs/hardhat-waffle')
require("@typechain/hardhat");
require("@nomiclabs/hardhat-etherscan");
require('dotenv').config()

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async () => {
  const accounts = await ethers.getSigners()

  for (const account of accounts) {
    console.log(account.address)
  }
})

const ETHERSCAN_KEY = process.env.ETHERSCAN_KEY;
const SNOWTRACE_KEY = process.env.SNOWTRACE_KEY;
const BSC_KEY = process.env.BSC_KEY;
const FANTOM_KEY = process.env.FTMSCAN_KEY;
const POLYGON_KEY = process.env.POLYGON_KEY;

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    solidity: '0.8.6',
    networks: {
        fantomTest: {
            url: 'https://rpc.testnet.fantom.network/',
            accounts: [process.env.PRIVATE_KEY],
            chainId: 4002,
        },
        fantom: {
            url: 'https://rpc.ftm.tools/',
            accounts: [process.env.PRIVATE_KEY],
            chainId: 250,
        },
        polygon: {
            url: 'https://rpc-mainnet.maticvigil.com/',
            accounts: [process.env.PRIVATE_KEY],
            chainId: 137,
        },
        avalanche: {
            url: 'https://api.avax.network/ext/bc/C/rpc',
            accounts: [process.env.PRIVATE_KEY],
            chainId: 43114,
        }
    },
    settings: {
        optimizer: {
        enabled: true,
        runs: 200
        }
    },
    etherscan: {
        apiKey: {
            ropsten: ETHERSCAN_KEY,
            avalanche: SNOWTRACE_KEY,
            avalancheFujiTestnet: SNOWTRACE_KEY,
            bscTestnet: BSC_KEY,
            bsc: BSC_KEY,
            opera: FANTOM_KEY,
            polygon: POLYGON_KEY,
            ftmTestnet: FANTOM_KEY,
        },
    },
}
