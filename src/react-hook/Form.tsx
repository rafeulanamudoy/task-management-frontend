/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, createElement } from "react";
import { ReactNode } from "react";

export type classNameType = string;
export type childrenType = ReactNode;

export interface IFormProps {
  defaultValues?: any;
  children?: childrenType;
  buttonLabel?: string;
  onSubmit?: any;
  handleSubmit?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: any;
  className?: classNameType;
}

const Form: FC<IFormProps> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  defaultValues,

  children,
  onSubmit,
  handleSubmit,
  register,
  ...rest
}) => {
  return (
    <form className="" onSubmit={handleSubmit(onSubmit)} {...rest}>
      {Array.isArray(children)
        ? children.map((child) => {
            return child.props.name
              ? createElement(child.type, {
                  ...{
                    ...child.props,
                    register,
                    key: child.props.name,
                  },
                })
              : child;
          })
        : children}
    </form>
  );
};

export default Form;
