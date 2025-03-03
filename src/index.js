import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";  // Import the App component which contains the routes
import Header from "./components/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />  {/* Just render the App component here, no need for BrowserRouter */}
  </React.StrictMode>
);
