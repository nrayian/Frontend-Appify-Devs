import { Link } from "react-router-dom";
import logo from "./images/logo.png"; // Adjust based on file location
import Header from "./Header";
import Navigation from "./Navigation";
import NewChat from "./NewChat";
import Footer from "./Footer";
import { Send, Mic, Plus, Clock } from "lucide-react";
import { useState } from "react";
import axios from "axios";

function TaskCard({ title, description }) {
  return (
    <div className="bg-gray-100 p-5 rounded-lg shadow-md">
      <h3 className="font-semibold text-lg text-gray-900">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
}

export default function Home() {
  const [chatHistory, setChatHistory] = useState([]);
  const [message, setMessage] = useState("");
  const [apiKey, setApiKey] = useState("echogpt-YBvjdR4q1E-annKsr5mKF-QWx6a6W3gT-FgsTBvOUEw-HEdkmoVjvkPN4_TqM08q7rsM"); // Replace with your actual API key or use environment variables

  const sendMessage = async () => {
    if (!message.trim()) return;
  
    const newMessage = { text: message, sender: "user" };
    setChatHistory([...chatHistory, newMessage]);
  //+
    try {//+
      const response = await axios.post('https://api.echogpt.live/v1/chat/completions', {//+
        messages: [//+
          { role: 'system', content: 'You are a helpful assistant.' },//+
          { role: 'user', content: message }//+
        ],//+
        "model": "EchoGPT"//+
      }, {//+
        headers: { 'x-api-key': apiKey }//+
      });//+
  //+
      const assistantMessage = { text: response.data.choices[0].message.content, sender: "assistant" };//+
      setChatHistory(prevHistory => [...prevHistory, assistantMessage]);//+
    } catch (error) {//+
      console.error("Error sending message to EchoGPT:", error);//+
      // You might want to show an error message to the user here//+
    }//+
    setMessage("");
  };
  return (
    <div className="grid grid-cols-4 grid-rows-6 gap-5 p-4 h-screen bg-gray-100 dark:bg-gray-100">
      {/* Header Component (Visible on All Pages) */} 
      <Header/>
      <NewChat/>
      <Navigation/>

      {/* Hero Section */}
      <div className="col-span-4 row-span-3 row-start-3 bg-white p-4 rounded-lg shadow-md overflow-x-auto h-auto">
  {/* Greeting Section */}
  <div className="text-center">
    <h1 className="text-4xl font-bold text-gray-900">
      Hello There! <span className="wave">👋</span> How can I assist you today?
    </h1>
    <p className="text-gray-700 mt-2 text-lg">
      Your personal AI assistant is ready to help—ask me anything, anytime.
    </p>
  </div>

  {/* AI Task Cards */}
  <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8 max-w-10xl">
    <TaskCard
      title="Unlock Your Creative Flow"
      description="Receive custom prompts that reflect your writing style, helping you push past creative blocks and spark new ideas for your projects."
    />
    <TaskCard
      title="Build a Resume That Shines"
      description="Craft a resume tailored to highlight your experience and match the job you want, designed to grab the attention of potential employers."
    />
    <TaskCard
      title="Set a Challenge That Transforms You"
      description="Create a personalized challenge based on your goals and habits, designed to push you out of your comfort zone and help you grow."
    />
    <TaskCard
      title="Write Irresistible Social Content"
      description="Generate catchy, clever captions for your photos or videos, perfect for increasing engagement and sparking conversations."
    />
  </div>
</div>

      
      <div className="w-full bg-white p-4 shadow-md dark:bg-gray-800 fixed bottom-0 left-0 right-0">
      {/* Chat Input Box */}
      <div className="w-full max-w-5xl mx-auto flex items-center bg-gray-100 rounded-full shadow px-4 py-2 space-x-4">
        {/* EchoGPT Branding */}
        <div className="flex items-center space-x-2">
          <span className="text-purple-600 font-semibold">EchoGPT</span>
          <span className="text-purple-500">🚀</span>
        </div>

        {/* Input Field */}
        <input
          type="text"
          placeholder="Ask a question..."
          className="flex-1 bg-transparent outline-none text-gray-700 p-2"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        {/* Action Buttons */}
        <button className="text-gray-500 hover:text-gray-700">
          <Plus size={20} />
        </button>
        <button className="text-gray-500 hover:text-gray-700">
          <Clock size={20} />
        </button>
        <button className="text-gray-500 hover:text-gray-700">
          <Mic size={20} />
        </button>
        <button
          onClick={() => {
            if (message.trim()) {
              sendMessage(message);
              setMessage(""); // Clear input after sending
            }
          }}
          className="text-blue-600 hover:text-blue-800"
        >
          <Send size={24} />
        </button>
      </div>
    </div>
    </div>
    
  );
}
