const { ethers, run, network } = require("hardhat");

async function main() {
  try {
    const contractFactory = await ethers.getContractFactory("SimpleStorage");
    console.log("Deploying contract......");
    const simpleStorage = await contractFactory.deploy();
    await simpleStorage.deployed();
    console.log(simpleStorage.address);
    if (network.config.chainId === 5 && process.env.ETHERSCAN_KEY) {
      if (simpleStorage?.address) {
        simpleStorage.deployTransaction.wait(10);
        await verify(simpleStorage.address, args = []);
      }
    }

    let favNumber = await simpleStorage.retrieve();
    console.log(`Your Favorite Number is ${favNumber}`);
    let contractTransaction = await simpleStorage.store(10);
    simpleStorage.deployTransaction.wait(5)
    favNumber = await simpleStorage.retrieve();
    console.log(`Your New Favorite Number is ${favNumber}`);
  } catch {
    (err) => {
      console.log(err);
    };
  }
}

async function verify(contractAddress, args) {
  try {
    console.log("Contract Verifying.........");
    await run("verify:verify", {
      address: contractAddress,
      arguments: args,
    });
  } catch (error) {
    if (error?.message?.toLowerCase()?.includes("already verified")) {
      console.log("Already Verified.....");
    } else {
      console.log(error);
    }
  }
}

main();
