import React from "react";
import { useState,useEffect } from "react";

const CreateTask = () => {

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("")
  const [taskDate, setTaskDate] = useState("");
  const [asignTo, setAsignTo] = useState("");
  const [category, setCategory] = useState("");

  const [task, setTask] = useState({})

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(taskDescription,taskDate,taskTitle)
    setTask({taskTitle,taskDate,taskDescription,category,active:false,newTask:true,failed:false,completed:false})

    console.log(task)
   

  };

  return (
    <div className="bg-[#1C1C1C] mt-5 p-5 rounded">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-wrap items-start justify-between"
      >
        <div id="left-div" className="w-1/2 p-5">
          <div>
            <p className="text-white font-medium text-xl">Task Title</p>
            <input value={taskTitle}
              onChange={(e)=>{
                setTaskTitle(e.target.value)
              }}
              className="bg-[#433f3f] text-sm py-2 px-3 w-4/5 border-2 border-gray-200 rounded-md"
              type="text"
              placeholder="eg: Make a UI design"
            />
          </div>

          <div className="mt-5">
            <p className="text-white font-medium text-xl">Date</p>
            <input value={taskDate}
            onChange={(e)=>{
              setTaskDate(e.target.value)
            }}
              className="bg-[#433f3f] text-sm py-2 px-3 w-4/5 border-2 border-gray-200 rounded-md"
              type="date"
              placeholder="dd/mm/yyyy"
            />
          </div>

          <div className="mt-5">
            <p className="text-white font-medium text-xl">Assign To</p>
            <input value={asignTo}
            onChange={(e)=>{
              setAsignTo(e.target.value)
            }}
              className="bg-[#433f3f] text-sm py-2 px-3 w-4/5 border-2 border-gray-200 rounded-md"
              type="text"
            />
          </div>

          <div className="mt-5">
            <p className="text-white font-medium text-xl">Category</p>
            <input value={category}
            onChange={(e)=>{
              setCategory(e.target.value)
            }}
              className="bg-[#433f3f] text-sm py-2 px-3 w-4/5 border-2 border-gray-200 rounded-md"
              type="text"
              placeholder="Design,Development, etc..."
            />
          </div>
        </div>

        <div id="right-div" className="w-2/5  mt-5 flex flex-col items-start">
          <p className="text-white font-medium text-xl">Description</p>
          <textarea value={taskDescription}
            onChange={(e)=>{
              setTaskDescription(e.target.value)
            }}
            className="bg-[#433f3f] w-full h-45 text-md px-2 py-3 border-2 border-gray-200  rounded-md"
            type="text"
            placeholder="Detailed description of task(Max 500 word)"
          />

          <button
            className="bg-emerald-400 w-full px-1 py-2
          text-white mt-8 rounded-md  text-xl font-medium cursor-pointer hover:bg-emerald-500"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
