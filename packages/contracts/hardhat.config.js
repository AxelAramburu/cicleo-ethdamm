
/* global ethers task */
require('@nomiclabs/hardhat-waffle')
require("@typechain/hardhat");

require('dotenv').config()

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async () => {
  const accounts = await ethers.getSigners()

  for (const account of accounts) {
    console.log(account.address)
  }
})

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
        }
    },
    settings: {
        optimizer: {
        enabled: true,
        runs: 200
        }
    }
}