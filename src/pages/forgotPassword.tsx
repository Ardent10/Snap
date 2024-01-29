import InputField from "../components/Input";
import Layout from "../components/Layout";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { forgotPasswordSchema } from "../utils/validations";
import { zodResolver } from "@hookform/resolvers/zod";

export default function ForgotPassword() {
  const { control, handleSubmit } = useForm({
    resolver: zodResolver(forgotPasswordSchema),
  });
  const navigate = useNavigate();
  const onSubmit = handleSubmit((data) => {
    if (data.email) {
      navigate("/otp",{state:{email:data.email}});
    }
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
            placeholder="Enter your Email"
            required={true}
          />

          <button
            type="submit"
            className="min-w-[300px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Send Code
          </button>

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
