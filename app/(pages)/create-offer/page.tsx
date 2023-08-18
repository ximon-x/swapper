import Header from "@/app/components/layout/header";
import Footer from "@/app/components/layout/footer";
import WagmiProvider from "@/app/providers/wagmi";

function App() {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
}

function Swaps() {
  return (
    <WagmiProvider>
      <App />
    </WagmiProvider>
  );
}

export default Swaps;
