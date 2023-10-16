import { useState } from "react";
import { NavLink } from 'react-router-dom';
import { useLog } from "../Context/AuthProvider";

export default function Login({setuser}){
    const [email,setemail]=useState("")
    const [password,Setpassword]=useState("")
    const[error,Seterror]=useState(null)
    const[loading,Setloading]=useState(false)
    const {setIsLoggedIn} = useLog()
//     const handleSubmit = async(e)=>{
// e.preventDefault();
// Setloading(true)
// Seterror(null)
// //log.user
// const response =await fetch("http://localhost:3000/user/login",{
//     method:"post",
//     headers:{"content-Type":"application/json"},
//     body:JSON.stringify({email,password}),
// })
// const data=await response.json()
// if(!response.ok){
//     Setloading(false)
//     Seterror(data.error) 

// }
// if(response.ok){
   
//     localStorage.setItem("user",JSON.stringify(data))
//     Setloading(false)
//     setIsLoggedIn(true)

// }
    // }

        return(
          
            <form className="login" onSubmit={() => setIsLoggedIn(true)}>
                  <div className="py-[100px] px-[600px]">
           <div className="  shadow-xl  w-[300px] ">
            <div className="flex flex-col justify-start  h-[500px] text-center">
                <h3 className="p-2">Login</h3>
               
                <input className="border rounded-xl p-2 px-8" value={email}placeholder="Email" type="email" onChange={(e)=>setemail(e.target.value)}/>
                   
               
                <input className="border rounded-xl p-2 px-8" value={password}  placeholder="Password" type="password" onChange={(e)=>Setpassword(e.target.value)}/> 
                    <button className="border rounded-sm p-2 mx-[20px]">Log In</button>
                    {error && <div className="error"> {error}</div>}

                    </div>
                    <div>
                        <span>Donot you have an Account</span>
                        <button className="border rounded-sm p-2 mx-[20px]">

                        <NavLink to="/signup">Click Me</NavLink>
                        </button>
                    </div>
            </div>
            </div> 
            </form>
           
            
            
        )
    

}