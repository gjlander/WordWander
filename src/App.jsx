import { Card, CardBody } from "@nextui-org/react";
import Dashboard from "./Components/Dashboard";
import Hist from "./Components/Hist";
import SignUp from "./components/Signup";
import Login from "./components/Login";
import { Route, Routes, Navigate } from "react-router-dom";
import { useLog } from "./Context/AuthProvider";
import Translate from "./components/Translate";

function App() {
	const {isLoggedIn} =  useLog()

    return (
			<>
				{/* <Card>
               <>
            
                <CardBody className="text-center">
                        <h1 className="text-4xl">WordWander</h1>
                    </CardBody>
                </Card> */}
				<Routes>
					<Route
						path="/"
						element={
							isLoggedIn ? (
								<Navigate to="/dashboard" />
							) : (
								<Navigate to="/login" />
							)
						}
					/>

					<Route
						path="/signup"
						element={!isLoggedIn ? <SignUp /> : <Navigate to="/" />}
					/>
					<Route
						path="/login"
						element={!isLoggedIn ? <Login /> : <Navigate to="/" />}
					/>
					<Route path="/dashboard" element={isLoggedIn? <Translate/> : <Navigate to="/login"/>}>
						<Route
							path="translate"
							element={isLoggedIn ? <Translate /> : <Navigate to="/login" />}
						/>
						<Route
							path="history"
							element={isLoggedIn ? <Hist /> : <Navigate to="/login" />}
						/>
					</Route>
				</Routes>
			</>
		);
}

export default App;
