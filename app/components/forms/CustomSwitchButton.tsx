import React from "react";

const CustomSwitchButton = () => {
  return (
    <div>
      <label className="inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" className="sr-only peer" />
        <div
          className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer 
        peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white 
        after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full
         after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue_500"
        ></div>
        {/* <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          Toggle me
        </span> */}
      </label>
    </div>
  );
};

export default CustomSwitchButton;
