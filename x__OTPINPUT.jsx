import React, { useState, useRef } from "react";

const OTPInput = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;

    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleSubmit = () => {
    const enteredOtp = otp.join("");

    if (enteredOtp.length !== 6) {
      alert("Please enter complete OTP");
      return;
    }

    alert("OTP: " + enteredOtp);
  };

  return (
    <div className="otp-container">
      <h2>OTP Verification</h2>
      <p>Enter your 6-digit OTP</p>

      <div className="otp-inputs">
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            value={digit}
            ref={(el) => (inputRefs.current[index] = el)}
            onChange={(e) => handleChange(e.target.value, index)}
          />
        ))}
      </div>

      <button onClick={handleSubmit}>Verify OTP</button>
    </div>
  );
};

export default OTPInput;
// -----
.otp-inputs {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 25px 0;
}

.otp-inputs input {
  width: 45px;
  height: 45px;
  text-align: center;
  font-size: 22px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
}
