import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Warmup from "./pages/Warmup";
import Intermediate from "./pages/Intermediate";
import HighFrequencyGre from "./pages/HighFrequencyGre";
import Hard from "./pages/Hard";
import Navbar from "./components/Navbar";
import Vocab from "./components/Vocab";

function App() {
  return (
    <>
      <div className="overflow-x-hidden">
        <BrowserRouter>
          <Vocab />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/warmup" element={<Warmup />} />
            <Route path="/intermediate" element={<Intermediate />} />
            <Route path="/highfrequencygre" element={<HighFrequencyGre />} />
            <Route path="/hard" element={<Hard />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
