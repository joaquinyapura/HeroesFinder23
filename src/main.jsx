import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Approuter } from "./router/Approuter";
import { HeroesApp } from "./HeroesApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Approuter>
      <HeroesApp />
    </Approuter>
  </React.StrictMode>
);
