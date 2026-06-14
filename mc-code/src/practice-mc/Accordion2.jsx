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

const Accordion2 = () => {
  const [activeItems, setActiveIdItems] = useState([]);

  const toggleAccordion = (id) => {
    setActiveIdItems((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
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
            <span>{activeItems.includes(item.id) ? "🔽" : "🔼"}</span>
          </div>

          {activeItems.includes(item.id) && <p>{item.content}</p>}
        </div>
      ))}
</div>
);
};

export default Accordion2;
// -------------------------
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
