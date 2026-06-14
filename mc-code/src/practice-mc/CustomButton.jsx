import React from "react";

const CustomButton = ({
  children,
  variant = "primary",
  size = "small",
  isDisable = false,
  isLoading = false,
  onClick,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      disabled={isDisable || isLoading}
      className={`btn ${variant} ${size} ${className}`}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
};

export default CustomButton;
// ---------------------

.btn {
  border: none;
  cursor: pointer;
  border-radius: 6px;
}
.primary {
  background: blue;
  color: white;
}
.secondary {
  background: red;
  color: white;
}
.small {
  padding: 6px 10px;
  font-size: 14px;
}
.large {
  padding: 10px 16px;
  font-size: 18px;
}
.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}