import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import EchoGPT from "./History";
import Store from "./Store";
import AITasks from "./AITasks";
import Support from "./Support";
import Subscription from "./Subscription";
import APIPlatform from "./APIPlatform";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<EchoGPT />} />
        <Route path="/store" element={<Store />} />
        <Route path="/ai-tasks" element={<AITasks />} />
        <Route path="/support" element={<Support />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/api-platform" element={<APIPlatform />} />
      </Routes>
    </Router>
  );
}

export default App;
