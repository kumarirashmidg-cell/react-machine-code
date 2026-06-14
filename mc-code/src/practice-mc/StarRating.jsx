// CREATE STAR RATING COMPONENT
// NOTE: Array.from({length:totalStars}) , [...Array(totalStars)] both are same
import React, { useState } from "react";

const StarRating = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(0);

  return (
    <div>
      <p>Star Rating</p>
      <div>
        {[...Array(totalStars)].map((_, i) => (
          <button
            key={i}
            onClick={() => setRating(i + 1)}
            className={`star ${i < rating ? "active" : ""}`}
          >
            *
          </button>
        ))}
      </div>
      <p>
        You have rated {rating}/{totalStars}
      </p>
      <p>{rating <= 3 && "Average"}</p>
      <p>{rating > 3 && "Excellent"}</p>
    </div>
  );
};

export default StarRating;
// ---------------------------
.star {
  font-size: 90px;
  border: none;
  background: none;
  cursor: pointer;
  color: gray;
}

.active {
  color: gold;
}
