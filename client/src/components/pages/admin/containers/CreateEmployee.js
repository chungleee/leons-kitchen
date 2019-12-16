/** @jsx jsx */
import { jsx } from "@emotion/core";
import theme from "../../../../theme";
import React from "react";
import { Formik } from "formik";
import InputField from "../../../common/InputField";

const styles = {
  wrapper: {
    marginTop: "1rem",
    border: "1px solid black",
    height: "100%",
    width: "90%",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: `${theme.color.primary}`
  },
  formControl: { display: "flex", flexDirection: "column" },
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
              <div className="container" css={{ display: "flex" }}>
                <div className="left" css={{ marginRight: "2rem" }}>
                  <div css={styles.formControl}>
                    <label>First name:</label>
                    <InputField
                      value={values.firstName}
                      name="firstName"
                      type="text"
                      onChange={handleChange}
                    />
                  </div>
                  <div css={styles.formControl}>
                    <label>Last name:</label>
                    <InputField
                      value={values.lastName}
                      name="lastName"
                      type="text"
                      onChange={handleChange}
                    />
                  </div>
                  <div css={styles.formControl}>
                    <label>Email:</label>
                    <InputField
                      value={values.email}
                      name="email"
                      type="email"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="right" css={{ marginRight: "2rem" }}>
                  <div css={styles.formControl}>
                    <label>Password:</label>
                    <InputField
                      value={values.password}
                      name="password"
                      type="password"
                      onChange={handleChange}
                    />
                  </div>
                  <div css={styles.formControl}>
                    <label>Compare Password:</label>
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
