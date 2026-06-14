// email regex :- !/^\S+@\S+\.\S+$/.test(formData.email)
import React, { useEffect, useState } from "react";

const FormValidation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({});

  const formDataHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const err = {};

    if (!formData.name) {
      err.nameError = "Name is required";
    } else if (formData.name.length < 3) {
      err.nameError = "Name is invalid";
    }
    if (!formData.email) {
      err.emailError = "Email is required";
    }
    if (!formData.password) {
      err.passwordError = "Password is required";
    } else if (formData.password.length < 8) {
      err.passwordError = "Password must be at least 8 characters";
    }
    if (!formData.confirmPassword) {
      err.confirmPasswordError = "Confirm Password is required";
    } else if (formData.password !== formData.confirmPassword) {
      err.confirmPasswordError = "Passwords do not match";
    }

    setError(err);
    return Object.keys(err).length > 0;
  };

  useEffect(() => {
    validate();
  }, [formData]);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!validate()) {
      console.log(formData);

      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
  };

  return (
    <section className="container">
      <form className="form" onSubmit={formSubmitHandler}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={formDataHandler}
          placeholder="Enter your name"
          className="input"
        />
        {error.nameError && <span className="error">{error.nameError}</span>}

        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={formDataHandler}
          placeholder="Enter your email"
          className="input"
        />
        {error.emailError && <span className="error">{error.emailError}</span>}

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={formDataHandler}
          placeholder="Enter your password"
          className="input"
        />
        {error.passwordError && (
          <span className="error">{error.passwordError}</span>
        )}

        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={formDataHandler}
          placeholder="Confirm your password"
          className="input"
        />
        {error.confirmPasswordError && (
          <span className="error">{error.confirmPasswordError}</span>
        )}

        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
};

export default FormValidation;
// -------------------------
.container {
  width: 400px;
  border: 1px solid #ccc;
  padding: 5px;
}
.form {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.input {
  padding: 6px;
  border: 1px solid #ccc;
}
.error {
  color: red;
  font-size: 10px;
}
.btn {
  padding: 6px;
  cursor: pointer;
}
