import React from "react";
import { Colors } from "@/types";
export type TextTag = "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";
export type TextStyle = "normal" | "italic" | "label" | "bold";
export type TextWeight = "bold" | "thin" | "normal";
export type Variant = "default" | "primary" | "secondary" | "tertiary";

export interface TypographyProps {
  tag?: TextTag;
  textStyle?: TextStyle;
  color?: Colors;
  children: string;
  textWeight?: TextWeight;
  variant?: Variant;
}

export const Typography = ({
  children,
  tag = "p",
  textStyle = "normal",
  textWeight = "normal",
  variant = "default",
}: TypographyProps) => {
  const stylesArray: string[] = [variant, textStyle, textWeight];
  const styles = stylesArray.join(" ");
  return React.createElement(
    tag,
    {
      className: styles,
    },
    children
  );
};
