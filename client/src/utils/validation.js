import * as yup from "yup";

const requiredMsg = "This field is required";
export const CreateEmployeeSchema = yup.object().shape({
  firstName: yup
    .string()
    .required(requiredMsg)
    .min(2, "Too short!")
    .uppercase(),
  lastName: yup
    .string()
    .required(requiredMsg)
    .min(2, "Too short!")
    .uppercase(),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required(requiredMsg),
  role: yup.string().required(requiredMsg),
  password: yup
    .string()
    .required(requiredMsg)
    .min(8, "Too short!")
    .max(24, "Too long"),
  compare_password: yup
    .string()
    .oneOf([yup.ref("password")], "Password needs to match")
    .required(requiredMsg)
});
