import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import App from "./App.jsx";
import {BrowserRouter as Router} from 'react-router-dom'
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./Context/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<AuthProvider>
		<BrowserRouter>
			<React.StrictMode>
				<NextUIProvider>
					<App />
				</NextUIProvider>
			</React.StrictMode>
		</BrowserRouter>
	</AuthProvider>
);
