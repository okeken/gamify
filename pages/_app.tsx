import React from "react";
import "../styles/global.css";
import "react-toastify/dist/ReactToastify.css";
import { WagmiConfig, createClient } from "wagmi";
import { ConnectKitProvider, getDefaultClient } from "connectkit";
import { Layout } from "../components/Layout/MainLayout";
import { ToastContainer } from "react-toastify";
import chains from "../config/networks";
import  GameProvider  from "../context/gameContext";

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
          <GameProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          </GameProvider>
        </ConnectKitProvider>
      </WagmiConfig>
    </>
  );
}

export default MyApp;
