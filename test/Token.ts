import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Token", () => {
  let owner: SignerWithAddress;
  let initialSupply: any;
  let swapperToken: any;
  let catToken: any;
  let dogToken: any;

  beforeEach(async () => {
    owner = (await ethers.getSigners())[0];

    initialSupply = 1000;

    const SwapperToken = await ethers.getContractFactory("SwapperToken");
    swapperToken = await SwapperToken.deploy(initialSupply);

    const CatToken = await ethers.getContractFactory("CatToken");
    catToken = await CatToken.deploy();

    const DogToken = await ethers.getContractFactory("DogToken");
    dogToken = await DogToken.deploy();
  });

  describe("Deployment", async () => {
    it("Should mint the initial supply to owner", async function () {
      expect(await swapperToken.balanceOf(owner.address)).to.equal(
        initialSupply
      );
    });
  });

  describe("Minting", async () => {
    it("Should mint the Cat NFT correctly", async () => {
      const mockURI = "https://mockURI.com";

      await catToken.mintNFT(owner.address, mockURI);

      expect(await catToken.ownerOf(0)).to.equal(owner.address);
    });

    it("Should mint the Dog NFT correctly", async () => {
      const mockURI = "https://mockURI.com";

      await dogToken.mintNFT(owner.address, mockURI);

      expect(await dogToken.ownerOf(0)).to.equal(owner.address);
    });
  });
});
