import React, { useEffect, useState } from "react";

const API_URL = "https://dummyjson.com/products";

const Pagination1 = () => {
  const [data, setData] = useState([]);
  const [currPage, setCurrPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch(API_URL);
      const data = await res.json();
      setData(data.products);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const ITEMONPAGE = 5;
  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / ITEMONPAGE);

  const si = currPage * ITEMONPAGE;
  const ei = si + ITEMONPAGE;

  return (
    <div>
      <div>
        <p>{loading && "loading"}</p>
        <p>{error && "error"}</p>
      </div>
      <div className="items">
        {data.slice(si, ei).map((item) => (
          <div className="item" key={item.id}>
            <img src={item.thumbnail} className="image" />
            <p>{item.title}</p>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button
          className="btn"
          onClick={() => setCurrPage((curr) => curr - 1)}
          disabled={currPage === 0}
        >
          Prev
        </button>
        {totalPages &&
          [...Array(totalPages)].map((_, i) => (
            <button
              className={`btn ${i === currPage ? "active" : ""}`}
              onClick={() => setCurrPage(i)}
              key={i}
            >
              {i + 1}
            </button>
          ))}
        <button
          className="btn"
          onClick={() => setCurrPage((curr) => curr + 1)}
          disabled={currPage === totalPages - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination1;
// -------------------------------
.active {
  background-color: black;
  color: white;
}
.btn {
  padding: 10px;
  margin-right: 3px;
  cursor: pointer;
}

.items {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 8px;
}
.item {
  border: 1px solid black;
  max-width: 150px;
  padding: 4px;
}
.image {
  max-width: 150px;
}
.pagination {
  position: absolute;
  bottom: 4px;
  left: 20%;
}

