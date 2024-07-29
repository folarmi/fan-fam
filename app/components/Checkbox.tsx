import React from "react";
import Typography from "./forms/Typography";
import { UseControllerProps, useController } from "react-hook-form";

type CheckboxProps = {
  name: string;
  control: any;
  text: string;
  className?: string;
  rules?: UseControllerProps["rules"];
};

const Checkbox = ({ text, className, rules, name, control }: CheckboxProps) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
  });

  return (
    <>
      {" "}
      <div className={`flex ${className}`}>
        <input
          id={name}
          type="checkbox"
          value={field.value || ""}
          onChange={field.onChange}
          checked={field.value}
          className="w-4 h-4 mr-1 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <Typography variant="p3" className="leading-[18px]">
          {text}
        </Typography>
      </div>
      {error && (
        <span className="text-red-500 text-xs mt-1">{error.message}</span>
      )}
    </>
  );
};

export default Checkbox;
