import { chain } from "wagmi";

const avalancheChain = {
  id: 43_114,
  name: "Avalanche",
  nativeCurrency: {
    decimals: 18,
    name: "Avalanche",
    symbol: "AVAX",
  },
  rpcUrls: {
    default: "https://api.avax.network/ext/bc/C/rpc",
  },
  blockExplorers: {
    default: { name: "SnowTrace", url: "https://snowtrace.io" },
    snowtrace: { name: "SnowTrace", url: "https://snowtrace.io" },
  },
  testnet: false,
  network: "Avax",
};
const bsc = {
  id: 56,
  name: "Smart Chain",
  nativeCurrency: { name: "BNB", symbol: "BNB", decimals: 18 },
  rpcUrls: { default: "https://bsc-dataseed.binance.org" },
  blockExplorers: {
    default: { name: "BscScan", url: "https://bscscan.com" },
  },
  network: "smart chain",
  testnet: false,
};

const chains = [
  chain.goerli,
  bsc,
  chain.mainnet,
  chain.polygon,
  avalancheChain,
  chain.rinkeby
];
export default chains;
