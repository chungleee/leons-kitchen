import React from "react";

const InputField = ({ type, name, value, onChange, label, error }) => {
  return (
    <div className="flex flex-column mb3">
      <label className="mb2">{label}</label>
      <input
        className="input-reset b--near-black h2 pl2 ba bg-animate hover-bg-yellow"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error ? <small className="red">{error}</small> : null}
    </div>
  );
};

export default InputField;
