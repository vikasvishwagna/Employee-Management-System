import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);
  // console.log(userData)

  return (
    <div className="bg-[#1C1C1C] h-45  p-5 mt-10">
      <div className="">
        <div className="bg-[#fdfdfd] mb-1 py-3 px-1  flex justify-between rounded ">
          <h1 className="text-lg text-black font-medium w-1/5">Name</h1>
          <h1 className="text-lg text-black font-medium w-1/5">Active</h1>
          <h1 className="text-lg text-black font-medium w-1/5">New Task</h1>
          <h1 className="text-lg text-black font-medium w-1/5">Completed</h1>
          <h1 className="text-lg text-black font-medium w-1/5">Failed</h1>
        </div>
      </div>

      <div>
        {userData?.employees?.map((emp,idx) => {
          return (
            <div key={idx} className="border-2 border-emerald-300 mb-4 py-2 px-4 flex justify-between rounded">
              <h1 className="w-1/5 font-medium text-lg">{emp.firstName}</h1>
              <h1 className= "w-1/5 text-blue-600 text-xl font-medium">{emp.taskNumber.active}</h1>
              <h1 className="w-1/5 text-yellow-400 text-xl font-medium">{emp.taskNumber.newTask}</h1>
              <h1 className="w-1/5 text-emerald-600 text-xl font-medium">{emp.taskNumber.completed}</h1>
              <h1 className="w-1/5 text-red-600 text-xl font-medium">{emp.taskNumber.failed}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
