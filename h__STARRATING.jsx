import React, { useState } from "react";

const StarRating = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleRating = (value) => {
    setRating(value);
  };

  return (
    <div className="rating-container">
      <h3>Rate this experience</h3>

      <div className="stars">
        {[...Array(totalStars)].map((_, index) => {
          const starValue = index + 1;

          return (
            <button
              type="button"
              key={starValue}
              className={
                starValue <= (hover || rating) ? "star active" : "star"
              }
              onClick={() => handleRating(starValue)}
              onMouseEnter={() => setHover(starValue)}
              onMouseLeave={() => setHover(0)}
            >
              ☆
            </button>
          );
        })}
      </div>

      <p>
        {rating > 0
          ? `You rated ${rating} out of ${totalStars}`
          : "Please select a rating"}
      </p>

      <button type="button" className="reset-btn" onClick={() => setRating(0)}>
        Reset
      </button>
    </div>
  );
};

export default StarRating;

.rating-container {
  text-align: center;
  margin-top: 40px;
}

.stars {
  display: flex;
  justify-content: center;
  gap: 8px;
}

.star {
  background: none;
  border: none;
  font-size: 35px;
  color: #ccc;
  cursor: pointer;
  transition: color 0.2s;
}

.star.active {
  color: #ffc107;
}


