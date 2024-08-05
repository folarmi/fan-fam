import React from "react";
import ReactSelect from "react-select";

type CustomSelectProps = {
  placeholder: string;
  className?: string;
  ifLabel?: boolean;
  label?: string;
};

const CustomSelect = ({
  placeholder,
  className,
  ifLabel,
  label,
}: CustomSelectProps) => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <div className={`w-full ${className}`}>
      {ifLabel && (
        <label htmlFor="" className="pb-2 font-medium text-sm text-grey_800">
          {label}
        </label>
      )}
      <ReactSelect
        options={options}
        components={{
          IndicatorSeparator: () => null,
        }}
        styles={{
          placeholder: (baseStyles) => ({
            ...baseStyles,
            color: "#BDBFC9",
            fontWeight: 400,
            fontSize: 12,
          }),
        }}
        placeholder={placeholder}
      />
    </div>
  );
};

export default CustomSelect;
