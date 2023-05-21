/* global ethers */
/* eslint prefer-const: "off" */

const { getSelectors, FacetCutAction } = require("./libraries/diamond.js");

async function deployDiamond() {
    const accounts = await ethers.getSigners();
    const contractOwner = accounts[0];

    const facet = await ethers.getContractAt("BridgeFacet", "0xA73a0d640d421e0800FDc041DA7bA954605E95D6");

    await facet.bridgePayment(
        [250, 1, 1000000, "Payement1", "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"],
        "0xfa5FF1747Df46e146A8cD85D6Bd9c115abF819Cd",
        "0x01ab663d4f7c4f68d0fc3592f9197f7b119a7d451cd389995fcd143e08c39d003ef3744943f7b79a4e3891b25e28d60bf3084b28db71fde3db86f9ae0027a6fe1b"
    )
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
if (require.main === module) {
  deployDiamond()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
}

exports.deployDiamond = deployDiamond;
