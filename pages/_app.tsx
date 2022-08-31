import React from 'react'
import "../styles/global.css"
import { WagmiConfig, createClient } from "wagmi";
import { ConnectKitProvider, ConnectKitButton, getDefaultClient } from "connectkit";
import { Layout } from '../components/Layout/MainLayout';

const alchemyId = process.env.ALCHEMY_ID;

const client = createClient(
  getDefaultClient({
    appName: "Your App Name",
    alchemyId,
  }),
);


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

