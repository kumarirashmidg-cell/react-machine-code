import React, { useState, useEffect } from "react";

const FullyControlledFormValidation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: "",
    gender: "",
    intrest: [],
    role: "",
  });

  const [error, setError] = useState({});

  const formChangeHandler = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const checkBoxHandler = (e) => {
    const { value, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      intrest: checked
        ? [...prev.intrest, value]
        : prev.intrest.filter((val) => val !== value),
    }));
  };

  const validate = () => {
    let err = {};

    if (!formData.name) {
      err.nameErr = "Name is required";
    } else if (formData.name.length < 3) {
      err.nameErr = "Enter valid name";
    }

    if (!formData.email) {
      err.emailErr = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      err.emailErr = "Email is invalid";
    }

    if (!formData.dob) {
      err.dobErr = "Write your date of birth";
    }

    if (!formData.gender) {
      err.genderErr = "Select your gender";
    }

    if (!formData.role) {
      err.roleErr = "Select your role";
    }

    if (formData.intrest.length === 0) {
      err.intrestErr = "Select at least one interest";
    }

    setError(err);
    return Object.keys(err).length > 0;
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (!validate()) {
      console.log(formData);
    }
  };

  useEffect(() => {
    validate();
  }, [formData]);

  return (
    <section className="container">
      <form className="form" onSubmit={formSubmitHandler}>
        <input
          name="name"
          type="text"
          value={formData.name}
          onChange={formChangeHandler}
          placeholder="Enter your name"
          className="input"
        />
        {error.nameErr && <span className="error">{error.nameErr}</span>}

        <input
          name="email"
          type="text"
          value={formData.email}
          onChange={formChangeHandler}
          placeholder="Enter your mail"
          className="input"
        />
        {error.emailErr && <span className="error">{error.emailErr}</span>}

        <input
          name="dob"
          type="date"
          value={formData.dob}
          onChange={formChangeHandler}
          className="input"
        />
        {error.dobErr && <span className="error">{error.dobErr}</span>}

        <div className="row">
          <p>Select Gender:</p>

          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={formChangeHandler}
            />
            Male
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === "female"}
              onChange={formChangeHandler}
            />
            Female
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="other"
              checked={formData.gender === "other"}
              onChange={formChangeHandler}
            />
            Other
          </label>
        </div>
        {error.genderErr && <span className="error">{error.genderErr}</span>}

        <select name="role" onChange={formChangeHandler} className="input">
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
          <option value="none">None</option>
        </select>
        {error.roleErr && <span className="error">{error.roleErr}</span>}

        <div className="row">
          <p>Interests:</p>

          <label>
            <input
              type="checkbox"
              value="cricket"
              checked={formData.intrest.includes("cricket")}
              onChange={checkBoxHandler}
            />
            Cricket
          </label>

          <label>
            <input
              type="checkbox"
              value="football"
              checked={formData.intrest.includes("football")}
              onChange={checkBoxHandler}
            />
            Football
          </label>

          <label>
            <input
              type="checkbox"
              value="chess"
              checked={formData.intrest.includes("chess")}
              onChange={checkBoxHandler}
            />
            Chess
          </label>
        </div>
        {error.intrestErr && <span className="error">{error.intrestErr}</span>}

        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
};

export default FullyControlledFormValidation;
// -----------------
.container {
  max-width: 500px;
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
.row {
  display: flex;
  gap: 10px;
  align-items: center;
}
.error {
  color: red;
  font-size: 12px;
}
.btn {
  padding: 6px;
  cursor: pointer;
  background-color: black;
  color: white;
}