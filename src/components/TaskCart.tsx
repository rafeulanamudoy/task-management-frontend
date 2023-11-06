import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ITaskCartProps } from "../types/ITask";
import { useState } from "react";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

import UpdateTaskModal from "./modal/UpdateTaskModal";
import { useAppDispatch } from "../hooks/hook";
import { setUpdateTask } from "../redux/features/task/taskSlice";
import { useDeleteTaskMutation } from "../redux/features/task/taskApi";
import toast from "react-hot-toast";

export default function TaskCart({ task }: ITaskCartProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  const [deleteTask] = useDeleteTaskMutation();

  // console.log(task);
  const handleUpdateTask = () => {
    setIsOpen(!isOpen);
    dispatch(setUpdateTask(task));

    //console.log("clicked");
  };
  const handleDelete = () => {
    const confirm = window.confirm("are your sure you want to delete");
    if (task._id && confirm) {
      deleteTask(task._id)
        .unwrap()
        .then((payload) => {
          toast.success(payload?.message);
          console.log(payload);

          console.log(payload);
        })
        .catch((error) => {
          console.log(error, "catch");

          toast.error(error?.data?.message);
        });
    }
  };

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
        <button onClick={handleUpdateTask} className=" text-blue-800">
          <FontAwesomeIcon icon={faPen} />
        </button>
        <button onClick={handleDelete} className=" text-red-700">
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
      <UpdateTaskModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
