import { CURRENT_QUAI_CHAIN_ID, NetworkBaseAsset } from "../networks"

const ETH: NetworkBaseAsset = {
  chainID: "1",
  name: "Ether",
  symbol: "ETH",
  decimals: 18,
  metadata: {
    coinGeckoID: "ethereum",
    tokenLists: [],
  },
}

const ARBITRUM_ONE_ETH: NetworkBaseAsset = {
  ...ETH,
  chainID: "42161",
  metadata: {
    coinGeckoID: "ethereum",
    tokenLists: [],
  },
}

const ARBITRUM_NOVA_ETH: NetworkBaseAsset = {
  ...ETH,
  chainID: "42170",
  metadata: {
    coinGeckoID: "ethereum",
    tokenLists: [],
  },
}

const OPTIMISTIC_ETH: NetworkBaseAsset = {
  ...ETH,
  chainID: "10",
  metadata: {
    coinGeckoID: "ethereum",
    tokenLists: [],
  },
}

const GOERLI_ETH: NetworkBaseAsset = {
  ...ETH,
  chainID: "5",
  metadata: {
    coinGeckoID: "ethereum",
    tokenLists: [],
  },
}

const RBTC: NetworkBaseAsset = {
  chainID: "30",
  name: "RSK Token",
  symbol: "RBTC",
  decimals: 18,
  metadata: {
    coinGeckoID: "rootstock",
    tokenLists: [],
  },
}

const MATIC: NetworkBaseAsset = {
  chainID: "137",
  name: "Matic Token",
  symbol: "MATIC",
  decimals: 18,
  metadata: {
    coinGeckoID: "matic-network",
    tokenLists: [],
    websiteURL: "https://polygon.technology/",
  },
}

const AVAX: NetworkBaseAsset = {
  chainID: "43114",
  name: "Avalanche",
  symbol: "AVAX",
  decimals: 18,
  metadata: {
    coinGeckoID: "avalanche-2",
    tokenLists: [],
    websiteURL: "https://avax.network/",
  },
}

const BNB: NetworkBaseAsset = {
  chainID: "56",
  name: "Binance Coin",
  symbol: "BNB",
  decimals: 18,
  metadata: {
    coinGeckoID: "binancecoin",
    tokenLists: [],
    websiteURL: "https://bnbchain.org",
  },
}

const QUAI: NetworkBaseAsset = {
  chainID: CURRENT_QUAI_CHAIN_ID,
  name: "Quai Network",
  symbol: "QUAI",
  decimals: 18,
  metadata: {
    coinGeckoID: "usdt",
    tokenLists: [],
    websiteURL: "https://qu.ai/",
  },
}

const ZK_SYNC_ETH: NetworkBaseAsset = {
  ...ETH,
  chainID: "324",
}

export const BASE_ASSETS_BY_CUSTOM_NAME = {
  ETH,
  MATIC,
  RBTC,
  AVAX,
  BNB,
  ARBITRUM_ONE_ETH,
  ARBITRUM_NOVA_ETH,
  OPTIMISTIC_ETH,
  GOERLI_ETH,
  ZK_SYNC_ETH,
  QUAI,
}

export const BASE_ASSETS = Object.values(BASE_ASSETS_BY_CUSTOM_NAME)
