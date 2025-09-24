import React from "react";
export type TextTag = "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";
export type TextStyle = "normal" | "italic" | "label" | "bold";
export type TextTransform = "uppercase" | "capitalize";
export type TextWeight = "bold" | "thin" | "normal";

export interface TypographyProps {
  tag?: TextTag;
  textStyle?: TextStyle;
  color?: string;
  children: string;
  variant?: string;
  textWeight?: TextWeight;
  textTransform?: TextTransform;
}

export const Typography = ({
  children,
  tag = "p",
  textStyle = "normal",
  color = "text",
  variant = "base",
  textWeight = "normal",
  textTransform,
}: TypographyProps) => {
  return React.createElement(tag, {}, children);
};
