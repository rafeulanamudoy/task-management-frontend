import { useForm } from "react-hook-form";

import { ISignInData } from "../types/IUser";
import Form from "../react-hook/Form";
import Input from "../react-hook/Input";

import { yupResolver } from "@hookform/resolvers/yup";
import { signInSchema } from "../yup/authSchema";
import { useSignInMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../hooks/hook";
import { setUser } from "../redux/features/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function SignIn() {
  const [login] = useSignInMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm({ resolver: yupResolver(signInSchema) });

  const onSubmit = async (userData: ISignInData) => {
    await login(userData)
      .unwrap()
      .then((payload) => {
        toast.success(payload?.message);

        dispatch(setUser(payload?.data));
        reset();

        navigate("/");
      })
      .catch((error) => {
        console.log(error, "catch");

        toast.error(error?.data?.message);
      });
  };

  return (
    <div className=" formContainer">
      <Form
        className=" box-shadow-form  bg-white  lg:w-[45rem] sm:w-[25rem]  grid justify-center "
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        register={register}
      >
        <h1 className="text-center text-2xl  ">Sign In</h1>

        <div className="  grid justify-center  ">
          <label className="lg:w-96  grid  mx-auto" htmlFor="">
            Email:
          </label>
          <div className=" ">
            <Input
              className="border  lg:w-96 extraSm:w-60  border-slate-400 rounded p-2"
              name="email"
              type="email"
              placeholder="Enter your email"
              error={errors.email?.message}
              register={register}
              autoFocus
            />
          </div>
        </div>

        <div className="  grid justify-center  ">
          <label className=" lg:w-96  grid  mx-auto" htmlFor="">
            Passowrd:
          </label>
          <div className="">
            <Input
              className="border  lg:w-96 extraSm:w-60  border-slate-400 rounded p-2 "
              name="password"
              type="password"
              placeholder="Password"
              error={errors.password?.message}
              register={register}
              autoFocus
            />
          </div>
        </div>
        <div className="flex gap-3 mt-3">
          <span>Dont have an account</span>
          <Link to="/signUp" className="underline  text-red-500 ">
            Register
          </Link>
        </div>

        <input className="submit-button" type="submit" value="Sign In" />
      </Form>
    </div>
  );
}
