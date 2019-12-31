const yup = require("yup");

const requiredMsg = "This field is required";
const CreateEmployeeSchema = yup.object().shape({
  firstName: yup
    .string()
    .required(requiredMsg)
    .min(2, "Too short!")
    .lowercase(),
  lastName: yup
    .string()
    .required(requiredMsg)
    .min(2, "Too short!")
    .lowercase(),
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

module.exports = { CreateEmployeeSchema };
