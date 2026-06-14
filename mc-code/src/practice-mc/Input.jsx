import React from "react";

const Input = ({
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  label,
  disabled = "false",
  className,
  required = "false",
  ...rest
}) => {
  return (
    <div>
      {label && <span>{label}</span>}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        required={required}
        className={`${error ? "input-error" : "input"} ${className}`}
        {...rest}
      />
      {error && <p className="error-text">{error}</p>}
    </div>
  );
};

export default Input;
// ------------------
.error-text {
  color: red;
}
.input {
  border: 1px solid black;
}
.input-error {
  border: 1px solid red;
}
