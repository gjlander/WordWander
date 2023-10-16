import { Card, CardBody } from "@nextui-org/react";
import SignUp from "./components/Signup";
import Login from "./components/Login";
import Transalotor from "./components/Transalotor";
import{Route,Routes,Navigate} from "react-router-dom"

import{useState,useEffect} from 'react'
function App() {
    const [user,setuser]=useState(null)
  useEffect(()=>{
if(!user){
  setuser(JSON.parse(localStorage.getItem("user")))
}
},[user])
    return (
        <Card>
             <Routes>
             <Route path="/" element={user? <Transalotor/>:<Navigate to="/login"/>} />
          
          
             <Route path="/signup" element={!user? <SignUp setuser={setuser}/>:<Navigate to="/"/>} />
         <Route path="/login" element={ !user? <Login setuser={setuser}/>:<Navigate to="/"/>} />
           </Routes>
           {/* <Login setuser={setuser}/> */}
            <CardBody className="text-center">
                <h1 className="text-4xl">WordWander</h1>
            </CardBody>
        </Card>
    );
}

export default App;
