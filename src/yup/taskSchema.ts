import * as yup from "yup";

export const taskSchema = yup.object().shape({
  title: yup
    .string()

    .required("title is required"),

  description: yup.string().required("description is Requered"),

  status: yup.string().required("Status is Requered"),
});
