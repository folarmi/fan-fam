import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "success" | "warning" | "disabled"; // Add more variants as needed
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
      classes = "bg-primary text-white text-base py-2 px-4 ";
      break;
    case "secondary":
      classes =
        "bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded";
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
  const mergedClassName = `${classes} ${className} w-full rounded-3xl font-medium text-base`;

  return (
    <button className={mergedClassName} {...rest}>
      {children}
    </button>
  );
};

export default CustomButton;
