import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { DiplomaProvider } from "./contexts/DiplomaContext.jsx";
import { StudentProvider } from "./contexts/StudentContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <DiplomaProvider>
        <StudentProvider>
          <App />
        </StudentProvider>
      </DiplomaProvider>
    </BrowserRouter>
  </React.StrictMode>
);
