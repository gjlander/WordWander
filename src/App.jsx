import { Card, CardBody } from "@nextui-org/react";
import SignUp from "./components/Signup";
import Login from "./components/Loginin";
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
           
           <Login setuser={setuser}/>
            <CardBody className="text-center">
                <h1 className="text-4xl">WordWander</h1>
            </CardBody>
        </Card>
    );
}

export default App;
