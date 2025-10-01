import React from "react";
import { Colors } from "@/types";
import "./Typography.scss";
export type TextTag = "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";
export type TextStyle = "normal" | "italic" | "label" | "bold";
export type TextWeight = "bold" | "thin" | "normal";
export type Variant = "default" | "primary" | "secondary" | "tertiary";
export type FontFamily = "default" | "primary" | "secondary" | "tertiary";

export interface TypographyProps {
  tag?: TextTag;
  textStyle?: TextStyle;
  color?: Colors | "inherit";
  children: string | React.ReactNode;
  textWeight?: TextWeight;
  variant?: Variant;
  fontFamily?: FontFamily;
}

export const Typography = ({
  children,
  tag = "p",
  textStyle = "normal",
  textWeight = "normal",
  variant = "default",
  fontFamily,
  color,
}: TypographyProps) => {
  const colorStyle = color ? `text-color-${color}` : "";
  const fontStyle = fontFamily ? `font-${fontFamily}` : "";
  const stylesArray: string[] = [
    variant,
    textStyle,
    textWeight,
    colorStyle,
    fontStyle,
  ];
  const styles = stylesArray.join(" ");
  return React.createElement(
    tag,
    {
      className: styles,
    },
    children
  );
};
