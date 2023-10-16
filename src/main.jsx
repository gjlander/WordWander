import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
   <BrowserRouter>
        <React.StrictMode>
            <NextUIProvider>
                <App />
            </NextUIProvider>
        </React.StrictMode>
   </BrowserRouter>
);
