import { useEffect, useState } from "react";
import { useController, UseControllerProps } from "react-hook-form";

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  control: any;
  rules?: UseControllerProps["rules"];
  label?: string;
  readOnly?: boolean;
  type?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  name,
  control,
  rules,
  label,
  readOnly,
  type,
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
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    if (field.value) {
      setIsFocused(true);
    }
  }, [field.value]);

  return (
    <div className="relative flex flex-col gap-2 mb-6 w-full">
      <input
        readOnly={readOnly}
        id={name}
        type={showPassword ? "text" : type}
        {...field}
        {...rest}
        className={`block w-full h-10 rounded-3xl px-4 text-sm bg-white border appearance-none focus:outline-none focus:ring-0 peer ${
          error
            ? "border border-red-500"
            : "border-gray-300 focus:border-primary"
        }`}
        placeholder=" "
        value={field.value || ""}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(!!field.value)}
        style={{
          backgroundColor: readOnly ? "hsl(0,0%, 90%)" : "",
          cursor: readOnly ? "not-allowed" : "initial",
        }}
      />

      {type === "password" && (
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-4 top-2.5 text-gray-500 focus:outline-none"
        >
          {showPassword ? "🙈" : "👁️"}
        </button>
      )}
      <label
        htmlFor={name}
        className={`absolute left-4 top-2 text-sm font-normal text-grey_200 duration-300 transform -translate-y-4 scale-75 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-3 peer-focus:scale-75 peer-focus:-translate-y-7 ${
          isFocused || field.value
            ? "-translate-y-6 scale-75"
            : "translate-y-2.5 scale-100"
        }`}
      >
        {label}
      </label>
      {error && <span className="text-red-500 text-xs">{error.message}</span>}
    </div>
  );
};

export default CustomInput;
