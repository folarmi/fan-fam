import { useEffect, useState } from "react";
import { useController, UseControllerProps } from "react-hook-form";

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  control: any;
  rules?: UseControllerProps["rules"];
  label?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  name,
  control,
  rules,
  label,
  ...rest
}) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
  });

  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (field.value) {
      setIsFocused(true);
    }
  }, [field.value]);

  return (
    // <div className="flex flex-col gap-2 mb-3 w-full">
    //   <label htmlFor={label} className="text-sm font-semibold">
    //     {label}
    //   </label>
    //   <input
    //     className="h-12 rounded-3xl px-4 text-sm w-auto"
    //     {...field}
    //     {...rest}
    //   />
    //   {error && <span>{error.message}</span>}
    // </div>
    <div className="relative flex flex-col gap-2 mb-6 w-full">
      <input
        id={name}
        {...field}
        {...rest}
        className={`block w-full h-10 rounded-3xl px-4 text-sm bg-white border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer ${
          error ? "border-red-500" : ""
        }`}
        placeholder=" "
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(!!field.value)}
      />
      <label
        htmlFor={name}
        className={`absolute left-4 top-2 text-sm font-medium text-grey_800 duration-300 transform -translate-y-6 scale-75 origin-[0]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-3 peer-focus:scale-75 peer-focus:-translate-y-6 pb-2 ${
          isFocused || field.value
            ? "scale-75 -translate-y-6"
            : "scale-100 translate-y-3"
        }`}
      >
        {label}
      </label>
      {error && (
        <span className="text-red-500 text-xs mt-1">{error.message}</span>
      )}
    </div>
  );
};

export default CustomInput;
