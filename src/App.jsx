import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import FAQ from "./pages/FAQ";
import Borrower from "./pages/Borrower";
import HowItWorks from "./pages/HowItWorks";
import Lenders from "./pages/Lenders";
import MultichainWallet from "./pages/MultichainWallet";
import PoweredByAi from "./pages/PoweredByAi";
import Security from "./pages/Security";

import Header from "./components/Header";
import Footer from "./components/Footer";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);
import Lenis from "lenis";

function App() {
  useEffect(() => {
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 700);
    });
    gsap.ticker.lagSmoothing(0);
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/Lender" element={<Lenders />} />
          <Route path="/Borrower" element={<Borrower />} />
          <Route path="/HowItWorks" element={<HowItWorks />}></Route>
          <Route
            path="/HowItWorks/MultichainWallet"
            element={<MultichainWallet />}
          />
          <Route path="/HowItWorks/PoweredByAi" element={<PoweredByAi />} />
          <Route path="/Security" element={<Security />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
