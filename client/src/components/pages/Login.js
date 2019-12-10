/** @jsx jsx */
import React from "react";
import { Formik } from "formik";
import { css, jsx } from "@emotion/core";
import theme from "../../theme";

const initialValues = {
  pinCode: "",
  password: ""
};

const Login = () => {
  return (
    <div
      css={{
        height: "100vh",
        backgroundColor: theme.color.secondary,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }}
    >
      <header
        css={{
          padding: "3rem 0",
          textAlign: "center"
        }}
      >
        <h1>Leon's Kitchen</h1>
      </header>
      <main
        css={{
          padding: "3rem"
        }}
      >
        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            console.log(values);
            actions.setSubmitting(false);
          }}
        >
          {({ handleChange, handleSubmit, values }) => {
            return (
              <form onSubmit={handleSubmit}>
                <div
                  css={{
                    display: "flex",
                    flexDirection: "column"
                  }}
                >
                  <label htmlFor="pinCode">PIN code:</label>
                  <input
                    css={{
                      color: `${theme.text}`,
                      height: "1.5rem",
                      border: `1px solid ${theme.text}`,
                      fontSize: "100%",
                      lineHeight: 1.15,
                      padding: "0.5rem",
                      marginBottom: "1rem",
                      "&:hover": {
                        backgroundColor: `${theme.color.highlight}`
                      },
                      "&:focus": {
                        outline: "none"
                      }
                    }}
                    name="pinCode"
                    onChange={handleChange}
                    type="tel"
                    value={values.pinCode}
                  />
                </div>
                <div
                  css={{
                    display: "flex",
                    flexDirection: "column"
                  }}
                >
                  <label htmlFor="password">Password:</label>
                  <input
                    css={{
                      color: `${theme.text}`,
                      height: "1.5rem",
                      border: `1px solid ${theme.text}`,
                      fontSize: "100%",
                      lineHeight: 1.15,
                      padding: "0.5rem",
                      marginBottom: "1rem",
                      "&:hover": {
                        backgroundColor: `${theme.color.highlight}`
                      },
                      "&:focus": {
                        outline: "none"
                      }
                    }}
                    name="password"
                    onChange={handleChange}
                    type="password"
                    value={values.password}
                  />
                </div>
                <button
                  css={{
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
                  }}
                  type="submit"
                >
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
