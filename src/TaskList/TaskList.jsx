import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import NewTask from './NewTask'

function TaskList({data}) {
  console.log("taskL",data)
  if (!data || !data.tasks) {
    return <p>No tasks available</p>; // avoid crash
  }
  return (
    <div id='taskList' className='flex flex-nowrap overflow-x-auto gap-5 h-[55%] w-full  mt-25 py-6 px-1 '> 

    {data.tasks.map((ele, index)=>{
      
      if(ele.active){
       return <AcceptTask key={index} task={ele} />
      }
       if(ele.newTask){
       return <NewTask key={index} task={ele}/>
      }
       if(ele.completed){
       return <CompleteTask key={index} task={ele}/>
      }
      if(ele.failed){
       return <FailedTask key={index} task={ele}/>
      }
      
    }
    )}
      
    </div>
  )
}

export default TaskList

{/* <div className='h-full w-[300px] bg-[#83c5be] rounded-xl flex-shrink-0 pt-2 '>
        <div className='flex justify-between px-5 items-center'>
          <h3 className='bg-red-700 px-3 font-extrabold rounded-sm text-white'>High</h3>
          <h3 className='font-extrabold text-white'>26 Aug 2025</h3>
        </div>

        <h2 className='text-3xl mt-5 p-5 font-bold'>{data.tasks[2].taskTitle}</h2>
        <h3 className='  px-5 font-semibold'>{data.tasks[2].taskDescription}</h3>
      </div>

      <div className='h-full w-[300px] bg-[#8338ec] rounded-xl flex-shrink-0 pt-2 '>
        <div className='flex justify-between px-5 items-center'>
          <h3 className='bg-red-700 px-3 font-extrabold rounded-sm text-white'>High</h3>
          <h3 className='font-extrabold text-white'>26 Aug 2025</h3>
        </div>

        <h2 className='text-3xl mt-5 p-5 font-bold'>{data.tasks[2].taskTitle}</h2>
        <h3 className='  px-5 font-semibold'>{data.tasks[2].taskDescription}</h3>
      </div>

      <div className='h-full w-[300px] bg-[#ff99c8] rounded-xl flex-shrink-0 pt-2 '>
        <div className='flex justify-between px-5 items-center'>
          <h3 className='bg-red-700 px-3 font-extrabold rounded-sm text-white'>High</h3>
          <h3 className='font-extrabold text-white'>26 Aug 2025</h3>
        </div>

        <h2 className='text-3xl mt-5 p-5 font-bold'>{data.tasks[2].taskTitle}</h2>
        <h3 className='  px-5 font-semibold'>{data.tasks[2].taskDescription}</h3>
      </div> */}
