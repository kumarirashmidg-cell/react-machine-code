import React, { useEffect, useState } from "react";

const API_URL = "https://dummyjson.com/recipes";

const InfiniteScroll = () => {
  const [recepis, setRecepies] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchRecepies = async () => {
    try {
      setLoading(true);

      const res = await fetch(`${API_URL}?limit=10&skip=${10 * page}`);
      const results = await res.json();

      setRecepies((prev) => [...prev, ...results.recipes]);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchRecepies();
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 200 &&
      !loading
    ) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading]);

  return (
    <div className="container">
      <div className="recipe-list">
        {recepis.length > 0 &&
          recepis.map((item) => (
            <div key={item.id} className="recipe-card">
              <img src={item.image} alt={item.name} className="recipe-img" />

              <h2 className="recipe-title">{item.name}</h2>
            </div>
          ))}

        {loading && <p className="loading">LOADING...</p>}
      </div>
    </div>
  );
};

export default InfiniteScroll;
// ---------------------------
.container {
  width: 400px;
  margin: auto;
}

.recipe-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.recipe-card {
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 12px;
}

.recipe-img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 6px;
}

.recipe-title {
  font-weight: bold;
  margin-top: 8px;
}

.loading {
  text-align: center;
  padding: 10px;
}