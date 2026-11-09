import React, { useEffect, useState } from "react";

const App = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.body.classList.add(theme);
    localStorage.setItem("theme", theme);
    return () => document.body.classList.remove(theme);
  }, [theme]);

  return (
    <div>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>

      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia?</p>
    </div>
  );
};

export default App;
.light {
  background-color: white;
  color: black;
}

.dark {
  background-color: black;
  color: white;
}

button {
  padding: 10px 18px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  background-color: #2563eb;
  color: white;
  cursor: pointer;
}

