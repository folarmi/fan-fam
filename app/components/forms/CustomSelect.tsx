import React from "react";
import ReactSelect from "react-select";

const CustomSelect = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <div className="">
      <ReactSelect options={options} />
    </div>
  );
};

export default CustomSelect;
