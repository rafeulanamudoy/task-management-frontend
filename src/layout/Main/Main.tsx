import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function Main() {
  return (
    <div>
      <div className=" bg-custom-black flex flex-col min-h-screen ">
        <Header />
        <div className="flex-grow  ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
