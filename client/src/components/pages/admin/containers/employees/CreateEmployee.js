/** @jsx jsx */
import { jsx } from "@emotion/core";
import theme from "../../../../../theme";
import React from "react";
import { useDispatch } from "react-redux";
import { handleCreateEmployee } from "../../../../../redux/actions/employeesActions";
import { Formik } from "formik";
import { CreateEmployeeSchema } from "../../../../../utils/validation";
import InputField from "../../../../common/InputField";
import Button from "../../../../common/Button";

const styles = {
  wrapper: {
    borderRadius: "5px",
    marginTop: "1rem",
    height: "100%",
    width: "90%",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: `${theme.color.primary}`
  },
  container: { display: "flex" },
  left: { marginRight: "2rem" },
  right: { marginRight: "2rem" },
  formControl: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "1rem"
  },
  label: { marginBottom: "0.5rem" },
  button: {
    color: `${theme.text}`,
    border: `1px solid ${theme.text}`,
    fontSize: "100%",
    padding: "0.5rem",
    backgroundColor: `${theme.background}`,
    "&:hover": {
      backgroundColor: `${theme.color.highlight}`
    },
    "&:focus": {
      backgroundColor: `${theme.color.highlight}`,
      outline: "none"
    }
  },
  selectWrapper: {
    border: "1px solid black",
    padding: "0.5rem",
    "&:hover, :focus-within": {
      backgroundColor: `${theme.color.highlight}`,
      select: {
        backgroundColor: `${theme.color.highlight}`
      }
    }
  },
  select: {
    backgroundColor: "white",
    border: "none",
    height: "1.5rem",
    outlineColor: "white",
    width: "100%",
    "&:hover, :focus": {
      backgroundColor: `${theme.color.highlight}`,
      outline: "none"
    }
  },
  error: {
    color: `${theme.color.danger}`
  }
};

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  role: "",
  password: "",
  compare_password: ""
};

const CreateEmployee = () => {
  const dispatch = useDispatch();
  return (
    <div css={styles.wrapper}>
      <h2>Create Employee</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={CreateEmployeeSchema}
        validateOnBlur={false}
        validateOnChange={false}
        onSubmit={async (
          { firstName, lastName, email, role, password, compare_password },
          actions
        ) => {
          const data = {
            firstName,
            lastName,
            email,
            role,
            password,
            compare_password
          };
          await dispatch(handleCreateEmployee(data));
          actions.resetForm();
        }}
      >
        {({ handleChange, handleSubmit, errors, values }) => {
          return (
            <form onSubmit={handleSubmit}>
              <div css={styles.container}>
                <div css={styles.left}>
                  <div css={styles.formControl}>
                    <label css={styles.label}>First name:</label>
                    <InputField
                      value={values.firstName}
                      name="firstName"
                      type="text"
                      onChange={handleChange}
                    />
                    {errors.firstName ? (
                      <small css={styles.error}>{errors.firstName}</small>
                    ) : null}
                  </div>
                  <div css={styles.formControl}>
                    <label css={styles.label}>Last name:</label>
                    <InputField
                      value={values.lastName}
                      name="lastName"
                      type="text"
                      onChange={handleChange}
                    />
                    {errors.lastName ? (
                      <small css={styles.error}>{errors.lastName}</small>
                    ) : null}
                  </div>
                  <div css={styles.formControl}>
                    <label css={styles.label}>Email:</label>
                    <InputField
                      value={values.email}
                      name="email"
                      type="email"
                      onChange={handleChange}
                    />
                    {errors.email ? (
                      <small css={styles.error}>{errors.email}</small>
                    ) : null}
                  </div>
                </div>
                <div css={styles.right}>
                  <div css={styles.formControl}>
                    <label css={styles.label}>Role:</label>
                    <div css={styles.selectWrapper}>
                      <select
                        value={values.role}
                        name="role"
                        onChange={handleChange}
                        css={styles.select}
                      >
                        <option>Select</option>
                        <option value="staff">Staff</option>
                        <option value="kitchen">Kitchen</option>
                      </select>
                    </div>
                    {errors.role ? (
                      <small css={styles.error}>{errors.role}</small>
                    ) : null}
                  </div>
                  <div css={styles.formControl}>
                    <label css={styles.label}>Password:</label>
                    <InputField
                      value={values.password}
                      name="password"
                      type="password"
                      onChange={handleChange}
                    />
                    {errors.password ? (
                      <small css={styles.error}>{errors.password}</small>
                    ) : null}
                  </div>
                  <div css={styles.formControl}>
                    <label css={styles.label}>Compare Password:</label>
                    <InputField
                      value={values.compare_password}
                      name="compare_password"
                      type="password"
                      onChange={handleChange}
                    />
                    {errors.compare_password ? (
                      <small css={styles.error}>
                        {errors.compare_password}
                      </small>
                    ) : null}
                  </div>
                </div>
              </div>
              <Button type="submit">Create</Button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default CreateEmployee;
