"use client";

import "@rainbow-me/rainbowkit/styles.css";
import {
  ConnectButton,
  getDefaultWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { useAccount, useConnect } from "wagmi";
import { sepolia } from "wagmi/chains";

import Main from "./components/layout/main";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

const { chains, publicClient } = configureChains(
  [sepolia],
  [
    alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_ID! }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "ximon",
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID!,
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

function Home() {
  const { isConnected } = useAccount();
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();

  return (
    <>
      {isConnected ? (
        <div>
          <div>
            <Header />
            <Main />
            <Footer />
          </div>
        </div>
      ) : (
        <div className="flex min-h-screen min-w-fit items-center justify-center">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Please connect your wallet</h2>
              <p className="mb-4">
                You need to have Metamask, Rainbow wallet or any web3 wallet
                installed.
              </p>
              <div className="card-actions justify-end">
                <ConnectButton />
              </div>
            </div>
          </div>
        </div>
      )}

      {error && <div>{error.message}</div>}
    </>
  );
}

function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <Home />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
export default App;
