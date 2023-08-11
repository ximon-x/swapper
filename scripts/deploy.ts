import { ethers, run } from "hardhat";
import { setTimeout } from "timers/promises";

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const unlockTime = currentTimestampInSeconds + 60;

  const lockedAmount = ethers.utils.parseEther("0.001");

  const lockFactory = await ethers.getContractFactory("Lock");
  const lockContract = await lockFactory.deploy([unlockTime], {
    value: lockedAmount,
  });
  await lockContract.deployed();

  console.log(`Lock Contract deployed to ${lockContract.address}\n`);

  console.log(`Waiting for a minute before verifying Lock contract`);
  await setTimeout(60000);

  await run("verify:verify", {
    address: lockContract.address,
    constructorArguments: [unlockTime],
  });
  console.log(`Verified AlwaysAlive contract on PolygonScan`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
