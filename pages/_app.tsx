import React, { useEffect } from "react";
import "../styles/global.css";
import "react-toastify/dist/ReactToastify.css";
import { WagmiConfig, createClient } from "wagmi";
import { ConnectKitProvider, getDefaultClient } from "connectkit";
import { Layout } from "../components/Layout/MainLayout";
import { ToastContainer } from "react-toastify";
import chains from "../config/networks";

const alchemyId = process.env.ALCHEMY_ID;

const client = createClient(
  getDefaultClient({
    appName: "Gamify",
    alchemyId,
    chains,
  })
);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ToastContainer />
      <WagmiConfig client={client}>
        <ConnectKitProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ConnectKitProvider>
      </WagmiConfig>
    </>
  );
}

export default MyApp;
