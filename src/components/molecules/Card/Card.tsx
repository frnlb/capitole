import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";
import { Typography } from "@/components";

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
          {title && (
            <div className="card__title-container">
              <Typography tag="h3">{title}</Typography>
            </div>
          )}
        </div>
      )}
      {description && (
        <div className="card__description-container">
          <Typography tag="p" color="text">
            {description}
          </Typography>
        </div>
      )}
      {!imageUrl && title && <Typography tag="h3">{title}</Typography>}
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
