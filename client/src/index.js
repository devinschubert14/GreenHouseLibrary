import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./component/Navbar";


const container = document.getElementById("root")
const root = createRoot(container)


root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />

    </BrowserRouter>
  </React.StrictMode>,

);
