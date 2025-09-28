import React, { useState, ReactNode } from "react";
import "./Carousel.scss";

interface CarouselProps {
  children: ReactNode[];
}

export const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const [isPaused, setIsPaused] = useState(false);

  const totalItems = children.length;

  if (totalItems === 0) {
    return null;
  }

  const doubledChildren = [...children, ...children];

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  const carouselClass = `carousel ${isPaused ? "carousel--paused" : ""}`;

  return (
    <div 
      className={carouselClass} 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      <div className="carousel__content-wrapper">
        {doubledChildren}
      </div>
    </div>
  );
};