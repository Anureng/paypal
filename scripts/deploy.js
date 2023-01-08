// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {


  const Paypal = await hre.ethers.getContractFactory("Paypal");
  const paypal = await Paypal.deploy();

  await paypal.deployed();

  console.log(
    `Lock with 1 ETH and ${paypal.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


// Deployed to:0xb0E28220DFc40ed0485c839B3170c3d69104eA9F