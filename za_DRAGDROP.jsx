import React, { useState } from "react";

const DragDrop = () => {
  const [box1, setBox1] = useState(["React", "JavaScript", "HTML", "CSS"]);

  const [box2, setBox2] = useState([]);

  const [dragItem, setDragItem] = useState(null);
  const [sourceBox, setSourceBox] = useState(null);

  const handleDragStart = (item, boxName) => {
    setDragItem(item);
    setSourceBox(boxName);
  };

  const handleDrop = (targetBox) => {
    if (sourceBox === "box1" && targetBox === "box2") {
      setBox1(box1.filter((i) => i !== dragItem));
      setBox2([...box2, dragItem]);
    }
    if (sourceBox === "box2" && targetBox === "box1") {
      setBox2(box2.filter((i) => i !== dragItem));
      setBox1([...box1, dragItem]);
    }

    setDragItem(null);
    setSourceBox(null);
  };

  return (
    <div className="container">
      <div
        className="box"
        onDragOver={(e) => e.preventDefault()}
        onDrop={() => handleDrop("box1")}
      >
        <h3>Box 1</h3>

        {box1.map((item, index) => (
          <div
            key={index}
            className="item"
            draggable
            onDragStart={() => handleDragStart(item, "box1")}
          >
            {item}
          </div>
        ))}
      </div>

      <div
        className="box"
        onDragOver={(e) => e.preventDefault()}
        onDrop={() => handleDrop("box2")}
      >
        <h3>Box 2</h3>

        {box2.map((item, index) => (
          <div
            key={index}
            className="item"
            draggable
            onDragStart={() => handleDragStart(item, "box2")}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DragDrop;
--------------------------
.container {
    display: flex;
    justify-content: center;
    gap: 40px;
    margin-top: 40px;
    font-family: Arial;
  }
  
  .box {
    width: 220px;
    min-height: 250px;
    border: 2px solid black;
    padding: 10px;
    background: #f5f5f5;
  }
  
  .box h3 {
    text-align: center;
    margin-bottom: 10px;
  }
  
  .item {
    padding: 8px;
    margin-bottom: 6px;
    background: white;
    border: 1px solid black;
    cursor: grab;
  }
