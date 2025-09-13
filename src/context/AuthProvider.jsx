import React, { createContext, useState, useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({ employees: [], admin: [] });

  useEffect(() => {
    setLocalStorage();
    const { employees, admin } = getLocalStorage(); //destructring.
    setUserData({ employees, admin });
  }, []);

  // useEffect(()=>{
  //   localStorage.setItem("employees",JSON.stringify(userData.employees));
  // },[userData])

  return (
    <div>
      <AuthContext.Provider value={[userData, setUserData]}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
