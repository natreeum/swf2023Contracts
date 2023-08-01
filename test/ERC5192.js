const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ERC5192", function () {
  beforeEach(async () => {
    const [owner, addr1] = await ethers.getSigners();
    const ERC5192 = await ethers.deployContract("Token", ["123", "T", true]);
    console.log(ERC5192);
  });

  describe("TEST", async () => {
    it("asdf", async () => {
      expect(await ERC5192.owner()).to.equal(owner.address);
    });
  });
});
