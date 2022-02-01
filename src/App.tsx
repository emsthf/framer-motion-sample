import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstAnimation from "./components/FirstAnimation";
import VariantsEx1 from "./components/VariantsEx1";
import VariantsEx2 from "./components/VariantsEx2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstAnimation />} />
        <Route path="/variants1" element={<VariantsEx1 />} />
        <Route path="/variants2" element={<VariantsEx2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
