import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

interface CardProps {
  title?: string;
  imageUrl?: string;
  description?: string;
  link?: string;
}

export const Card: React.FC<CardProps> = ({
  title,
  imageUrl,
  description,
  link,
}) => {
  if (!title && !imageUrl && !description) {
    return null;
  }

  const cardContent = (
    <>
      {imageUrl && (
        <div className="card__image-container">
          <img
            src={imageUrl}
            alt={title || "Card image"}
            className="card__image"
          />
          {title && <h2 className="card__title-overlay">{title}</h2>}
        </div>
      )}
      {description && <p className="card__description">{description}</p>}
      {!imageUrl && title && <h2 className="card__title">{title}</h2>}
    </>
  );

  if (link) {
    return (
      <Link to={link} className="card">
        {cardContent}
      </Link>
    );
  }

  return <div className="card">{cardContent}</div>;
};
