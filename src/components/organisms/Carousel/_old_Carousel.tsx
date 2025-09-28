import React, { useState, ReactNode } from "react";
import "./Carousel.scss";
interface CarouselProps {
  children: ReactNode[];
}

export const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalItems = children.length;

  if (totalItems === 0) {
    return null;
  }
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalItems - 1 : prevIndex - 1
    );
  };
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalItems - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <div className="carousel__content-wrapper">
        {children[currentIndex]}
      </div>
      {totalItems > 1 && (
        <div className="carousel__controls">
          <button className="carousel__button" onClick={handlePrev}>
            &lt;
          </button>
          <button className="carousel__button" onClick={handleNext}>
            &gt;
          </button>
        </div>
      )}
    </div>
  );
};
