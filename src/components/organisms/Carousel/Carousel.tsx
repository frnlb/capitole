import React, { useState, ReactNode, Children, ReactElement, } from "react";
import "./Carousel.scss";

interface CarouselProps {
  children: ReactNode[];
}

export const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const [isPaused, setIsPaused] = useState(false);

  const totalItems = Children.count(children);

  if (totalItems === 0) {
    return null;
  }

  const originalChildren = Children.toArray(children) as ReactElement[];

  const clonedChildren = Children.map(originalChildren, (child: ReactElement, index) => {
    const originalKey = child.key || `carousel-item-${index}`;
    const newKey = `${originalKey}-clone`;
    return React.cloneElement(child, { key: newKey });
  });

  const doubledChildren = [...originalChildren, ...clonedChildren];

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