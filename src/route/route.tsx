import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "",
        index: true,
        element: <Home />,
      },
      {
        path: "/signUp",
        index: true,
        element: <SignUp />,
      },
      {
        path: "/signIn",
        index: true,
        element: <SignIn />,
      },
    ],
  },
]);
