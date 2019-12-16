/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import theme from "../../theme";

const InputField = ({ type, name, value, onChange }) => {
  return (
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
          backgroundColor: `${theme.color.highlight}`,
          outline: "none"
        }
      }}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputField;
