import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

import { useAppDispatch } from "../../hooks/hook";
import { setFilter } from "../../redux/features/task/taskFilterSlice";

type ModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function FilterTaskModel({ isOpen, setIsOpen }: ModalProps) {
  const [status, setStaus] = useState("");
  const [sort, setSort] = useState("");
  const dispatch = useAppDispatch();
  const handleApply = () => {
    console.log(status);
    const filters = {
      filters: {
        status,

        sort,
      },
    };
    dispatch(setFilter(filters));
    setIsOpen(false);
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
          <div className="  border-4  w-1/2   ">
            <h2 className="text-xl text-center font-semibold mb-4 text-white">
              Filter Products
            </h2>
            <div className="  grid justify-center">
              <div className=" ">
                <label htmlFor="availabilityFilter" className="    text-white ">
                  Task Status:
                </label>
                <select
                  className=" grid w-56"
                  id="availabilityFilter"
                  onChange={(e) => setStaus(e.target.value)}
                >
                  <option value="pending">Pending</option>
                  <option value="inProgress">In Progress</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
              <div className="">
                <label className=" text-white ">Sort By Date:</label>
                <select
                  className=" grid w-56 "
                  onChange={(e) => setSort(e.target.value)}
                >
                  <option value="desc">Descending</option>
                  <option value="asc">Ascending</option>
                </select>
              </div>
              <div className="  text-center mt-5  ">
                <button
                  onClick={handleApply}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
