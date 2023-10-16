import React from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import { Button } from "@nextui-org/react";
import DashboardNav from "./DashboardNav";
import Hist from "./Hist";

function Dashboard() {
	return (
		<>
			<div className="flex items-center w-screen px-5 py-3 max-w-7xl mx-auto">
				<Link to="/dashboard">
					<p className="text-xl font-semibold text-blue-950">Dashboard</p>
				</Link>
				<DashboardNav />
			</div>
			<Outlet />
		</>
	);
}

export default Dashboard;
