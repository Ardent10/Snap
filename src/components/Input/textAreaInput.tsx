import { Controller, Control, FieldValues } from "react-hook-form";
import Error from "../Error";

interface props {
  name: string;
  label?: string;
  required?: boolean;
  placeholder?: string;
  disable?: boolean;
  control: Control<FieldValues>;
  showCopyIcon?: boolean;
}

export default function TextAreaInput({
  name,
  disable,
  control,
  label,
  required,
  placeholder,
  showCopyIcon,
}: props) {
  return (
    <div className="h-auto flex-1">
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
        name={name}
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => {
          return (
            <>
              <textarea
                className="bg-gray-50 text-gray-900 relative text-xs sm:text-sm rounded-md block w-full p-2 focus:border border-indigo-600 outline-none"
                onChange={onChange}
                value={(value && value) || ""}
                disabled={disable}
                placeholder={placeholder}
              />
              {showCopyIcon && (
                <div className="cursor-pointer bg-gray-200 rounded-e-md absolute top-0 right-0 px-2 py-2 hover:bg-gray-100">
                  <img src="./assets/copy.svg" width="20px" alt="copy" />
                </div>
              )}
              <Error error={error} />
            </>
          );
        }}
      />
    </div>
  );
}
