import React, { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="tabs-container">
      <div className="tabs-header">
        <button
          className={activeTab === "tab1" ? "tab active" : "tab"}
          onClick={() => setActiveTab("tab1")}
        >
          Tab 1
        </button>
        <button
          className={activeTab === "tab2" ? "tab active" : "tab"}
          onClick={() => setActiveTab("tab2")}
        >
          Tab 2
        </button>
        <button
          className={activeTab === "tab3" ? "tab active" : "tab"}
          onClick={() => setActiveTab("tab3")}
        >
          Tab 3
        </button>
      </div>

      <div className="tab-content">
        {activeTab === "tab1" && <p>This is Tab 1 Content</p>}
        {activeTab === "tab2" && <p>This is Tab 2 Content</p>}
        {activeTab === "tab3" && <p>This is Tab 3 Content</p>}
      </div>
    </div>
  );
};

export default Tabs;
// ----------------------
.tabs-container {
    width: 400px;
    margin: 40px auto;
  }
  .tabs-header {
    display: flex;
  }
  .tab {
    flex: 1;
    padding: 10px;
    border: 1px solid black;
    background: #f5f5f5;
    cursor: pointer;
  }
  
  .tab.active {
    background: black;
    color: white;
  }
  
  .tab-content {
    border-top: none;
    padding: 20px;
  }
  
