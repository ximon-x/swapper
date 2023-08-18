import Header from "@/app/components/layout/header";
import Footer from "@/app/components/layout/footer";
import WagmiProvider from "@/app/components/contexts/wagmi";
import FaucetCard from "@/app/components/ui/faucetCard";

function App() {
  return (
    <div className="flex flex-col min-h-screen min-w-screen items-center justify-between">
      <Header />
      <FaucetCard />
      <Footer />
    </div>
  );
}

function Faucet() {
  return (
    <WagmiProvider>
      <App />
    </WagmiProvider>
  );
}

export default Faucet;
