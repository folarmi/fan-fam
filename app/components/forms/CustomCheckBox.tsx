import React from "react";

type CheckBoxProps = {
  iflabel?: boolean;
  checked: boolean;
  onChange: any;
};

const CustomCheckBox = ({ iflabel, checked, onChange }: CheckBoxProps) => {
  return (
    <div className="flex items-center">
      <input
        checked={checked}
        id="checked-checkbox"
        type="checkbox"
        value=""
        onChange={onChange}
        className="hidden"
      />
      <label
        htmlFor="checked-checkbox"
        className="relative cursor-pointer w-6 h-6 bg-blue_500 rounded-lg flex items-center justify-center"
      >
        <svg
          className={`w-2 h-[6.5px] text-white ${checked ? "block" : "hidden"}`}
          width="10"
          height="9"
          viewBox="0 0 10 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 5L4 7.5L9 1"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </label>
      {iflabel && (
        <label
          htmlFor="checked-checkbox"
          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Checked state
        </label>
      )}
    </div>
  );
};

export default CustomCheckBox;
