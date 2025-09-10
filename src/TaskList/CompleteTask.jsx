import React from 'react'

const CompleteTask = ({task}) => {
  return (
    <div className='h-full w-[300px] bg-[#cb618d] rounded-xl flex-shrink-0 pt-2 '>
        <div className='flex justify-between px-5 items-center'>
          <h3 className='bg-red-700 px-3 font-extrabold rounded-sm text-white'>{task.category}</h3>
          <h3 className='font-extrabold text-white'>{task.taskDate}</h3>
        </div>

        <h2 className='text-3xl mt-5 p-5 font-bold'>{task.taskTitle}</h2>
        <h3 className='  px-5 font-semibold'>{task.taskDescription}</h3>

        <div className='mt-4 ml-25'>
          <button className='bg-green-500 px-2 py-1 rounded-sm font-bold cursor-pointer'>Completed</button>
        </div>
      </div>
    )
}

export default CompleteTask