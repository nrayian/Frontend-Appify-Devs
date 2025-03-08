import { Link } from "react-router-dom";
import logo from "./images/logo.png"; // Adjust based on file location

export default function Header() {
    return (
          <div className="col-span-4 flex justify-between items-center">
          <img src={logo} alt="EchoGPT Logo" className="mx-left w-10 h-10 mb-6" /><Link to="/">
            <div className="mx-left text-2xl font-extrabold text-black dark:text-purple-600 tracking-[10px]">EchoGPT</div></Link>
            <button className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center shadow-md hover:bg-purple-600 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
          </div>
        
      );
}