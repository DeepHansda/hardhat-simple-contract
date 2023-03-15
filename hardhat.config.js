require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require("hardhat-gas-reporter");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */

const rpc_url = process.env.RPC_URL;
const wallet_key = process.env.PRIVATE_KEY;
const etherscan_key = process.env.ETHERSCAN_KEY;
const coinmarketcap = process.env.COINMARKETCAP;
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    goerli: {
      url: rpc_url,
      accounts: [wallet_key],
      chainId: 5,
    },
  },
  solidity: "0.8.18",
  etherscan: {
    apiKey: etherscan_key,
  },
  gasReporter: {
    enabled: true,
    outputFile: "gas-reporter.txt",
    coinmarketcap: coinmarketcap,
    currency: "INR",
    noColors:true
  },
};
