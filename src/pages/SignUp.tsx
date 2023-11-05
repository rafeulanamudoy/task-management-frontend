import { useForm } from "react-hook-form";

import { toast } from "react-hot-toast";

import { ISignUpData } from "../types/IUser";
import Form from "../react-hook/Form";
import Input from "../react-hook/Input";

import { yupResolver } from "@hookform/resolvers/yup";
import { EmailSchema } from "../yup/signUpSchema";

export default function SignUp() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({ resolver: yupResolver(EmailSchema) });

  const onSubmit = async (userData: ISignUpData) => {
    const { confirmPassword, ...others } = userData;

    if (confirmPassword !== others.password) {
      toast.error("password doesnt match");
      return;
    }

    console.log(others);
  };

  return (
    <div className=" formContainer">
      <Form
        className=" box-shadow-form  bg-white  lg:w-[45rem] sm:w-[25rem]  grid justify-center "
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        register={register}
      >
        <h1 className="text-center text-2xl  ">Sign Up</h1>
        <div className="  grid justify-center   ">
          <label className="lg:w-96  grid  mx-auto" htmlFor="">
            FirstName:
          </label>
          <div className=" ">
            <Input
              className="border  lg:w-96 extraSm:w-60  border-slate-400 rounded p-2"
              name="firstName"
              type="text"
              placeholder="Enter your First Name"
              error={errors.firstName?.message}
              register={register}
              autoFocus
            />
          </div>
        </div>
        <div className="  grid justify-center  ">
          <label className="lg:w-96  grid  mx-auto" htmlFor="">
            Last Name:
          </label>
          <div className=" ">
            <Input
              className="border  lg:w-96 extraSm:w-60  border-slate-400 rounded p-2"
              name="lastName"
              type="text"
              placeholder="Enter your Last Name"
              error={errors.lastName?.message}
              register={register}
              autoFocus
            />
          </div>
        </div>
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
        <div className="  grid justify-center ">
          <label className="lg:w-96  grid  mx-auto" htmlFor="">
            Confirm Password:
          </label>
          <div className="">
            <Input
              className="border lg:w-96 extraSm:w-60   border-slate-400 rounded p-2"
              name="confirmPassword"
              type="password"
              placeholder="confirmPassword"
              register={register}
              error={errors.confirmPassword?.message}
              autoFocus
            />
          </div>
        </div>

        <input className="submit-button" type="submit" value="Sign Up" />
      </Form>
    </div>
  );
}
