import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config();

const {LISK_URL, PRIVATE_KEY, ETHERSCAN_KEY} = process.env

const config: HardhatUserConfig = {
  solidity: "0.8.30",
  networks: {
    liskTestnet: {
      url: `${LISK_URL}`,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: `${ETHERSCAN_KEY}`,  
  },
  sourcify: {
    enabled: false,
  },
};

export default config;