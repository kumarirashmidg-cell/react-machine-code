import React, { useEffect, useState } from "react";

const ITEMS_PER_PAGE = 10;
const API_URL = "https://dummyjson.com/products";

const Pagination2 = () => {
  const [products, setProducts] = useState([]);
  const [currPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const skip = (currPage - 1) * ITEMS_PER_PAGE;

      const res = await fetch(
        `${API_URL}?limit=${ITEMS_PER_PAGE}&skip=${skip}`
      );
      const apiData = await res.json(res);
      setProducts(apiData.products);
      setTotalItems(apiData.total);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  useEffect(() => {
    fetchData();
  }, [currPage]);

  return (
    <div className="container">
      <div className="flex flex-wrap gap-2">
        {loading && <p>Loading......</p>}
        {error && <p>Error......</p>}
        <div className="items">
          {products.map((item) => (
            <div key={item.id} className="item">
              <img src={item.thumbnail} alt={item.title} className="image" />
              <h5>{item.title}</h5>
            </div>
          ))}
        </div>
      </div>

      <div className="pagination">
        <button
          onClick={() => setCurrentPage(currPage - 1)}
          disabled={currPage === 1}
          className="btn"
        >
          Prev
        </button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            className={`btn ${currPage === i + 1 ? "active" : ""}`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage(currPage + 1)}
          disabled={currPage === totalPages}
          className="btn"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination2;
// -------------------
.active {
  background-color: black;
  color: white;
}
.btn {
  padding: 10px;
  margin: 3px;
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
}
.container {
  position: relative;
  padding-bottom: 200px;
}
