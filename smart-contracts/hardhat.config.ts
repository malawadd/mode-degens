import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-contract-sizer";

import { environment } from "./environment";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.18",
    settings: {
      viaIR: false,
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  defaultNetwork: "mode",
  networks: {
    mode: {
      url: "https://sepolia.mode.network",
      accounts: [environment.walletPrivateAddress],
      chainId: 919,
    }
  }
};

export default config;
