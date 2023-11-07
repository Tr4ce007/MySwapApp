import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x110D570061F56f28b5261175F64591D7B4517104"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/YNOyfeEyef7hce5xbVWulNMsrxPkOqNZ",
  },
};