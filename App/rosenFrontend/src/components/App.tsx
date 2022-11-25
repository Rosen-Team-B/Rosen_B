import React from "react";
import "../styles/App.css";
import Home from "./pages/Home";
import Stepper from "./pages/ProgressiveStepper";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="Stepper" element={<Stepper />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
