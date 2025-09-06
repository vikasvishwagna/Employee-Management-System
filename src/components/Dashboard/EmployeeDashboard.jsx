import React from "react";
import Header from "../other/Header";
import TaskListNumber from "../other/TaskListNumber";
import TaskList from "../../TaskList/TaskList";

function EmployeeDashboard({data}) {
  
  return (
    <div className="bg-[#1C1C1C] h-screen p-10">

      <h1>{data.id}</h1>
      <Header data={data} />
      <TaskListNumber data={data} />
      <TaskList data={data} />
    </div>
  );
}

export default EmployeeDashboard;


