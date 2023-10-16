import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios';


const AuthContext = createContext();

export const useLog = () => {
    return useContext(AuthContext)
}

function AuthProvider({children}) {
const [isLoggedIn, setIsLoggedIn] = useState(false)
const [userData, setUserData] = useState({})

useEffect(() => {
    async
},[])

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