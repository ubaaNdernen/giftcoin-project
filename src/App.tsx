import React from "react";
import WalletContextProvider from "./components/walletConnect";
// import { CustomWalletMultiButton } from "./components/walletConnect";
// import GiftStore from "./pages/GiftStore";
import Dashboard from "./pages/Dashboard";

const App: React.FC = () => {
  return (
    <WalletContextProvider>
      <div className="min-h-screen">
        <Dashboard />
      </div>
    </WalletContextProvider>
  );
};

export default App;
