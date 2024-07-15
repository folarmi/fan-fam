import React from "react";
import Typography from "./Typography";

type CheckboxProps = {
  text: string;
  className?: string;
};

const Checkbox = ({ text, className }: CheckboxProps) => {
  return (
    <div className={`flex ${className}`}>
      <input
        id="default-checkbox"
        type="checkbox"
        value=""
        className="w-4 h-4 mr-1 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <Typography variant="p3" className="leading-[18px]">
        {text}
      </Typography>
    </div>
  );
  {
    /* <div className="flex items-center">
  <input
    checked
    id="checked-checkbox"
    type="checkbox"
    value=""
    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
  />
  <label
    htmlFor="checked-checkbox"
    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
  >
    Checked state
  </label>

</div> */
  }
};

export default Checkbox;
