"use client";

import Header from "@/app/components/layout/header";
import Footer from "@/app/components/layout/footer";
import WagmiProvider from "@/app/components/provider/wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

function App({ children }: { children: React.ReactNode }) {
  const { isConnected } = useAccount();

  return (
    <>
      {isConnected ? (
        <div className="flex flex-col min-h-screen min-w-full items-center justify-between">
          <Header />
          {children}
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

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider>
      <App>{children}</App>
    </WagmiProvider>
  );
}

export default AppLayout;
