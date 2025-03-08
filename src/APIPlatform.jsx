import Header from "./Header";
import Navigation from "./Navigation";

export default function APIPlatform() {
    return ( 
        <div className="grid grid-cols-5 grid-rows-7 gap-4 p-4 h-screen bg-gray-100 dark:bg-gray-100">
              {/* Header Component (Visible on All Pages) */} 
              <Header/>
              <Navigation/>
              <div className="text-white p-10">🔑 API Platform Page</div>;
              </div>);
  }
  