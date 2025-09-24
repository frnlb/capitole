import Star from "@assets/star.svg?react";
import Heart from "@assets/heart.svg?react";
import type { Colors } from "@/types";
import { colorMap } from "@/helpers/styles";
import "./IconComponent.scss";

export type IconName = "star" | "heart";

export interface SvgIconComponentProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  fillColor?: Colors | string;
  strokeColor?: Colors | string;
  width?: number;
  height?: number;
}

export interface IconComponentProps extends SvgIconComponentProps {
  variant?: string;
  alt: string;
}

const icons: Record<
  IconName,
  string | React.FC<React.SVGProps<SVGSVGElement>>
> = {
  star: Star,
  heart: Heart,
};

export const IconComponent: React.FC<IconComponentProps> = ({
  variant = "base",
  alt,
  name,
  fillColor,
  strokeColor,
  width = 40,
  height = 40,
  ...props
}: IconComponentProps) => {
  const Icon = icons[name];
  let iconStyle;
  if (typeof Icon === "function") {
    const fillColorResult =
      fillColor && fillColor in colorMap
        ? colorMap[fillColor as Colors]
        : fillColor;

    const strokeColorResult =
      strokeColor && strokeColor in colorMap
        ? colorMap[strokeColor as Colors]
        : strokeColor;

    return (
      <Icon
        className={iconStyle}
        {...props}
        fill={fillColorResult}
        stroke={strokeColorResult}
        width={width}
        height={height}
      />
    );
  }
  return <img src={icons[name] as string} className={variant} alt={alt} />;
};
