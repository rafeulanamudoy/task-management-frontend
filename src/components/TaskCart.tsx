import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ITaskCartProps } from "../types/ITask";
import { Link } from "react-router-dom";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function TaskCart({ task }: ITaskCartProps) {
  console.log(task);
  return (
    <div className="my-5   h-96 p-8 grid grid-cols-8  bg-white   ">
      <div className="col-span-6  ">
        <h1 className="  font-bold text-xl mb-3">{task?.title}</h1>

        <h1
          className={`border-3 " ${
            task.status === "inProgress"
              ? `bg-yellow-200`
              : task.status === "completed"
              ? "bg-green-400"
              : task.status === "pending"
              ? "bg-red-200"
              : ""
          } inline   text-center `}
        >
          {task?.status}
        </h1>
        <h1 className="mt-3">
          {" "}
          <span className="font-bold">Description:</span> {task?.description}
        </h1>
      </div>

      <div className=" justify-self-end   col-span-2  flex   mr-3  gap-5  items-start">
        <Link to="/dashboard/updateService" className=" text-blue-800">
          <FontAwesomeIcon icon={faPen} />
        </Link>
        <button className=" text-red-700">
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
}
