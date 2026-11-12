import React, { useEffect, useState } from "react";
let API_URL = "https://dummyjson.com/recipes";

const AutoCompleteSearch = () => {
  const [results, setResults] = useState([]);
  const [input, setInput] = useState("");
  const [cache, setCache] = useState({});

  const fetchData = async (query) => {
    if (cache[query]) {
      setResults(cache[query]);
      return;
    }

    const response = await fetch(`${API_URL}/search?q=${query}`);
    const result = await response.json();
    setResults(result.recipes);

    setCache((prev) => ({ ...prev, [query]: result.recipes }));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (input) {
        fetchData(input);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [input]);

  const handleSelect = (name) => {
    setInput(name);
  };
  return (
    <section className="container">
      <input
        type="text"
        className="search-input"
        placeholder="Search..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      {results.length > 0 && (
        <ul className="result-box">
          {results.map((item) => (
            <li
              key={item.id}
              className="result-item"
              onClick={() => handleSelect(item.name)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default AutoCompleteSearch;
// -------------------------
.container {
  width: 300px;
}
.search-input {
  width: 100%;
  padding: 6px;
  border: 1px solid #ccc;
}
.result-box {
  max-height: 200px;
  overflow-y: auto;
  border: 1px solid #ccc;
  padding: 5px;
}
.result-item {
  padding: 4px;
  cursor: pointer;
}
.result-item:hover {
  background: black;
  color: white;
}
