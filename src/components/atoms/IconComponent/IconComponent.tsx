import Star from "@assets/star.svg?react";
import Heart from "@assets/heart.svg?react";
import HeartSolid from "@assets/heart-solid.svg?react";
import HeartOutline from "@assets/heart-outline.svg?react";
import type { Colors } from "@/types";
import { colorMap, colorVarMap } from "@/helpers/styles";
import "./IconComponent.scss";
import React from "react";

export type IconName = "star" | "heart" | "heart-solid" | "heart-outline";

export interface IconComponentProps {
  name: IconName;
  fillColor?: Colors | "none";
  strokeColor?: Colors | "none";
  size?: number | string;
  className?: string;
}

const iconMap = {
  star: Star,
  heart: Heart,
  "heart-solid": HeartSolid,
  "heart-outline": HeartOutline,
} as const;

export const IconComponent: React.FC<IconComponentProps> = ({
  name,
  fillColor,
  strokeColor,
  size = 24,
  className = "",
}) => {
  const IconSvg = iconMap[name];

  const getColorValue = (color?: Colors | "none"): string | undefined => {
    if (!color || color === "none") return "none";
    return colorVarMap[color] || colorMap[color];
  };

  const style: React.CSSProperties = {
    width: typeof size === "number" ? `${size}px` : size,
    height: typeof size === "number" ? `${size}px` : size,
    ...(fillColor && { "--icon-fill": getColorValue(fillColor) } as React.CSSProperties),
    ...(strokeColor && { "--icon-stroke": getColorValue(strokeColor) } as React.CSSProperties),
  };

  return (
    <div className={`icon-component ${className}`} style={style}>
      <IconSvg />
    </div>
  );
};

export default IconComponent;