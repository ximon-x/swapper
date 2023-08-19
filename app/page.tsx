"use client";

import "@rainbow-me/rainbowkit/styles.css";
import Main from "./components/layout/main";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import WagmiProvider from "./components/provider/wagmi";

function App() {
  const { isConnected } = useAccount();

  return (
    <>
      {isConnected ? (
        <div>
          <Header />
          <Main />
          <Footer />
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
    </>
  );
}

function Home() {
  return (
    <WagmiProvider>
      <App />
    </WagmiProvider>
  );
}
export default Home;
