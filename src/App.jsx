import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";

import { AuthContext } from "./context/AuthProvider";

function App() {

const[user, setUser] = useState(null);

const authData = useContext(AuthContext);
console.log(authData)

const handleLogin = (email,password)=>{
  if(email == "admin@me.com" && password =="123"){
    setUser("admin"); 
  }else if(email == "user@me.com" && password =="123"){
    setUser("employee");
  }else{
  alert("Invalid crediantals");
}
}

 // loading state (before authData is available)
  if (!authData) {
    return <h2>Loading...</h2>;
  }



  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> :''}
      {user == "admin" ? <AdminDashboard /> : <EmployeeDashboard />}
    </>
  );
}


export default App;
