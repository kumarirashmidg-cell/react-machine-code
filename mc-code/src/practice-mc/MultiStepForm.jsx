// MULTI STEP FORM
import React, { useState } from "react";

const formInitialState = {
  name: "",
  dob: "",
  gender: "",
  mobile: "",
  email: "",
  address: "",
  loanType: "",
  loanAmount: "",
};

const MultiStepForm = () => {
  const [formData, setFormData] = useState(formInitialState);
  const [step, setStep] = useState(1);

  const onFieldChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form Submitted");
    setFormData(formInitialState);
    setStep(1);
  };

  return (
    <section className="container">
      <form className="form" onSubmit={formSubmitHandler}>
        {step === 1 && (
          <>
            <p>Personal Detail Form</p>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={onFieldChange}
              placeholder="Enter Name"
              className="input"
            />
            <input
              name="dob"
              type="date"
              value={formData.dob}
              onChange={onFieldChange}
              className="input"
            />

            <select
              name="gender"
              value={formData.gender}
              onChange={onFieldChange}
              className="input"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </>
        )}

        {step === 2 && (
          <>
            <p>Contact Detail Form</p>
            <input
              name="mobile"
              type="text"
              value={formData.mobile}
              onChange={onFieldChange}
              placeholder="Enter Mobile Number"
              className="input"
            />
            <input
              name="email"
              type="text"
              value={formData.email}
              onChange={onFieldChange}
              placeholder="Enter Email"
              className="input"
            />
            <textarea
              name="address"
              value={formData.address}
              onChange={onFieldChange}
              placeholder="Enter Address"
              className="input"
            />
          </>
        )}
        {step === 3 && (
          <>
            <p>Loan Apply Form</p>
            <select
              name="loanType"
              value={formData.loanType}
              onChange={onFieldChange}
              className="input"
            >
              <option value="">Loan Type</option>
              <option value="car">Car</option>
              <option value="home">Home</option>
              <option value="personal">Personal</option>
            </select>

            <input
              name="loanAmount"
              type="number"
              value={formData.loanAmount}
              onChange={onFieldChange}
              placeholder="Enter Loan Amount"
              className="input"
            />
          </>
        )}

        <div className="row">
          {step > 1 && (
            <button
              type="button"
              className="btn"
              onClick={() => setStep((prev) => prev - 1)}
            >
              Prev
            </button>
          )}
          {step < 3 && (
            <button
              type="button"
              className="btn"
              onClick={() => setStep((prev) => prev + 1)}
            >
              Next
            </button>
          )}
          {step === 3 && (
            <button type="submit" className="btn">
              Apply Loan
            </button>
          )}
        </div>
      </form>
    </section>
  );
};

export default MultiStepForm;

// ----------------------------------
.container {
  max-width: 400px;
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
  gap: 8px;
}

.btn {
  padding: 6px;
  cursor: pointer;
}
