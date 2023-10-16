import { Button } from "@nextui-org/react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useLog } from "../Context/AuthProvider";

function DashboardNav() {
	const {isLoggedIn, setIsLoggedIn} = useLog()
	return (
		<div className="flex w-full justify-between">
			<div className="mx-5 flex gap-3">
				<Button className="bg-orange-700 text-white font-semibold">
					<NavLink to="translate">Translate</NavLink>
				</Button>

				<Button className="bg-orange-700 text-white font-semibold">
					<NavLink to="history">History</NavLink>
				</Button>
			</div>

			<Button className="bg-blue-900 text-white font-semibold" onClick={(e) => {
				e.preventDefault();
				setIsLoggedIn(false)
			}}>
				<Link>{isLoggedIn? "Logout" : "Login"}</Link>
			</Button>
		</div>
	);
}

export default DashboardNav;
