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

function About() {
  return (
    <WagmiProvider>
      <App />
    </WagmiProvider>
  );
}

export default About;
