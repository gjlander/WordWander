import { useState } from "react";

export default function SignUp({setuser}){
    const [email,setemail]=useState("")
    const [password,Setpassword]=useState("")
    const[error,Seterror]=useState(null)
    const[loading,Setloading]=useState(false)
    const handleSubmit = async(e)=>{
e.preventDefault();
Setloading(true)
Seterror(null)
//log.user
const response =await fetch("http://localhost:3000/user/signup",{
    method:"post",
    headers:{"content-Type":"application/json"},
    body:JSON.stringify({email,password}),
})
const data=await response.json()
if(!response.ok){
    Setloading(false)
    Seterror(data.error) 

}
if(response.ok){
   
    localStorage.setItem("user",JSON.stringify(data))
    Setloading(false)
    setuser(data)

}
    }

        return(
           
            <form className="Signup" onSubmit={handleSubmit}>
                <h3>SignUp</h3>
                <label >Email</label>
                <input value={email}  type="email" onChange={(e)=>setemail(e.target.value)}/>

                <label>password:</label>
                <input value={password} type="password" onChange={(e)=>Setpassword(e.target.value)}/> 
                    <button>Log In</button>
                    {error && <div className="error"> {error}</div>}


            </form>
            
            
        )
    

}