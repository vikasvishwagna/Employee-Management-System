import React from 'react'

function Header({changeUser, data }) {

  console.log(changeUser)

  const handleClick = ()=>{
    // window.location.reload();
    changeUser("");
  }
  
  return (
    
    <div className='flex items-center justify-between '>
      
      <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>{data.firstName}👋</span></h1>


      <button onClick={handleClick} className='bg-red-500 text-white px-3 py-2 rounded-3xl text-lg font-medium cursor-pointer hover:bg-red-600'>Logout</button>
    </div>
  )
}

export default Header