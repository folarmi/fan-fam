import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "disabled"
    | string;
  children: ReactNode;
}

const CustomButton: React.FC<ButtonProps> = ({
  variant = "primary",
  className = "",
  children,
  ...rest
}) => {
  let classes = "";

  // Determine classes based on the variant

  switch (variant) {
    case "primary":
      classes =
        // "border border-blue_500 bg-primary-btn shadow-primary-btn text-white text-base py-2 px-4 ";
        "border border-blue_500 bg-primary bg-gradient-to-r from-gradient-start to-gradient-end shadow-primary-btn text-white text-base py-2";
      break;
    case "secondary":
      classes =
        "border border-grey_10 drop-shadow-7xl py-2 px-4 rounded bg-secondary-btn";
      break;
    case "success":
      classes =
        "bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded";
      break;
    case "warning":
      classes =
        "bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded";
      break;
    case "disabled":
      classes = "text-grey_100 font-medium py-2 px-4 rounded";
      break;
    default:
      classes = "bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded";
      break;
  }

  // Concatenate the provided className with the generated classes
  const mergedClassName = `${classes} ${className} w-full whitespace-nowrap rounded-3xl font-medium text-base`;

  return (
    <button className={mergedClassName} {...rest}>
      {children}
    </button>
  );
};

export default CustomButton;
