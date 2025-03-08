import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="col-span-3 row-start-2 bg-white p-4 rounded-lg shadow-md dark:bg-gray-200">
      <nav className="flex items-center justify-start space-x-4 p-4 overflow-x-auto">
        <Link
          to="/history"
          className="flex items-center gap-2 px-4 py-2 text-black rounded-md hover:bg-[#DECCFF] transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 3v18h18"></path>
            <path d="M9 9h6v12"></path>
            <path d="M13 5H9v4h4V5z"></path>
          </svg>
          History
        </Link>
        <Link
          to="/store"
          className="flex items-center gap-3 px-4 py-2 text-black rounded-md hover:bg-[#DECCFF] transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 3h18v18H3z"></path>
            <path d="M7 7h10v10H7z"></path>
          </svg>
          Store
        </Link>
        <Link
          to="/ai-tasks"
          className="flex items-center gap-3 px-4 py-2 text-black rounded-md hover:bg-[#DECCFF] transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v20"></path>
            <path d="M5 12h14"></path>
            <path d="M19 5L12 12 5 5"></path>
          </svg>
          AI Tasks
        </Link>
        <Link
          to="/support"
          className="flex items-center gap-3 px-4 py-2 text-black rounded-md hover:bg-[#DECCFF] transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 16v.01"></path>
            <path d="M12 12v-4"></path>
          </svg>
          Support
        </Link>
        <Link
          to="/subscription"
          className="flex items-center gap-3 px-4 py-2 text-black rounded-md hover:bg-[#DECCFF] transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 3h18v18H3z"></path>
            <path d="M9 9h6v6H9z"></path>
            <path d="M5 5h14v14H5z"></path>
          </svg>
          Subscription
        </Link>
        <a
          href="https://platform.echogpt.live/"
          className="flex items-center gap-3 px-4 py-2 text-black rounded-md hover:bg-[#DECCFF] transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
          </svg>
          API Platform
        </a>
        <a
          href="https://discord.com/"
          className="flex items-center gap-3 px-4 py-2 text-black rounded-md hover:bg-[#DECCFF] transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
            <rect x="9" y="9" width="6" height="6"></rect>
            <line x1="9" y1="1" x2="9" y2="4"></line>
            <line x1="15" y1="1" x2="15" y2="4"></line>
            <line x1="9" y1="20" x2="9" y2="23"></line>
            <line x1="15" y1="20" x2="15" y2="23"></line>
          </svg>
          Discord
        </a>
      </nav>
    </div>
  );
}
