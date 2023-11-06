import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faFilter } from "@fortawesome/free-solid-svg-icons/faFilter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hook";
import { logOut } from "../../redux/features/auth/authSlice";
import SearchModal from "../../components/modal/SearchModal";
import { useState } from "react";
import FilterTaskModel from "../../components/modal/FilterTaskModal";
export default function Header() {
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [isFilter, setIsFilter] = useState(false);
  const handleSearchClick = () => {
    setIsOpen(!isOpen);

    //console.log("clicked");
  };
  const handleFilterClick = () => {
    setIsFilter(!isFilter);

    //console.log("clicked");
  };
  return (
    <div>
      <SearchModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <FilterTaskModel isOpen={isFilter} setIsOpen={setIsFilter} />

      <div className=" text-white w-3/4      border-b-2 mx-auto flex gap-5 leading-[5rem]  grid-cols-3   items-center  justify-around">
        <div className="uppercase text-lg   font-bold text-yellow-400">
          Task Tracker
        </div>
        {user.email ? (
          <nav className=" grid grid-cols-2 gap-5 uppercase  ">
            <Link to="/" className="uppercase">
              {" "}
              Home
            </Link>

            <button onClick={() => dispatch(logOut())} className="uppercase">
              {" "}
              Logout
            </button>
          </nav>
        ) : (
          <nav className=" grid grid-cols-3 gap-5 uppercase   ">
            {[
              ["Home", "/"],
              ["Sign UP", "/signUp"],
              ["Sign In", "/signIn"],
            ].map(([title, url]) => (
              <Link
                key={Math.floor(new Date().valueOf() * Math.random())}
                to={url}
                className="    "
              >
                {title}
              </Link>
            ))}
          </nav>
        )}

        <div className="grid grid-cols-2 gap-5 text-lg">
          <button onClick={handleSearchClick}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
          <button onClick={handleFilterClick}>
            <FontAwesomeIcon icon={faFilter} />
          </button>
        </div>
      </div>
    </div>
  );
}
