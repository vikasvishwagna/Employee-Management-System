import React from 'react'
import Header from '../other/Header'
import TaskListNumber from '../other/TaskListNumber'
import TaskList from '../../TaskList/TaskList'

function EmployeeDashboard() {
  return (
    <div className='bg-[#1C1C1C] h-screen p-10'>
      <Header />
      <TaskListNumber />
      <TaskList />
    </div>
  )
}

export default EmployeeDashboard