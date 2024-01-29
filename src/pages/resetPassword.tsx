import { useState } from "react";
import { Link } from "react-router-dom";
import InputField from "../components/Input";
import Layout from "../components/Layout";
import { useForm } from "react-hook-form";

const passwordConditions = [
  { id: 1, text: "At least 8 characters long", regex: /^.{8,}$/ },
  { id: 2, text: "Contain at least one uppercase letter", regex: /[A-Z]/ },
  { id: 3, text: "Contain at least one lowercase letter", regex: /[a-z]/ },
  { id: 4, text: "Contain at least one number", regex: /\d/ },
  {
    id: 5,
    text: "Contain at least one special character",
    regex: /[!@#$%^&*(),.?":{}|<>]/,
  },
];

export default function ResetPassword() {
  const { control, handleSubmit } = useForm();
  const [passwordValid, setPasswordValid] = useState(false);

  //   useEffect(() => {
  //     validatePassword(watch("password"));
  //   }, [watch]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const validatePassword = (password: string) => {
    const isValid = passwordConditions.every((condition) =>
      condition.regex.test(password)
    );
    setPasswordValid(isValid);
  };

  const onSubmit = handleSubmit((data) => {
    validatePassword(data.password);
    console.log(data);
  });

  return (
    <Layout>
      <div className="py-3">
        <form className="space-y-2 md:space-y-4" onSubmit={onSubmit}>
          <InputField
            control={control}
            label="Password"
            type="password"
            name="password"
            id="password"
            placeholder="Choose a new password"
            required={true}
          />
          <InputField
            control={control}
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Re enter password"
            required={true}
          />
          <div>
            <button
              type="submit"
              className={`min-w-[300px] text-white ${
                passwordValid
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-blue-700 hover:bg-blue-800"
              } focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
            >
              Submit
            </button>
          </div>
          <p className="text-xs">
            Password must:
            <ul>
              {passwordConditions.map((condition) => (
                <li
                  key={condition.id}
                  className={`flex items-center ${
                    passwordValid ? "text-green-500" : "text-red-600"
                  }`}
                >
                  <img
                    src={`./assets/${passwordValid ? "ok" : "close-red"}.svg`}
                    width="20px"
                    alt={passwordValid ? "ok" : "wrong"}
                  />
                  {condition.text}
                </li>
              ))}
            </ul>
          </p>
          <p className="text-sm font-light dark:text-gray-400">
            Already have an account?{" "}
            <Link
              to="/"
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </Layout>
  );
}
