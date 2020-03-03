/** @jsx jsx */
import React from "react";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { handleUserLogin } from "../../redux/actions/authActions";
import { jsx } from "@emotion/core";
import theme from "../../theme";
import InputField from "../common/InputField";
import Button from "../common/Button";
import { LoginSchema } from "../../utils/validation";

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
  }
};

const Login = () => {
  const dispatch = useDispatch();
  const { error } = useSelector(state => {
    return state.authState;
  });
  return (
    <div css={styles.container}>
      <header css={styles.header}>
        <h1>Leon's Kitchen</h1>
      </header>
      <main css={styles.main}>
        <Formik
          initialValues={initialValues}
          validationSchema={LoginSchema}
          validateOnChange={false}
          onSubmit={async ({ pin, password }) => {
            const credentials = {
              pin,
              password
            };
            await dispatch(handleUserLogin(credentials));
          }}
        >
          {({ handleChange, handleSubmit, values, setValues, errors }) => {
            return (
              <form onSubmit={handleSubmit}>
                <div css={styles.formControl}>
                  <label htmlFor="pin">PIN code:</label>
                  <InputField
                    name="pin"
                    onChange={handleChange}
                    type="tel"
                    value={values.pin}
                    error={errors.pin ? errors.pin : null}
                  />
                </div>
                <div css={styles.formControl}>
                  <label htmlFor="password">Password:</label>
                  <InputField
                    name="password"
                    onChange={handleChange}
                    type="password"
                    value={values.password}
                    error={errors.password ? errors.pin : null}
                  />
                  {error ? <small className="red mb2">{error}</small> : null}
                </div>
                <div>
                  <Button type="submit">Login</Button>
                  <Button
                    type="button"
                    onClick={() => {
                      setValues({
                        pin: "5593",
                        password: "admin1234"
                      });
                    }}
                  >
                    Admin
                  </Button>
                  <Button
                    type="button"
                    onClick={() => {
                      setValues({
                        pin: "2389",
                        password: "staffstaff"
                      });
                    }}
                  >
                    Staff
                  </Button>
                  <Button
                    type="button"
                    onClick={() => {
                      setValues({
                        pin: "1635",
                        password: "kitchenkitchen"
                      });
                    }}
                  >
                    Kitchen
                  </Button>
                </div>
              </form>
            );
          }}
        </Formik>
      </main>
    </div>
  );
};

export default Login;
