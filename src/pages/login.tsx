import { Link } from "react-router-dom";
import InputField from "../components/Input";
import Layout from "../components/Layout";
import { useForm } from "react-hook-form";
import { loginSchema } from "../utils/validations";
import { zodResolver } from "@hookform/resolvers/zod";

export default function Login() {
  const { control, handleSubmit } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <Layout>
      <div className="py-3">
        <form className="space-y-2 md:space-y-4" onSubmit={onSubmit}>
          <InputField
            control={control}
            label="Email"
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            required={true}
          />
          <InputField
            control={control}
            label="Password"
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            required={true}
          />
          <div className="flex items-center justify-between">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <InputField
                  control={control}
                  label=""
                  type="checkbox"
                  name="remember"
                  id="remember"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                />
              </div>
              <div className="ml-1 text-sm">
                <label htmlFor="remember" className="dark:text-gray-300">
                  Remember me
                </label>
              </div>
            </div>
            <Link
              to="/forgot-password"
              className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Forgot password?
            </Link>
          </div>
          <button
            type="submit"
            className="min-w-[300px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
          <p className="text-sm font-light dark:text-gray-400">
            Don’t have an account yet?{" "}
            <Link
              to="/signup"
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </Layout>
  );
}
