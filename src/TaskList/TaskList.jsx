import React from 'react'

function TaskList() {
  return (
    <div id='taskList' className='flex flex-nowrap overflow-x-auto gap-5 h-[55%] w-full  mt-25 py-6 px-1 '> 

      <div className='h-full w-[300px] bg-orange-300 rounded-xl flex-shrink-0 pt-2 '>
        <div className='flex justify-between px-5'>
          <h3 className='bg-red-700 px-3 font-extrabold rounded-sm text-white'>High</h3>
          <h3 className='font-extrabold text-white'>26 Aug 2025</h3>
        </div>

        <h2 className='text-3xl mt-10 p-5 font-bold'>Ek aur task</h2>
        <h3 className='text-2xl  px-5 font-semibold'>Task jaisa kabhi nahi deha waisa</h3>
      </div>

      
    </div>
  )
}

export default TaskList