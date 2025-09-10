import React from 'react'

const AcceptTask = ({task}) => {
  return (
    <div className='h-full w-[300px] bg-orange-300 rounded-xl flex-shrink-0 pt-2 '>

        <div className='flex justify-between px-5 items-center'>
          <h3 className='bg-red-700 px-3 font-extrabold rounded-sm text-white'>{task.category}</h3>
          <h3 className='font-extrabold text-white'>{task.taskDate}</h3>
        </div>

        <h2 className='text-3xl mt-5 p-5 font-bold'>{task.taskTitle}</h2>
        <h3 className='  px-5 font-semibold'>{task.taskDescription}.</h3>

        <div className='flex justify-between m-1 mt-3 gap-1'>
          <button className='bg-green-400 py-1 px-1.5 rounded-sm w-full text-sm font-bold cursor-pointer '>Mark as completed</button>
        <button className='bg-red-600 py-1 px-1.5 rounded-sm text-sm w-full font-bold cursor-pointer '>Mark as Failed</button>
        </div>
      </div>
  )
}

export default AcceptTask