import { BrowserRouter, Routes, Route } from "react-router-dom";
import Jenri from "./pages/Jenri";
import Raja from "./pages/Raja";
import Ardli from "./pages/Ardli";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jenri" element={<Jenri />} />
        <Route path="/raja" element={<Raja />} />
        <Route path="/ardli" element={<Ardli />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;