/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import theme from "../../theme";

const styles = {
  formControl: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "1rem"
  },
  label: { marginBottom: "0.5rem" },
  input: {
    color: `${theme.text}`,
    height: "1.5rem",
    border: `1px solid ${theme.text}`,
    fontSize: "100%",
    lineHeight: 1.15,
    padding: "0.5rem",
    "&:hover": {
      backgroundColor: `${theme.color.highlight}`
    },
    "&:focus": {
      backgroundColor: `${theme.color.highlight}`,
      outline: "none"
    }
  },
  error: {
    color: `${theme.color.danger}`
  }
};
const InputField = ({ type, name, value, onChange, label, error }) => {
  return (
    <div css={styles.formControl}>
      <label css={styles.label}>{label}</label>
      <input
        css={styles.input}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error ? <small css={styles.error}>{error}</small> : null}
    </div>
  );
};

export default InputField;
