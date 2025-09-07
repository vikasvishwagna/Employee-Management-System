import React from 'react'

const FailedTask = ({task}) => {
  return (
    <div className='h-full w-[300px] bg-[#e94a8f] rounded-xl flex-shrink-0 pt-2 '>
        <div className='flex justify-between px-5 items-center'>
          <h3 className='bg-red-700 px-3 font-extrabold rounded-sm text-white'>High</h3>
          <h3 className='font-extrabold text-white'>26 Aug 2025</h3>
        </div>

        <h2 className='text-3xl mt-5 p-5 font-bold'>{task.taskTitle}</h2>
        <h3 className='  px-5 font-semibold'>{task.taskDescription}</h3>

        <div className='mt-4 ml-25'>
          <button className='bg-red-500 px-2 py-1 rounded-sm font-bold cursor-pointer'>Failed</button>
        </div>
      </div>
  )
}

export default FailedTask