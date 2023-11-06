import { motion, AnimatePresence } from "framer-motion";
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";

import { useRef } from "react";
import { useAppDispatch } from "../../hooks/hook";
import { setSearch } from "../../redux/features/task/taskFilterSlice";

type ModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function SearchModal({ isOpen, setIsOpen }: ModalProps) {
  const dispatch = useAppDispatch();
  const searchRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (searchRef.current) {
      dispatch(setSearch(searchRef.current.value));
      console.log(searchRef.current.value);
    }
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
          <div className="   w-1/2   grid      ">
            <form onSubmit={handleSubmit} className="   ">
              <label className="mb-2 text-sm font-medium text-gray-900 sr-only ">
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 ">
                  <button
                    className="    text-2xl text-red-900    "
                    onClick={() => setIsOpen(false)}
                  >
                    <FontAwesomeIcon icon={faDeleteLeft} />
                  </button>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className=" block w-full p-4 pl-12 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-custom-red focus:border-custom-red
           dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-custom-red dark:focus:border-custom-red "
                  placeholder="Search Your Task by Task name"
                  ref={searchRef}
                  required
                />

                <button
                  type="submit"
                  onClick={() => setIsOpen(false)}
                  className=" absolute right-2.5 bottom-2.5  hover:bg-yellow-400 
                   rounded-lg text-sm px-4 py-2 dark:bg-yellow-700 dark:hover:bg-yellow-600 dark:focus:bg-yellow-500 "
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
