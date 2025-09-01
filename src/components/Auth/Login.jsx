import React, { useState } from 'react'

function Login({handleLogin}) {

  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");

  const handleSubmit = (e)=>{
    e.preventDefault();
    handleLogin(email,password)
    setEmail("");
    setPassword("");
  }
  return (
    <div className='main-div flex flex-col items-center justify-center h-screen w-screen '>
      <p className='text-5xl font-bold mb-15 '>Login Page</p>
      <div className='login-container border-3 border-emerald-800 rounded-3xl px-6 py-15'>
        {/* <p>Login</p> */}
        
        <form onSubmit={(e)=>{handleSubmit(e)}} className='flex flex-col gap-2'>

          <input value={email} onChange={(e)=>setEmail(e.target.value)}
           className='text-black bg-white placeholder:text-gray-500  outline-none border-2 border-emerald-700 px-5 py-2.5 rounded-full'
          type="email" placeholder='Enter e-mail' />

          <input value={password} onChange={(e)=>setPassword(e.target.value)}
          className='text-black bg-white placeholder:text-gray-500  outline-none border-2 border-emerald-700 px-5 py-2.5 rounded-full' 
          type="password" placeholder='Enter password' />

          <button className='bg-emerald-400 py-2 px-5 rounded-full cursor-pointer hover:bg-emerald-600 font-bold mt-7 '>Login</button>
        </form>
        
      </div>
    </div>
  )
}

export default Login