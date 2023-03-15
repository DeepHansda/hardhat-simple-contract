const { ethers } = require("hardhat");
const { assert } = require("chai");
describe("SimpleStorage", function () {
  let contractFactory, simpleStorage;
  beforeEach(async function () {
    contractFactory = await ethers.getContractFactory("SimpleStorage");
    simpleStorage = await contractFactory.deploy();
    simpleStorage.deployTransaction.wait(5);
  });

  it("Should start a favorite number with 0", async function () {
    const expectedNumber = "0";
    const favNumber = await simpleStorage.retrieve();
    assert.equal(favNumber?.toString(), expectedNumber);
  });

  it("Update favorite number", async function () {
    const expectedNumber = "10";
    const contractTransaction = await simpleStorage.store(expectedNumber);
    contractTransaction.wait(5);
    const updatedNumber = await simpleStorage.retrieve();
    assert.equal(updatedNumber.toString(), expectedNumber);
  });
});
