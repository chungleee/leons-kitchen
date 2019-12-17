/** @jsx jsx */
import React from "react";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { handleUserLogin } from "../../redux/actions/authActions";
import { jsx } from "@emotion/core";
import theme from "../../theme";
import InputField from "../common/InputField";

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
    flexDirection: "column",
    marginBottom: "1rem"
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
      backgroundColor: `${theme.color.highlight}`,
      outline: "none"
    }
  }
};

const Login = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  return (
    <div css={styles.container}>
      <header css={styles.header}>
        <h1>Leon's Kitchen</h1>
      </header>
      <main css={styles.main}>
        <Formik
          initialValues={initialValues}
          onSubmit={async ({ pin, password }, actions) => {
            const credentials = {
              pin,
              password
            };
            await dispatch(handleUserLogin(credentials));
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
