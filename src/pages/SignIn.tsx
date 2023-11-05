import { useForm } from "react-hook-form";

import { ISignInData } from "../types/IUser";
import Form from "../react-hook/Form";
import Input from "../react-hook/Input";

import { yupResolver } from "@hookform/resolvers/yup";
import { signInSchema } from "../yup/authSchema";

export default function SignIn() {
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm({ resolver: yupResolver(signInSchema) });

  const onSubmit = async (userData: ISignInData) => {
    console.log(userData);
    reset();
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

        <input className="submit-button" type="submit" value="Sign In" />
      </Form>
    </div>
  );
}
