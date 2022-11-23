import React from "react";
import "../styles/App.css";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import { Route } from "react-router-dom";
function App() {
  return (
    // placeholder for future pages
    <Step2 />

    // <Route render={() => <Step2 />} />
  );
}

export default App;
