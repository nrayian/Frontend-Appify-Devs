import { useState, useEffect } from "react";
import Header from "./Header";
import NewChat from "./NewChat";
import Navigation from "./Navigation";
import logo from "./images/logo.png"; // Adjust based on file location
const storeItems = [
  {
    id: 1,
    name: "EchoGPT Basic",
    description: "Ideal for general conversations and basic tasks.",
    price: "$9.99/month",
    features: ["Basic AI responses", "Limited API calls", "Community support"],
  },
  {
    id: 2,
    name: "EchoGPT Pro",
    description: "Faster responses and more powerful AI capabilities.",
    price: "$19.99/month",
    features: ["Advanced AI responses", "Priority API access", "Email support"],
  },
  {
    id: 3,
    name: "EchoGPT Enterprise",
    description: "Designed for businesses and large-scale AI usage.",
    price: "Custom Pricing",
    features: ["Unlimited AI calls", "24/7 dedicated support", "Enterprise integration"],
  },
];


export default function Store() {
  const [selectedPlan, setSelectedPlan] = useState(null);
    return ( 
    <div className="grid grid-cols-4 grid-rows-6 gap-5 p-4 h-screen bg-gray-100 dark:bg-gray-100">
          {/* Header Component (Visible on All Pages) */} 
          <Header/>
          <NewChat/>
          <Navigation/>
          <div className="col-span-4 row-span-5 row-start-3 bg-white p-4 rounded-lg shadow-md overflow-x-auto h-auto">
      {/* Greeting Section */}
                  <h1 className="text-center text-4xl font-bold mb-6">EchoGPT Store</h1>
      <p className="text-gray-400 text-lg mb-8">Choose a plan that fits your needs.</p>

      {/* Store Items */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-10xl">
        {storeItems.map((item) => (
          <div key={item.id} className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-white text-2xl font-semibold mb-2">{item.name}</h2>
            <p className="text-gray-300 mb-4">{item.description}</p>
            <p className="text-xl font-bold text-blue-400 mb-4">{item.price}</p>
            
            <ul className="text-gray-400 mb-4 text-left space-y-2">
              {item.features.map((feature, index) => (
                <li key={index}>✅ {feature}</li>
              ))}
            </ul>

            <button
              className={`w-full py-2 rounded-lg text-white ${
                selectedPlan === item.id ? "bg-green-600" : "bg-blue-600 hover:bg-blue-700"
              }`}
              onClick={() => setSelectedPlan(item.id)}
            >
              {selectedPlan === item.id ? "Selected" : "Subscribe"}
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>

    );
  }
  