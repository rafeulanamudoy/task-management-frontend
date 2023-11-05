/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  error?: string;
  register?: any;
  wrapperClass?: string;
  className?: string;
}

const Input: FC<InputProps> = ({
  register,
  name,
  error,
  label,

  ...rest
}) => {
  return (
    <div>
      {label && (
        <label className="  " htmlFor={name}>
          {label}
        </label>
      )}
      <div className="    text-center break-words">
        <input
          className="  border-b-3 "
          aria-invalid={error ? "true" : "false"}
          {...register(name)}
          {...rest}
        />
        {error && (
          <div className="     text-sm    text-orange-500">{error}</div>
        )}
      </div>
    </div>
  );
};

export default Input;
