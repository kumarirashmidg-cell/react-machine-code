// for icon -> windows + .
import React, { useState } from "react";

const data = [
  {
    id: 1,
    title: "Introduce",
    content: "hey! i am divya gaurav",
  },
  {
    id: 2,
    title: "Education",
    content: "National institute of technology patna",
  },
];

const Accordion1 = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleAccordion = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="container">
      {data.map((item) => (
        <div
          key={item.id}
          className="accordion-item"
          onClick={() => toggleAccordion(item.id)}
        >
          <div className="accordion-header">
            <p>
              {item.id}. {item.title}
            </p>
            <span>{activeId === item.id ? "🔽" : "🔼"}</span>
          </div>

          {activeId === item.id && (
            <p>{item.content}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion1;
// -----------------------
.container {
  max-width: 400px;
}
.accordion-item {
  border: 1px solid black;
  padding: 5px;
  margin-bottom: 5px;
  cursor: pointer;
}
.accordion-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}