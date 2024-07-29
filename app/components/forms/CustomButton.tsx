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
  loading?: boolean;
}

const CustomButton: React.FC<ButtonProps> = ({
  variant = "primary",
  className = "",
  children,
  loading,
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
  let mergedClassName = `${classes} ${className} w-full whitespace-nowrap rounded-3xl font-medium text-base`;

  if (loading) {
    mergedClassName += " opacity-50 cursor-not-allowed";
  }

  return (
    <button disabled={loading} className={mergedClassName} {...rest}>
      {loading ? (
        <div className="flex items-center justify-center">
          <svg
            className="animate-spin h-5 w-5 mr-3 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Loading...
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default CustomButton;
