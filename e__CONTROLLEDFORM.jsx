import React, { useState } from "react";

const ControlledForm = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    dob: "",
    gender: "",
    role: "",
    subject: [],
  });

  function formChangeHandler(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function checkboxHandler(e) {
    const { checked, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      subject: checked
        ? [...prev.subject, value]
        : prev.subject.filter((item) => item !== value),
    }));
  }

  function formSubmitHandler(e) {
    e.preventDefault();
    console.log(formData);
    setFormData({
      userName: "",
      email: "",
      dob: "",
      gender: "",
      role: "",
      subject: [],
    });
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <input
        type="text"
        name="userName"
        placeholder="enter name"
        value={formData.userName}
        onChange={formChangeHandler}
      />
      <input
        type="email"
        name="email"
        placeholder="enter mail"
        value={formData.email}
        onChange={formChangeHandler}
      />
      <input
        type="date"
        name="dob"
        value={formData.dob}
        onChange={formChangeHandler}
      />

      <span>
        <span>Gender :- </span>
        Male :
        <input
          type="radio"
          name="gender"
          value="male"
          checked={formData.gender === "male"}
          onChange={formChangeHandler}
        />
        FeMale :
        <input
          type="radio"
          name="gender"
          value="female"
          checked={formData.gender === "female"}
          onChange={formChangeHandler}
        />
        Others :
        <input
          type="radio"
          name="gender"
          value="others"
          checked={formData.gender === "others"}
          onChange={formChangeHandler}
        />
      </span>
      <span>
        <select name="role" onChange={formChangeHandler} value={formData.role}>
          <option>select role</option>
          <option value="student">student</option>
          <option value="teacher">teacher</option>
          <option value="dean">dean</option>
        </select>
      </span>
      <span>
        <span>Sub:- </span>
        Physics :
        <input
          type="checkbox"
          name="subject"
          checked={formData.subject.includes("physics")}
          value="physics"
          onChange={checkboxHandler}
        />
        Chemistry :
        <input
          type="checkbox"
          name="subject"
          checked={formData.subject.includes("chemistry")}
          value="chemistry"
          onChange={checkboxHandler}
        />
        Biology :
        <input
          type="checkbox"
          name="subject"
          checked={formData.subject.includes("biology")}
          value="biology"
          onChange={checkboxHandler}
        />
      </span>

      <button type="submit">Submit</button>
    </form>
  );
};

export default ControlledForm;
form {
  max-width: 450px;
  margin: 30px auto;
  padding: 25px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px #ddd;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

input[type="text"],
input[type="email"],
input[type="date"],
select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
}

input:focus,
select:focus {
  border-color: #2563eb;
}

form > span {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
}

input[type="radio"],
input[type="checkbox"] {
  cursor: pointer;
  accent-color: #2563eb;
}

button {
  padding: 11px;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

