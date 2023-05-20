/* global ethers */
/* eslint prefer-const: "off" */

async function deploy() {

    const Security = await ethers.getContractFactory("CicleoPaymentSecurity");
    const security = await Security.deploy("0xA73a0d640d421e0800FDc041DA7bA954605E95D6");

    await security.deployed();

    console.log("Security deployed:", security.address);

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
  
  