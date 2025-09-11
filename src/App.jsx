import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";

import { AuthContext } from "./context/AuthProvider";

function App() {

const[user, setUser] = useState(null);
const [loggedInUserData, setLoggedInUserData] = useState(null)//holds the data of loggedIn person.

const authData = useContext(AuthContext);


useEffect(()=>{
  const loggedInUser = localStorage.getItem("loggedInUser");
  // console.log(loggedInUser)
},[])


const handleLogin = (email,password)=>{
  if(email == authData.admin[0].email && password == authData.admin[0].password){
    setUser("admin"); 
    localStorage.setItem("loggedInUser", JSON.stringify({role:"admin"}));
    setLoggedInUserData(authData.admin[0]);
  }else if(authData){
    const employee = authData.employees.find((obj)=>obj.email == email && obj.password == password)
    if(employee){
      setUser("employee");
      setLoggedInUserData(employee)// emp-> id:1 or id:3...
      localStorage.setItem("loggedInUser", JSON.stringify({role:"employee"}));
    }
  }else{
  alert("Invalid crediantals");
}
}


  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> :''}

      {user == "admin" ? (<AdminDashboard changeUser={setUser} data={loggedInUserData}/>) :
       user == "employee" ? (<EmployeeDashboard changeUser={setUser} 
       data={loggedInUserData}/>) :
       (null)
       }
    </>
  );
}


export default App;
