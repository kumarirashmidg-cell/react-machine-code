import React, { useState } from "react";

const Home = () => {
  return (
    <div>
      <p>Home</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quo
        quia, iusto totam nobis quas?
      </p>
    </div>
  );
};
const About = () => {
  return (
    <div>
      <p>About</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, eaque!
      </p>
    </div>
  );
};
const Career = () => {
  return (
    <div>
      <p>Career</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
  );
};

const TABS = [
  { id: 0, tabComp: Home, title: "HOME" },
  { id: 1, tabComp: About, title: "ABOUT" },
  { id: 2, tabComp: Career, title: "CAREER" },
];

const App = ({ tabs = TABS }) => {
  const [activeTab, setActiveTab] = useState(0);

  const ActiveTab = tabs[activeTab].tabComp;

  return (
    <div>
      <div>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={tab.id === activeTab ? "active" : ""}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.title}
          </button>
        ))}
        <hr></hr>
        <ActiveTab />
      </div>
    </div>
  );
};

export default App;
button {
  border: none;
  padding: 5px;
}
.active {
  background: black;
  color: #fff;
}
