import Header from "./Header";
import Navigation from "./Navigation";
import NewChat from "./NewChat";
export default function Subscription() {
    return ( 
        <div className="grid grid-cols-4 grid-rows-6 gap-5 p-4 h-screen bg-gray-100 dark:bg-gray-100">
                              {/* Header Component (Visible on All Pages) */} 
                              <Header/>
                              <NewChat/>
              <Navigation/>
              <div className="text-white p-10">💳 Subscription Page</div></div>);
  }
  