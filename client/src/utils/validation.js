import * as yup from "yup";

const requiredMsg = "This field is required";
export const CreateEmployeeSchema = yup.object().shape({
  firstName: yup
    .string()
    .required(requiredMsg)
    .min(2, "Too short!")
    .lowercase()
    .trim(),
  lastName: yup
    .string()
    .required(requiredMsg)
    .min(2, "Too short!")
    .lowercase()
    .trim(),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required(requiredMsg)
    .trim(),
  role: yup
    .string()
    .required(requiredMsg)
    .trim(),
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

export const LoginSchema = yup.object().shape({
  pin: yup
    .string()
    .required(requiredMsg)
    .trim(),
  password: yup.string().required(requiredMsg)
});

export const CreateFoodSchema = yup.object().shape({
  title: yup
    .string()
    .required(requiredMsg)
    .trim(),
  category: yup
    .string()
    .required(requiredMsg)
    .trim(),
  price: yup
    .string()
    .required(requiredMsg)
    .trim()
});

export const CheckoutFormSchema = yup.object().shape({
  name: yup
    .string()
    .required(requiredMsg)
    .trim(),
  email: yup
    .string()
    .email("Not a valid email")
    .trim()
    .required(requiredMsg),
  phone: yup
    .string()
    .min(8, "Too short!")
    .required(requiredMsg)
    .trim()
});
