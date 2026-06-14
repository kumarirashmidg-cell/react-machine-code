import React, { useState } from "react";

const options = ["React", "JavaScript", "HTML", "CSS"];

const CustomDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Select Option");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={toggleDropdown}>
        {selected}
      </div>

      {isOpen && (
        <div className="dropdown-list">
          {options.map((option, index) => (
            <div
              key={index}
              className="dropdown-item"
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
// -------------------------

.dropdown {
  width: 200px;
  position: relative;
}

.dropdown-header {
  padding: 10px;
  border: 1px solid black;
  cursor: pointer;
  background: #f5f5f5;
}

.dropdown-list {
  position: absolute;
  width: 100%;
  border: 1px solid black;
  border-top: none;
  background: white;
}

.dropdown-item {
  padding: 8px;
  cursor: pointer;
}

.dropdown-item:hover {
  background: #eee;
}
