import { IconComponent, Typography } from "@/components";
import { IconComponentProps, IconName } from "@/components";
import "./Button.scss";

export type ButtonType = "submit" | "button" | "reset";
export type ContainerShape = "square" | "rounded" | "circle" | "pill";
export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  children?: React.ReactNode | React.ReactNode[];
  label?: string;
  variant?: "primary" | "secondary" | "tertiary";
  type?: ButtonType;
  shape?: ContainerShape;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  icon?: IconName;
  iconFill?: IconComponentProps["fillColor"];
  iconStroke?: IconComponentProps["strokeColor"];
}
export const Button = ({
  children,
  label,
  type = "button",
  variant = "primary",
  shape = "rounded",
  onClick,
  onMouseEnter,
  onMouseLeave,
  icon,
  iconFill,
  iconStroke,
  ...rest
}: ButtonProps) => {

  const btnStyles = icon ? "button-icon" : "";
  return (
    <button
      className={`button ${btnStyles}`}
      type={type}
      onClick={type !== "submit" ? onClick : undefined}
      onMouseEnter={onMouseEnter}
      {...rest}
    >
      {children}
      {label && <Typography textStyle="label">{label}</Typography>}
      {icon && <IconComponent 
      name={icon} 
      fillColor={iconFill}
      strokeColor={iconStroke}
      />}
    </button>
  );
};
