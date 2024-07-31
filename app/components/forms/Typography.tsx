import React, { HTMLAttributes, ReactNode } from "react";

interface TypographyProps extends HTMLAttributes<HTMLParagraphElement> {
  variant:
    | "default"
    | "heading"
    | "titleOne"
    | "titleTwo"
    | "labelOne"
    | "h5"
    | "p1"
    | "p2"
    | "p3"
    | "subtitle2"
    | "subtitle3"
    | "caption"; // Add more variants as needed
  className?: string;
  children: ReactNode;
  onClick?: any;
}

const Typography: React.FC<TypographyProps> = ({
  variant = "default",
  className = "",
  onClick,
  children,
}) => {
  let classes = "";

  // Determine classes based on the variant
  switch (variant) {
    case "heading":
      classes = "text-4xl font-bold";
      break;
    case "titleOne":
      classes = "text-base font-bold";
      break;
    case "titleTwo":
      classes = "text-sm font-bold";
      break;
    case "labelOne":
      classes = "text-xs font-medium leading-[16px]";
      break;
    case "h5":
      classes = "text-xl font-semibold leading-[16px]";
      break;
    case "p1":
      classes = "text-base font-normal text-grey_500 leading-5";
      break;
    case "p2":
      classes = "text-sm font-normal leading-5";
      break;
    case "p3":
      classes = "text-[12px] font-normal";
      break;
    case "subtitle2":
      classes = "text-sm font-medium leading-[18px]";
      break;
    case "subtitle3":
      classes = "text-xs font-medium";
      break;
    default:
      classes = "text-base";
      break;
  }

  // Concatenate the provided className with the generated classes
  const mergedClassName = `${classes} ${className}`;

  return (
    <p onClick={onClick} className={mergedClassName}>
      {children}
    </p>
  );
};

export default Typography;
// box-shadow: 3px 3px 5px 0px #E0E2EE80;
