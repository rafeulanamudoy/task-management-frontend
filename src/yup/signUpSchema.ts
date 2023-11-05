import * as yup from "yup";

export const EmailSchema = yup.object().shape({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  firstName: yup
    .string()

    .required("firsName is required"),
  lastName: yup
    .string()

    .required("LastName  is required"),
  password: yup
    .string()
    .required("Please enter your password")
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 8 characters, one uppercase, one number and one special case character"
    ),
  confirmPassword: yup
    .string()

    .required("Confirm Password is required"),
});
