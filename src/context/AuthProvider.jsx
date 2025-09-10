import React, {createContext, useState, useEffect } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage';



export const AuthContext =  createContext();

const AuthProvider = ({children}) => {

  const [userData, setUserData] = useState(null);
  // console.log("userData",userData)
  //   console.log("userData",userData)

  
  useEffect(() => {
    setLocalStorage();
  const {employees, admin} = getLocalStorage();//destructring.
  setUserData({employees,admin})
}, [])

  return (
    <div>
      <AuthContext.Provider value={userData}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider