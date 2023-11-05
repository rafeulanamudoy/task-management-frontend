import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faFilter } from "@fortawesome/free-solid-svg-icons/faFilter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className=" text-white w-3/4      border-b-2 mx-auto flex gap-5 leading-[5rem]  grid-cols-3   items-center  justify-around">
      <div className="uppercase text-lg ">task Management</div>
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
      <div className="grid grid-cols-2 gap-5 text-lg">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <FontAwesomeIcon icon={faFilter} />
      </div>
    </div>
  );
}
