import { useForm, Controller } from "react-hook-form";
import Layout from "../components/Layout";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

export default function OTP() {
  const [activeOtpIndex, setActiveOtpIndex] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  const { control, handleSubmit, setValue, getValues } = useForm();

  useEffect(() => {
    inputRef?.current?.focus();
  }, [activeOtpIndex]);

  const handleInputChange = (
    { target }: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = target.value;
    if (!value) setActiveOtpIndex(index - 1);
    else setActiveOtpIndex(index + 1);

    setValue(`otp[${index}]`, value.substring(value.length - 1));
  };

  const handleOnKeyDown = (
    { key }: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (key === "Backspace" && index > 0) {
      // Check if the current input is empty, move to the previous input
      if (!getValues(`otp[${index}]`)) {
        setActiveOtpIndex(index - 1);
      }
    }
  };

  const onSubmit = handleSubmit((data) => {
    console.log("Submitted OTP:", data.otp.join(""));
    navigate("/reset-password");
  });

  return (
    <Layout>
      <div className="relative px-6 py-12 mx-auto w-full max-w-lg rounded-2xl">
        <div className="mx-auto flex w-full max-w-md flex-col space-y-4">
          <div className="flex flex-col items-center justify-center text-center space-y-2">
            <div className="flex flex-row text-sm font-medium text-white">
              <p>We have sent a code to your email {email}</p>
            </div>
          </div>

          <div>
            <form onSubmit={onSubmit}>
              <div className="flex flex-col space-y-4">
                <div className="flex flex-row items-center justify-evenly mx-auto w-full max-w-xs">
                  {new Array(4).fill("").map((_, index) => (
                    <div key={index} className="w-12 h-12">
                      <Controller
                        name={`otp[${index}]`}
                        control={control}
                        render={({ field }) => (
                          <input
                            {...field}
                            ref={index == activeOtpIndex ? inputRef : null}
                            className="w-full h-full flex flex-col text-black items-center justify-center text-center px-2 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                            type="text"
                            value={field.value}
                            maxLength={1}
                            onKeyDown={(e) => handleOnKeyDown(e, index)}
                            onChange={(e) => handleInputChange(e, index)}
                          />
                        )}
                      />
                    </div>
                  ))}
                </div>

                <div className="flex flex-col space-y-2">
                  <div>
                    <button
                      type="submit"
                      className="min-w-[300px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Verify account
                    </button>
                  </div>

                  <div className="flex flex-row items-center justify-center text-center text-sm  space-x-1 text-white">
                    <p>Didn't receive code?</p>{" "}
                    <Link
                      className="flex flex-row items-center font-medium text-white hover:underline"
                      to="/"
                    >
                      Resend
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
