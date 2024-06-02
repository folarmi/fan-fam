import React, { HTMLAttributes, ReactNode } from "react";

interface TypographyProps extends HTMLAttributes<HTMLParagraphElement> {
  variant?:
    | "default"
    | "heading"
    | "h5"
    | "p1"
    | "p3"
    | "subtitle2"
    | "caption"; // Add more variants as needed
  className?: string;
  children: ReactNode;
}

const Typography: React.FC<TypographyProps> = ({
  variant = "default",
  className = "",
  children,
}) => {
  let classes = "";

  // Determine classes based on the variant
  switch (variant) {
    case "heading":
      classes = "text-4xl font-bold";
      break;
    case "h5":
      classes = "text-4xl text-grey_900 text-xl font-bold leading-[26px]";
      break;
    case "p1":
      classes = "text-base font-normal text-grey_500 leading-5";
      break;
    case "p3":
      classes = "text-[13px] font-normal text-grey_500";
      break;
    case "subtitle2":
      classes = "text-sm font-medium leading-[18px]";
      break;
    case "caption":
      classes = "text-sm text-gray-500";
      break;
    default:
      classes = "text-base";
      break;
  }

  // Concatenate the provided className with the generated classes
  const mergedClassName = `${classes} ${className}`;

  return <p className={mergedClassName}>{children}</p>;
};

export default Typography;
