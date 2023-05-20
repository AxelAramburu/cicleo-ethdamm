/* global ethers */
/* eslint prefer-const: "off" */

async function deploy() {

    const Security = await ethers.getContractFactory("FakeUSDC");
    const security = await Security.deploy();

    await security.deployed();

    console.log("Fake USDC deployed:", security.address);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
if (require.main === module) {
    deploy()
      .then(() => process.exit(0))
      .catch((error) => {
        console.error(error);
        process.exit(1);
      });
  }
  
  