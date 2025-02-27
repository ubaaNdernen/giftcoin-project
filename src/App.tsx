import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/components/Home";
import WalletContextProvider from "@/components/walletConnect";
import { Header } from "./components/Header";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";

const App: React.FC = () => {
  return (
    <WalletContextProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div className="relative min-h-screen bg-[#0A0B1E]">
                <Header />
                <Features />
                <Footer />
              </div>
            }
          />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </WalletContextProvider>
  );
};

export default App;
