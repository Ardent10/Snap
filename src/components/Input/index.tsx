import { Controller, Control, FieldValues } from "react-hook-form";
import Error from "../Error";
import { useState } from "react";
interface InputFieldProps {
  label?: string;
  type: string;
  name: string;
  id: string;
  placeholder?: string;
  required?: boolean;
  control: Control<FieldValues>;
  className?: string;
}

export default function InputField({
  label,
  type,
  name,
  placeholder,
  required,
  control,
  className,
}: InputFieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  function togglePassword() {
    setShowPassword((prev) => !prev);
  }

  return (
    <div className="h-auto  flex-1">
      {label && (
        <label
          htmlFor={label}
          className="block mb-2 text-sm font-medium dark:text-white"
        >
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur }, fieldState: { error } }) => (
          <div className="relative">
            <input
              id={label}
              type={type == "password" ? (showPassword ? "text" : type) : type}
              name={name}
              className={
                className
                  ? className
                  : "focus-ring-0 bg-gray-50 text-gray-900 relative text-xs sm:text-sm rounded-md block w-full p-2 focus:border border-indigo-600 outline-none"
              }
              placeholder={placeholder}
              // required={required}
              onChange={onChange}
              onBlur={onBlur}
            />

            {type === "password" && (
              <div
                className="cursor-pointer bg-gray-200 rounded-e-md absolute top-0 right-0 px-2 py-1.5 hover:bg-gray-100"
                onClick={togglePassword}
              >
                <img
                  src={
                    showPassword
                      ? "./assets/eye-closed.svg"
                      : "./assets/eye.svg"
                  }
                  width="25px"
                  alt="pswd"
                />
              </div>
            )}
            <Error error={error} />
          </div>
        )}
      />
    </div>
  );
}
