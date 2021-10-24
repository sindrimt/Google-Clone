import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./global.css";

import { BrowserRouter as Router } from "react-router-dom";
import { ResultContextProvider } from "./contexts/ResultContextProvider";

ReactDOM.render(
  <ResultContextProvider>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </ResultContextProvider>,
  document.getElementById("root")
);
