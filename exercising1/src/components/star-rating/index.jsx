import React, { useState } from "react";
import "./style.css";
import { FaStar } from "react-icons/fa";
function StarRating({ nOfStar = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }

  function handleMouseMove(getCurrentIndex) {
    setHover(getCurrentIndex);
  }

  function handleMouseLeave() {
    setHover(rating);
  }
  return (
    <div className="star-rating">
      {[...Array(nOfStar)].map((_, index) => {
        index = index + 1;
        return (
          <FaStar
            className={index <= (hover || rating) ? "on" : "off"}
            // style={{background:"red", color:"white",cursor:"pointer"}}
            key={index}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseMove(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
          />
        );
      })}
    </div>
  );
}

export default StarRating;
