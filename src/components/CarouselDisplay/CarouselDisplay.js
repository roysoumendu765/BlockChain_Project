import React, { useState } from 'react';
import './CarouselDisplay.css';

const CarouselDisplay = ({ reviews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="carousel">
      <button className="carousel-button" onClick={prevSlide}>&lt;</button>
      <div className="carousel-content">
        <h3>{reviews.ratedquestion}</h3>
        {/* <p>{reviews[currentIndex].content}</p> */}
      </div>
      <button className="carousel-button" onClick={nextSlide}>&gt;</button>
    </div>
  );
};

export default CarouselDisplay;