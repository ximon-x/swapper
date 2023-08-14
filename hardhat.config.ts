import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import swapperConfigs from "./utils/config";

const { RPC_URL, PRIVATE_KEY, API_KEY } = swapperConfigs.getEnv();

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: RPC_URL,
      accounts: [PRIVATE_KEY!],
      allowUnlimitedContractSize: true,
    },
  },
  etherscan: {
    apiKey: API_KEY,
  },
};

export default config;
