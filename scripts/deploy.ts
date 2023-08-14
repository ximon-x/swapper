import { ethers, run } from "hardhat";
import { setTimeout } from "timers/promises";

async function main() {
  const initialSupply = ethers.utils.parseEther("1000000000");

  const swapperTokenFactory = await ethers.getContractFactory("SwapperToken");
  const swapperTokenContract = await swapperTokenFactory.deploy(initialSupply);
  await swapperTokenContract.deployed();

  console.log(`Swapper Token deployed to ${swapperTokenContract.address}\n`);

  const catTokenFactory = await ethers.getContractFactory("CatToken");
  const catTokenContract = await catTokenFactory.deploy();
  await catTokenContract.deployed();

  console.log(`Cat NFT deployed to ${catTokenContract.address}\n`);

  const dogTokenFactory = await ethers.getContractFactory("DogToken");
  const dogTokenContract = await dogTokenFactory.deploy();
  await dogTokenContract.deployed();

  console.log(`Dog NFT deployed to ${dogTokenContract.address}\n`);

  console.log(`Waiting for a minute before verifying contracts`);
  await setTimeout(60000);

  console.log(`Verifying SwapperToken contract`);
  await run("verify:verify", {
    address: swapperTokenContract.address,
    constructorArguments: [initialSupply],
  });

  console.log(`Verifying CatToken contract`);
  await run("verify:verify", {
    address: catTokenContract.address,
  });

  console.log(`Verifying DogToken contract`);
  await run("verify:verify", {
    address: dogTokenContract.address,
  });

  console.log("Finished verifying contracts!");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
