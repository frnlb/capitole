import React, { useState, useEffect, useCallback } from "react";
import "./Carousel.scss";

interface CarouselItem {
  id: number;
  title: string;
  content: string;
  image?: string;
  backgroundColor?: string;
}

interface CarouselProps {
  items: CarouselItem[];
  autoSlideInterval?: number;
  showIndicators?: boolean;
  showNavigation?: boolean;
}

export const Carousel: React.FC<CarouselProps> = ({
  items,
  autoSlideInterval = 3000,
  showIndicators = true,
  showNavigation = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  }, [items.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  }, [items.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-slide effect
  useEffect(() => {
    if (!isHovered && autoSlideInterval > 0) {
      const interval = setInterval(() => {
        nextSlide();
      }, autoSlideInterval);

      return () => clearInterval(interval);
    }
  }, [isHovered, autoSlideInterval, nextSlide]);

  if (!items || items.length === 0) {
    return <div className="carousel-empty">No items to display</div>;
  }

  return (
    <div
      className="carousel"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="carousel-container">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="carousel-slide"
              style={{ backgroundColor: item.backgroundColor || "#f0f0f0" }}
            >
              {item.image && (
                <div className="slide-image">
                  <img src={item.image} alt={item.title} />
                </div>
              )}
              <div className="slide-content">
                <h3 className="slide-title">{item.title}</h3>
                <p className="slide-text">{item.content}</p>
              </div>
            </div>
          ))}
        </div>

        {showNavigation && items.length > 1 && (
          <>
            <button
              className="carousel-btn carousel-btn-prev"
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              &#8249;
            </button>
            <button
              className="carousel-btn carousel-btn-next"
              onClick={nextSlide}
              aria-label="Next slide"
            >
              &#8250;
            </button>
          </>
        )}
      </div>

      {showIndicators && items.length > 1 && (
        <div className="carousel-indicators">
          {items.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? "active" : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// Example usage component
const CarouselDemo: React.FC = () => {
  const sampleItems: CarouselItem[] = [
    {
      id: 1,
      title: "First Slide",
      content:
        "This is the content of the first slide. It demonstrates the carousel functionality.",
      backgroundColor: "#e3f2fd",
    },
    {
      id: 2,
      title: "Second Slide",
      content: "Here's the second slide with different content and styling.",
      backgroundColor: "#f3e5f5",
    },
    {
      id: 3,
      title: "Third Slide",
      content:
        "The third slide shows how the carousel handles multiple items seamlessly.",
      backgroundColor: "#e8f5e8",
    },
    {
      id: 4,
      title: "Fourth Slide",
      content:
        "This final slide completes the demo carousel with auto-sliding functionality.",
      backgroundColor: "#fff3e0",
    },
  ];

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>React Carousel Component</h1>
      <p>
        This carousel auto-slides every 3 seconds and pauses when you hover over
        it.
      </p>
      <Carousel
        items={sampleItems}
        autoSlideInterval={3000}
        showIndicators={true}
        showNavigation={true}
      />

      <div style={{ marginTop: "20px", fontSize: "14px", color: "#666" }}>
        <p>Features:</p>
        <ul>
          <li>Auto-sliding with configurable interval</li>
          <li>Pauses on hover</li>
          <li>Navigation buttons</li>
          <li>Indicator dots</li>
          <li>Touch-friendly design</li>
          <li>Fully accessible with ARIA labels</li>
        </ul>
      </div>
    </div>
  );
};

export default CarouselDemo;
