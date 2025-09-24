import { IconComponent, Typography } from "@/components";
import { IconComponentProps, IconName } from "@/components";
import "./Button.scss";

export type ButtonType = "submit" | "button" | "reset";
export type ContainerShape = "square" | "rounded" | "circle" | "pill";
export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  children?: React.ReactNode | React.ReactNode[];
  label?: string; //typography;
  variant?: string | "icon"; // variant;
  type?: ButtonType;
  shape?: ContainerShape;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  icon?: IconName;
  alt?: IconComponentProps["alt"];
}
export const Button = ({
  children,
  label,
  type = "button",
  variant = "base",
  shape = "rounded",
  onClick,
  onMouseEnter,
  onMouseLeave,
  alt,
  icon,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={"button"}
      type={type}
      onClick={type !== "submit" ? onClick : undefined}
      onMouseEnter={onMouseEnter}
      {...rest}
    >
      {children}
      {label && <Typography textStyle="label">{label}</Typography>}
      {icon && <IconComponent name={icon} alt={alt ?? icon} />}
    </button>
  );
};
