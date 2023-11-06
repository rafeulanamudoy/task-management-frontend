import { motion, AnimatePresence } from "framer-motion";
import React from "react";

import Input from "../../react-hook/Input";

import { yupResolver } from "@hookform/resolvers/yup";

import { useForm } from "react-hook-form";

import { ITask } from "../../types/ITask";
import { taskSchema } from "../../yup/taskSchema";
import Form from "../../react-hook/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import { useCreateTaskMutation } from "../../redux/features/task/taskApi";
import toast from "react-hot-toast";
import { useAppSelector } from "../../hooks/hook";

type ModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function TaskModal({ isOpen, setIsOpen }: ModalProps) {
  const [postTask] = useCreateTaskMutation();
  const { email } = useAppSelector((state) => state.auth.user);
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm({ resolver: yupResolver(taskSchema) });

  const onSubmit = async (data: ITask) => {
    //console.log(data);
    const taskData = {
      userEmail: email,
      title: data.title,
      status: data.status,
      description: data.description,
    };
    await postTask(taskData)
      .unwrap()
      .then((payload) => {
        toast.success(payload?.message);

        reset();
      })
      .catch((error) => {
        console.log(error, "catch");

        toast.error(error?.data?.message);
      });
    reset();
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className=" modal-container "
          initial={{
            opacity: 0,
            scale: 0.75,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: {
              ease: "easeOut",
              duration: 0.15,
            },
          }}
          exit={{
            opacity: 0,
            scale: 0.75,
            transition: {
              ease: "easeIn",
              duration: 0.15,
            },
          }}
        >
          <div className="      ">
            <button
              className="  float-right block justify-self-end mr-3  text-2xl text-red-900    "
              onClick={() => setIsOpen(false)}
            >
              <FontAwesomeIcon icon={faDeleteLeft} />
            </button>

            <h2 className="uppercase  text-xl  text-white mx-auto  font-bold text-center ">
              Add Your Task
            </h2>

            <Form
              className="  grid gap-5  mt-5 justify-center"
              handleSubmit={handleSubmit}
              onSubmit={onSubmit}
              register={register}
            >
              <Input
                className="border  lg:w-96 extraSm:w-60 text-black  border-slate-400 rounded p-2"
                name="title"
                type="text"
                placeholder="enter  a title"
                error={errors.title?.message}
                register={register}
                autoFocus
              />

              <Input
                className="border  lg:w-96 extraSm:w-60  text-black border-slate-400 rounded p-2 "
                name="description"
                type="text"
                placeholder=" enter the task  description"
                error={errors.description?.message}
                register={register}
                textarea={true}
                autoFocus
              />

              <div className="grid gap-3 border  border-slate-400 rounded p-2 text-black ">
                <select id="status" {...register("status")}>
                  <option value="pending">Pending</option>
                  <option value="inProgress">In Progress</option>
                  <option value="completed">Completed</option>
                </select>
              </div>

              <input
                className="submit-button"
                type="submit"
                value="Save Task"
              />
            </Form>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
