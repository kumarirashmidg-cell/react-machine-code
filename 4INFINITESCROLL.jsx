import React, { useEffect, useState } from "react";

const API_URL = "https://dummyjson.com/users";
const LIMIT = 10;

const InfiniteScroll = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [skip, setSkip] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  // Fetch Users
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await fetch(`${API_URL}?limit=${LIMIT}&skip=${skip}`);

        if (!response.ok) {
          throw new Error("API request failed");
        }

        const result = await response.json();

        setData((prev) => [...prev, ...result.users]);

        if (skip + result.users.length >= result.total) {
          setHasMore(false);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    if (hasMore) {
      fetchData();
    }
  }, [skip]);

  // Handle Scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;

      const pageHeight = document.documentElement.scrollHeight;

      if (scrollPosition >= pageHeight - 100 && !loading && hasMore) {
        setSkip((prev) => prev + LIMIT);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading, hasMore]);

  return (
    <div className="items">
      {data.map((user) => (
        <div className="item" key={user.id}>
          <p>
            {user.firstName} {user.lastName}
          </p>
        </div>
      ))}

      {loading && <p>Loading...</p>}

      {!hasMore && <p>No more users!</p>}
    </div>
  );
};

export default InfiniteScroll;

.items {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.item {
  border: 1px solid black;
  width: 200px;
  height: 200px;
}
