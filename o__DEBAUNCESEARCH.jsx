import React, { useEffect, useState } from "react";

const API_URL = "https://dummyjson.com/products/search";

const DebaunceSearch = () => {
  let [product, setProduct] = useState([]);
  let [input, setInput] = useState("");
  let [cache, setCatch] = useState({});

  const fetchData = async (query) => {
    if (cache[input]) {
      setProduct(cache[input]);
      return;
    }
    let res = await fetch(`${API_URL}?q=${query}`);
    let result = await res.json();
    setProduct(result.products);
    setCatch((prev) => ({ ...prev, [input]: result.products }));
  };

  useEffect(() => {
    let timer = setTimeout(() => fetchData(input), 600);
    return () => clearTimeout(timer);
  }, [input]);

  return (
    <div>
      <input
        type="text"
        value={input}
        placeholder="search products"
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="products">
        {product.map((item) => (
          <div key={item.id} className="product">
            <p>{item.title}</p>
            <p>{item.brand}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DebaunceSearch;

input {
  padding: 5px;
  width: 80%;
}
.products {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.product {
  border: 1px solid black;
  margin: 10px;
  padding: 5px;
}
