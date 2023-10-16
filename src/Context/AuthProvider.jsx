import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios';


const AuthContext = createContext();

export const useLog = () => {
    return useContext(AuthContext)
}

function AuthProvider({children}) {
const [isLoggedIn, setIsLoggedIn] = useState(true)
const [userData, setUserData] = useState({})

// useEffect(() => {
//     async function fetchUser(){
//         try{
//             const res = await axios.get(`${import.meta.env.VITE_API_URL}/user/${userData.username}`, 
//             {withCredentials: true})
//             if(res.status === 200 && res.data){
//                 const userD = await res.data
//                 setUserData(userD)
//                 setIsLoggedIn(true)
//             }else{
//                 setIsLoggedIn(false)
//                 setUserData({})
//             }
//         }catch(err){
//             setIsLoggedIn(false)
//             setUserData({})
//         }
//     }
//     fetchUser()
// },[])

const value = {
    isLoggedIn,
    setIsLoggedIn,
    userData,
    setUserData
}

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider