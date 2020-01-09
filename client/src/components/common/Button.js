/** @jsx jsx  */
import { jsx } from "@emotion/core";
import React from "react";
import theme from "../../theme";

const Button = ({ children, type, onClick, ...props }) => {
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
        transition: "all 0.2s ease",
        "&:hover": {
          backgroundColor: `${theme.color.highlight}`,
          transform: "translateY(-3px)"
        },
        "&:focus": {
          backgroundColor: `${theme.color.highlight}`,
          outline: "none"
        },
        "&:active": {
          transform: "translateY(3px)"
        }
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
