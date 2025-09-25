// src/components/Carousel/Carousel.tsx

import React, { useState, ReactNode } from "react";
import "./Carousel.scss";
interface CarouselProps {
  children: ReactNode[];
}

export const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalItems = children.length;

  // Conditional rendering check: if there are no children, don't render.
  if (totalItems === 0) {
    return null;
  }

  // Define the logic for the "Previous" button.
  // It cycles back to the last item if the current index is 0.
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalItems - 1 : prevIndex - 1
    );
  };

  // Define the logic for the "Next" button.
  // It cycles back to the first item if the current index is the last one.
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalItems - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <div className="carousel__content-wrapper">
        {/*
          This is the core of the carousel logic.
          We use conditional rendering to show only the item at the current index.
        */}
        {children[currentIndex]}
      </div>

      {/* Conditional rendering for the navigation buttons.
          They only appear if there's more than one item in the carousel. */}
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
