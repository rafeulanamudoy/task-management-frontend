import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../hooks/hook";
import { useState } from "react";

import TaskCart from "../components/TaskCart";

import { ITask } from "../types/ITask";

import AddTaskModal from "../components/modal/AddTaskModal";
import { useFilterQuery } from "../hooks/useFilterQuery";

export default function Home() {
  const { user } = useAppSelector((state) => state.auth);
  const [isOpen, setIsOpen] = useState(false);

  const { data: processData } = useFilterQuery();

  console.log(processData, "home to check");

  const navigate = useNavigate();
  const handleAddTaskClick = () => {
    if (user?.email) {
      setIsOpen(!isOpen);

      //console.log("clicked");
    } else {
      navigate("/signIn");
    }
  };

  return (
    <div className={` ${isOpen ? "text-yellow" : `text-red`}`}>
      <h1 className="text-center text-white  text-2xl font-bold   mt-5">
        {" "}
        Welcome To Task Tracker
      </h1>
      <div className=" mt-5 addTask-button  mx-auto">
        <button onClick={handleAddTaskClick}>Add Task</button>
      </div>
      <div className="grid       xl:grid-cols-3  mx-3 gap-4  lg:grid-cols-2  extraSm:grid-cols-1">
        {processData?.data?.map((task: ITask) => (
          <TaskCart key={task?._id} task={task} />
        ))}
      </div>

      <AddTaskModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
