import React from 'react'
import "../styles/global.css"
import { WagmiConfig, createClient, chain, } from "wagmi";
import { ConnectKitProvider, getDefaultClient } from "connectkit";
import { Layout } from '../components/Layout/MainLayout';
import chains from "../config/networks"

const alchemyId = process.env.ALCHEMY_ID;


const client = createClient(
  getDefaultClient({
    appName: "Your App Name",
    alchemyId,
   chains,
  }),
);


// const client = createClient({
//   autoConnect: true,
//   connectors: [
//     new InjectedConnector({ chains }),
//     new WalletConnectConnector({
//       chains: chains,
//       options: {
//         qrcode: false,
//       },
//     }),
//   ],
//   provider,
// });


function MyApp({ Component, pageProps }) {
  return <>
<WagmiConfig client={client}>
<ConnectKitProvider>
<Layout>
  <Component {...pageProps} />
</Layout>
</ConnectKitProvider> 
  </WagmiConfig>
  </>
}

export default MyApp



