import { Button } from "@nextui-org/react";
import React from "react";
import { Link, NavLink } from "react-router-dom";

function DashboardNav() {
	return (
		<div className="flex w-full justify-between">
			<div className="mx-5 flex gap-3">
				<Button className="bg-orange-700 text-white font-semibold">
					<NavLink to="/dashboard">Translate</NavLink>
				</Button>

				<Button className="bg-orange-700 text-white font-semibold">
					<NavLink to="history">History</NavLink>
				</Button>
			</div>

			<Button className="bg-blue-900 text-white font-semibold">
				<Link>Logout</Link>
			</Button>
		</div>
	);
}

export default DashboardNav;
