export type IUser = {
  user: {
    email: string;
  };
  isLoading: boolean;
  isError: boolean;
  error: string;
};

export type ISignUpData = {
  firstName: string;

  lastName: string;

  email: string;

  password: string;
  confirmPassword?: string;
};
