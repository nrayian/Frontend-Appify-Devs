
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "./Header";
import Navigation from "./Navigation";
import NewChat from "./NewChat";
import { Send, Mic, Plus, Clock } from "lucide-react";

export default function EchoGPT() {
  const [chatHistory, setChatHistory] = useState([]);
  const [message, setMessage] = useState("");
  const [apiKey, setApiKey] = useState("echogpt-YBvjdR4q1E-annKsr5mKF-QWx6a6W3gT-FgsTBvOUEw-HEdkmoVjvkPN4_TqM08q7rsM"); // Replace with your actual API key or use environment variables

  useEffect(() => {
    fetch('https://api.echogpt.live/v1/chat/completions', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'echogpt-YBvjdR4q1E-annKsr5mKF-QWx6a6W3gT-FgsTBvOUEw-HEdkmoVjvkPN4_TqM08q7rsM'
      },
      body: JSON.stringify({
          messages: [{ role: 'system', content: 'You are a helpful assistant.' }],
          "model": "EchoGPT"
      })
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
  }, []);

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

      {/* Chat History */}
      <div className="col-span-4 row-span-3 row-start-3 bg-white p-4 rounded-lg shadow-md overflow-x-auto h-auto">
        <h2 className="text-lg font-bold mb-2">Chat History</h2>
        <div className="space-y-2">
          {chatHistory.length > 0 ? (
            chatHistory.map((chat, index) => (
              <div key={index} className="p-2 border rounded bg-gray-50 dark:bg-gray-300">
                <strong>{chat.sender}:</strong> {chat.text}
              </div>
            ))
          ) : (
            <p className="text-gray-500">No chat history available</p>
          )}
        </div></div>

      {/* Chat Input */}
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
