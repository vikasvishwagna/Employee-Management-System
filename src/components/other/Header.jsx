import React from 'react'

function Header({data}) {
  console.log(data)
  return (
    
    <div className='flex items-center justify-between '>
      
      <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>vikas👋</span></h1>
      <button className='bg-red-500 text-white px-3 py-2 rounded-3xl text-lg font-medium cursor-pointer hover:bg-red-600'>Logout</button>
    </div>
  )
}

export default Header