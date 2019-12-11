/** @jsx jsx */
import React from "react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { handleUserLogin } from "../../redux/actions/userActions";
import { css, jsx } from "@emotion/core";
import theme from "../../theme";
import InputField from "../presentationals/InputField";

const initialValues = {
  pin: "",
  password: ""
};

const styles = {
  container: {
    height: "100vh",
    backgroundColor: theme.color.secondary,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  header: {
    padding: "3rem 0",
    textAlign: "center"
  },
  main: {
    padding: "3rem"
  },
  formControl: {
    display: "flex",
    flexDirection: "column"
  },
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

const Login = () => {
  const dispatch = useDispatch();
  return (
    <div css={styles.container}>
      <header css={styles.header}>
        <h1>Leon's Kitchen</h1>
      </header>
      <main css={styles.main}>
        <Formik
          initialValues={initialValues}
          onSubmit={({ pin, password }, actions) => {
            const credentials = {
              pin,
              password
            };
            dispatch(handleUserLogin(credentials));
            actions.setSubmitting(false);
          }}
        >
          {({ handleChange, handleSubmit, values }) => {
            return (
              <form onSubmit={handleSubmit}>
                <div css={styles.formControl}>
                  <label htmlFor="pin">PIN code:</label>
                  <InputField
                    name="pin"
                    onChange={handleChange}
                    type="tel"
                    value={values.pin}
                  />
                </div>
                <div css={styles.formControl}>
                  <label htmlFor="password">Password:</label>
                  <InputField
                    name="password"
                    onChange={handleChange}
                    type="password"
                    value={values.password}
                  />
                </div>
                <button css={styles.button} type="submit">
                  Login
                </button>
              </form>
            );
          }}
        </Formik>
      </main>
    </div>
  );
};

export default Login;
