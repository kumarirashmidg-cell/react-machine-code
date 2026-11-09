import React, { useState } from "react";

const MultiStepForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    dob: "",
    gender: "",
    role: "",
    intrest: [],
  });
  const [step, setStep] = useState(0);

  function formChangeHandler(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function selectFormHandler(e) {
    const { checked, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      intrest: checked
        ? [...prev.intrest, value]
        : prev.intrest.filter((item) => item !== value),
    }));
  }

  function formSubmitHandler() {
    console.log(formData);
    setFormData({
      username: "",
      email: "",
      dob: "",
      gender: "",
      role: "",
      intrest: [],
    });
  }

  function validateStep() {
    if (step === 0) {
      if (!formData.username.trim() || !formData.email.trim()) {
        alert("Please fill Username and Email");
        return false;
      }
    }

    if (step === 1) {
      if (!formData.dob || !formData.gender) {
        alert("Please fill DOB and Gender");
        return false;
      }
    }

    if (step === 2) {
      if (!formData.role || formData.intrest.length === 0) {
        alert("Please select Role and at least one Interest");
        return false;
      }
    }

    return true;
  }

  function nextHandler() {
    if (!validateStep()) return;
    if (step === 2) {
      formSubmitHandler();
      setStep(0);
      return;
    }
    setStep((prev) => prev + 1);
  }

  return (
    <div>
      <form>
        {step === 0 && (
          <>
            <input
              type="text"
              name="username"
              placeholder="enter name"
              value={formData.username}
              onChange={formChangeHandler}
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="johndoe@gmail.com"
              onChange={formChangeHandler}
            />
          </>
        )}

        {step === 1 && (
          <>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={formChangeHandler}
            />
            <span>
              <span>Gender :-</span>
              Male :
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                onChange={formChangeHandler}
              />
              Female :
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
          </>
        )}

        {step === 2 && (
          <>
            <span>
              <span>Role : </span>
              <select name="role" onChange={formChangeHandler}>
                <option value="">select role</option>
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
                <option value="dean">Dean</option>
              </select>
            </span>
            <span>
              <span>Intrests :- </span>
              Cricket :
              <input
                type="checkbox"
                name="intrest"
                value="cricket"
                checked={formData.intrest.includes("cricket")}
                onChange={selectFormHandler}
              />
              Football :
              <input
                type="checkbox"
                name="intrest"
                value="football"
                checked={formData.intrest.includes("football")}
                onChange={selectFormHandler}
              />
              Hockey :
              <input
                type="checkbox"
                name="intrest"
                value="hockey"
                checked={formData.intrest.includes("hockey")}
                onChange={selectFormHandler}
              />
            </span>
          </>
        )}
      </form>

      <div>
        <button
          disabled={step === 0}
          type="button"
          onClick={() => setStep((prev) => prev - 1)}
        >
          prev
        </button>
        <button type="button" onClick={nextHandler}>
          {step === 2 ? "submit" : "next"}
        </button>
      </div>
    </div>
  );
};

export default MultiStepForm;

* {
  box-sizing: border-box;
}

body {
  background: #f4f4f4;
  padding: 30px;
}

form {
  max-width: 450px;
  min-height: 220px;
  margin: 30px auto 15px;
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

form span {
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
}

button {
  padding: 10px 20px;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px;
}

button:disabled {
  background: #aaa;
  cursor: not-allowed;
}

