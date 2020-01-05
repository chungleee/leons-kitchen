/** @jsx jsx  */
import { jsx } from "@emotion/core";
import React from "react";
import theme from "../../theme";

const Button = ({ children, type, onClick }) => {
  return (
    <button
      onClick={onClick}
      type={type}
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
          backgroundColor: `${theme.color.highlight}`,
          outline: "none"
        }
      }}
    >
      {children}
    </button>
  );
};

export default Button;
