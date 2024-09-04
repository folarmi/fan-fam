import React from "react";

type DayAndTimeInputProps = {
  className?: string;
};

const DayAndTimeInput = ({ className }: DayAndTimeInputProps) => {
  return (
    <div className={`flex justify-between items-center ${className}`}>
      <div className="bg-grey_10 rounded-md p-2  mr-4">
        <input
          aria-label="Date"
          type="date"
          defaultValue={new Date().toISOString().split("T")[0]}
          className="
    bg-transparent 
    text-grey_800 
    font-normal 
    text-sm 
    border-none 
    focus:outline-none 
    focus:ring-0 
    placeholder-grey_500 
    px-2 
    py-1 cursor-pointer"
        />
      </div>

      <div className="bg-grey_10 rounded-md p-2 w-1/2">
        <input
          aria-label="time"
          type="time"
          defaultValue={new Date().toISOString().split("T")[1]}
          className="
          bg-transparent 
          text-grey_800 
          font-normal 
          text-sm 
          border-none 
          focus:outline-none 
          focus:ring-0 
          placeholder-grey_500 
          px-2 
          py-1 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default DayAndTimeInput;
