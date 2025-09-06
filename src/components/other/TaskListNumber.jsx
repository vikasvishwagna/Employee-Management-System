import React from 'react'

function TaskListNumber({data}) {
  return (
    <div className='flex  mt-10 screen gap-5 justify-between'>
      <div className='w-[45%] bg-red-400 px-9 py-6 rounded-xl'>
        <h2 className='text-3xl font-bold'>0</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>

      <div className='w-[45%] bg-emerald-400 px-9 py-6 rounded-xl'>
        <h2 className='text-3xl font-bold'>0</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>

      <div className='w-[45%] bg-amber-400 px-9 py-6 rounded-xl'>
        <h2 className='text-3xl font-bold'>0</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>

      <div className='w-[45%] bg-blue-400 px-9 py-6 rounded-xl'>
        <h2 className='text-3xl font-bold'>0</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumber