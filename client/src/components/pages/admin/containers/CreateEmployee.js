/** @jsx jsx */
import { jsx } from "@emotion/core";
import theme from "../../../../theme";
import React from "react";
import { Formik } from "formik";
import InputField from "../../../common/InputField";

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
  formControl: { display: "flex", flexDirection: "column" },
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
  }
};

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  compare_password: ""
};

const CreateEmployee = () => {
  return (
    <div css={styles.wrapper}>
      <h2>Create Employee</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log(values);
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
                  </div>
                  <div css={styles.formControl}>
                    <label css={styles.label}>Last name:</label>
                    <InputField
                      value={values.lastName}
                      name="lastName"
                      type="text"
                      onChange={handleChange}
                    />
                  </div>
                  <div css={styles.formControl}>
                    <label css={styles.label}>Email:</label>
                    <InputField
                      value={values.email}
                      name="email"
                      type="email"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div css={styles.right}>
                  <div css={styles.formControl}>
                    <label css={styles.label}>Password:</label>
                    <InputField
                      value={values.password}
                      name="password"
                      type="password"
                      onChange={handleChange}
                    />
                  </div>
                  <div css={styles.formControl}>
                    <label css={styles.label}>Compare Password:</label>
                    <InputField
                      value={values.compare_password}
                      name="compare_password"
                      type="password"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <button css={styles.button} type="submit">
                Create
              </button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default CreateEmployee;
