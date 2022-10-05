import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x11d98bf876A081f0bAe6474f863816828390AC9C"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/a3jZxAuKRYVnU9wgA4IaCgYOhPcTje4",
  },
};