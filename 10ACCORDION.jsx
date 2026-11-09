import { useState } from "react";

const demoList = [
  {
    id: 1,
    question: "what is javascript ?",
    anshwer:
      "javascript is a scripting language , gives interactivity to your web page.",
  },
  {
    id: 2,
    question: "what is React ?",
    anshwer:
      "React is a open source javascript library , used to create ui especially a single page application.",
  },
  {
    id: 3,
    question: "what is next js ?",
    anshwer:
      "a react frame work, main feature is server side rendering which makes seo friendly website",
  },
];

const Accordion = ({ list = demoList }) => {
  const [activeItem, setActiveItem] = useState(null);

  function handleClick(item) {
    if (item.id === activeItem) {
      setActiveItem(null);
    } else {
      setActiveItem(item.id);
    }
  }

  return (
    <div>
      <h1>Accordion example</h1>
      <ul className="list">
        {list.map((item) => (
          <li key={item.id} className="list-item">
            <div className="heading">
              <span>{item.question}</span>
              <button onClick={() => handleClick(item)}>
                {activeItem === item.id ? "⬇️" : "⬆️"}
              </button>
            </div>
            {item.id === activeItem && (
              <p className="anshwer">{item.anshwer}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Accordion;



import React, { useState } from "react";

const demoList = [
  {
    id: 1,
    question: "what is javascript ?",
    anshwer:
      "javascript is a scripting language , gives interactivity to your web page.",
  },
  {
    id: 2,
    question: "what is React ?",
    anshwer:
      "React is a open source javascript library , used to create ui especially a single page application.",
  },
  {
    id: 3,
    question: "what is next js ?",
    anshwer:
      "a react frame work, main feature is server side rendering which makes seo friendly website",
  },
];

const Accordion = ({ list = demoList }) => {
  const [activeItem, setActiveItem] = useState([]);
  console.log(activeItem, "qqq");

  function handleClick(id) {
    setActiveItem((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item != id);
      } else {
        return [...prev, id];
      }
    });
  }

  return (
    <div>
      <h1>Accordion example</h1>
      <ul className="list">
        {list.map((item) => (
          <li key={item.id} className="list-item">
            <div className="heading">
              <span>{item.question}</span>
              <button onClick={() => handleClick(item.id)}>
                {activeItem.includes(item.id) ? "⬇️" : "⬆️"}
              </button>
            </div>
            {activeItem.includes(item.id) && (
              <p className="anshwer">{item.anshwer}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Accordion;


.list {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.list-item {
  display: flex;
  flex-direction: column;
  border: 1px solid black;
}
.heading {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background: lightgray;
}
.anshwer {
  padding: 10px;
}

