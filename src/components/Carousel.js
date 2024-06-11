import React, { useState } from "react";
import "../styles/Carousel.css";

const Carousel = ({ games }) => {
  const [index, setIndex] = useState(0);

  if (!games || games.length === 0) {
    return <div>Loading...</div>;
  }

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % games.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + games.length) % games.length);
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel-slide"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {games.map((game) => (
          <div key={game.id} className="carousel-image-container">
            <img src={game.image} alt={game.title} className="carousel-image" />
            <div className="carousel-text">
              <h3>{game.title}</h3>
              <p>{game.platform}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-btn carousel-btn-prev" onClick={prevSlide}>
        &#9664;
      </button>
      <button className="carousel-btn carousel-btn-next" onClick={nextSlide}>
        &#9654;
      </button>
    </div>
  );
};

export default Carousel;
