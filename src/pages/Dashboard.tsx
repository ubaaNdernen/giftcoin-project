import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CustomWalletMultiButton } from "@/components/walletConnect";
import { AnimatedPoints } from "@/components/ui/point";

const items = [
  { id: 1, name: "Mystery Item 1", img: "/item.png" },
  { id: 2, name: "Mystery Item 2", img: "/item.png" },
  { id: 3, name: "Mystery Item 3", img: "/item.png" },
  { id: 4, name: "Mystery Item 4", img: "/item.png" },
  { id: 5, name: "Mystery Item 5", img: "/item.png" },
  { id: 6, name: "Mystery Item 6", img: "/item.png" },
];

export default function Dashboard() {
  const [loyaltyPoints, setLoyaltyPoints] = useState(200);
  const [animatePoints, setAnimatePoints] = useState(false);

  const handleGift = (type: string) => {
    setLoyaltyPoints((prev) => prev + 10);
    setAnimatePoints(true);
    setTimeout(() => setAnimatePoints(false), 500);
  };

  return (
    // <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900">
    <div className="min-h-screen bg-black">
      {/* Header with wallet connection */}
      <div className="fixed top-0 left-0 right-0 flex justify-between items-center p-4 z-10 bg-purple-900/50 backdrop-blur-sm">
        <h1 className="text-2xl font-bold text-white">Itiza</h1>
        <CustomWalletMultiButton />
      </div>

      {/* Main card */}
      <div className="min-h-screen pt-20 px-4">
        <div className="max-w-lg mx-auto h-[calc(100vh-6rem)] bg-white/10 backdrop-blur-lg rounded-3xl p-6 shadow-xl overflow-y-auto">
          {/* Balance section */}
          <div className="space-y-3 mb-6">
            <div className="flex justify-between items-center">
              <h2 className="text-white/90 font-medium">Your Balance</h2>
              <AnimatedPoints points={loyaltyPoints} animate={animatePoints} />
            </div>
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl p-6 text-center">
              <span className="text-3xl font-bold text-white">$1,000</span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <Button
              onClick={() => handleGift("airtime")}
              className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl py-3 font-medium transition-all"
            >
              Gift Airtime
            </Button>
            <Button
              onClick={() => handleGift("crypto")}
              className="bg-purple-600 hover:bg-purple-700 text-white rounded-xl py-3 font-medium transition-all"
            >
              Gift Crypto
            </Button>
          </div>

          {/* Mystery items grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {items.map((item) => (
              <Card
                key={item.id}
                className="bg-white/5 hover:bg-white/10 transition-all cursor-pointer border-0"
              >
                <CardContent className="p-3">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-24 object-cover rounded-lg"
                  />
                  <p className="text-white/80 text-sm mt-2 text-center">
                    {item.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
