import { Link } from "react-router-dom";

export default function Footer() {
    return (
      <footer className="bg-gray-300 p-4 flex justify-around items-center w-full">
  
        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 rounded-md shadow hover:bg-gray-200 transition">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z"></path>
            </svg>
          </button>
  
          <button className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 rounded-md shadow hover:bg-gray-200 transition">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="18" cy="5" r="3"></circle>
              <circle cx="6" cy="12" r="3"></circle>
              <circle cx="18" cy="19" r="3"></circle>
              <path d="M8.59 13.51 15.42 17.49"></path>
              <path d="m15.41 6.51-6.82 3.98"></path>
            </svg>
          </button>
  
          <button className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 rounded-md shadow hover:bg-gray-200 transition">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M19.4 15a7.9 7.9 0 0 0 .6-3 7.9 7.9 0 0 0-.6-3l2.1-2.4a.5.5 0 0 0-.1-.7l-2.8-2.8a.5.5 0 0 0-.7.1l-2.4 2.1a7.9 7.9 0 0 0-3-0.6 7.9 7.9 0 0 0-3 0.6L5.6 2.6a.5.5 0 0 0-.7-.1L2 5.3a.5.5 0 0 0-.1.7l2.1 2.4a7.9 7.9 0 0 0-.6 3 7.9 7.9 0 0 0 .6 3l-2.1 2.4a.5.5 0 0 0 .1.7l2.8 2.8a.5.5 0 0 0 .7-.1l2.4-2.1a7.9 7.9 0 0 0 3 .6 7.9 7.9 0 0 0 3-.6l2.4 2.1a.5.5 0 0 0 .7.1l2.8-2.8a.5.5 0 0 0 .1-.7L19.4 15z"></path>
            </svg>
          </button>
  
          <button className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 rounded-md shadow hover:bg-gray-200 transition">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 16v.01"></path>
              <path d="M12 12v-4"></path>
            </svg>
          </button>
        </div>
      </footer>
    );
  }
  