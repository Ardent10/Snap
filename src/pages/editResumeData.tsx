import InputField from "../components/Input";
import TextAreaInput from "../components/Input/textAreaInput";
import Layout from "../components/Layout";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function EditResumeData() {
  const { control, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = handleSubmit((data) => {
    console.log(data);
    navigate("/otp");
  });

  return (
    <Layout>
      <form className=" w-full py-3" onSubmit={onSubmit}>
        <div className="space-y-4 max-h-[450px] overflow-auto pl-8 pr-4">
          <h1 className="font-semibold text-lg text-blue-700">Basic Details</h1>
          <div className="flex space-x-4">
            <InputField
              control={control}
              label="First Name"
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Enter your first name"
              required={true}
            />
            <InputField
              control={control}
              label="Last Name"
              type="text"
              name="lastName"
              id="email"
              placeholder="Enter your last name"
              required={true}
            />
          </div>
          <div className="flex space-x-4">
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
              label="Phone Number"
              type="number"
              name="phoneNumber"
              id="phoneNumber"
              placeholder="Phone Number"
              required={true}
            />
          </div>

          <hr />
          <h1 className="font-semibold text-lg text-blue-700">Address</h1>
          <div className="flex space-x-4">
            <InputField
              control={control}
              label="Address Line 1"
              type="text"
              name="address1"
              id="address1"
              placeholder="Enter your address Line 1"
              required={true}
            />
            <InputField
              control={control}
              label="Address Line 2"
              type="text"
              name="address2"
              id="address2"
              placeholder="Enter your address Line 1"
            />
          </div>
          <div className="flex space-x-4">
            <InputField
              control={control}
              label="City"
              type="text"
              name="city"
              id="city"
              placeholder="Enter your city"
              required={true}
            />
            <InputField
              control={control}
              label="State"
              type="text"
              name="state"
              id="state"
              placeholder="Enter your state"
              required={true}
            />
          </div>
          <div className="flex space-x-4">
            <InputField
              control={control}
              label="Country"
              type="text"
              name="country"
              id="country"
              placeholder="Enter your country"
              required={true}
            />
            <InputField
              control={control}
              label="Pincode"
              type="text"
              name="pincode"
              id="pincode"
              placeholder="Enter your pincode"
              required={true}
            />
          </div>
          <hr />

          <h1 className="font-semibold text-lg text-blue-700">Experience</h1>
          <div className="flex space-x-4">
            <InputField
              control={control}
              label="Job Title"
              name="jobTitle"
              id="jobTitle"
              type="text"
              placeholder="Enter your job title"
              required={true}
            />
          </div>
          <div className="flex space-x-4">
            <InputField
              control={control}
              label="Company Name"
              type="text"
              name="company"
              id="company"
              placeholder="Enter your company"
              required={true}
            />
            <InputField
              control={control}
              label="Location"
              type="text"
              name="location"
              id="location"
              placeholder="Enter your location"
              required={true}
            />
          </div>
          <div className="flex space-x-4">
            <InputField
              control={control}
              label="Worked From"
              type="date"
              name="workFrom"
              id="workFrom"
              placeholder="Enter your work from date"
              required={true}
            />
            <InputField
              control={control}
              label="Worked Till"
              type="date"
              name="workTo"
              id="workTo"
              placeholder="Enter your work to date"
              required={true}
            />
          </div>
          <div className="flex space-x-4">
            <TextAreaInput
              control={control}
              label="Role Description"
              name="roleDescription"
              placeholder="Enter your role description"
              required={true}
            />
          </div>
          <hr />

          <h1 className="font-semibold text-lg text-blue-700">Education</h1>
          <div className="flex space-x-4">
            <InputField
              control={control}
              label="University Name"
              type="text"
              name="schoolOrUniversity"
              id="schoolOrUniversity"
              placeholder="Enter your school or university"
              required={true}
            />
          </div>
          <div className="flex space-x-4">
            <InputField
              control={control}
              label="Education - From"
              type="date"
              name="educationFrom"
              id="educationFrom"
              placeholder="Enter your education from date"
              required={true}
            />
            <InputField
              control={control}
              label="Education - To (Actual or Expected)"
              type="date"
              name="educationTo"
              id="educationTo"
              placeholder="Enter your education to date"
              required={true}
            />
          </div>
          <div className="flex space-x-4">
            <InputField
              control={control}
              label="Degree"
              type="text"
              name="degree"
              id="degree"
              placeholder="Enter your degree"
              required={true}
            />
            <InputField
              control={control}
              label="Overall Result (GPA)"
              type="text"
              name="overallResult"
              id="overallResult"
              placeholder="Enter your overall result (GPA)"
              required={true}
            />
          </div>

          <hr />

          <h1 className="font-semibold text-lg text-blue-700">Skill's</h1>
          <div className="flex space-x-4">
            <InputField
              control={control}
              label="Skills"
              type="text"
              name="skills"
              id="skills"
              placeholder="Enter your skills"
              required={true}
            />
          </div>

          <hr />
          <div id="url" className="space-y-4">
            <h1 className="font-semibold text-lg text-blue-700">URL's</h1>
            <div className="flex space-x-4">
              <InputField
                control={control}
                label="Website"
                type="text"
                name="website"
                id="websites"
                placeholder="Enter your websites"
                required={true}
              />
            </div>
            <div className="flex space-x-4">
              <InputField
                control={control}
                label="LinkedIn"
                type="text"
                name="linkedInUrl"
                id="linkedin"
                placeholder="Enter your LinkedIn URL"
                required={true}
              />
            </div>
            <div className="flex space-x-4">
              <InputField
                control={control}
                label="GitHub"
                type="text"
                name="github"
                id="linkedInUrl"
                placeholder="Enter your LinkedIn URL"
                required={true}
              />
            </div>
            <div className="flex space-x-4">
              <InputField
                control={control}
                label="Twitter"
                type="text"
                name="twitter"
                id="linkedInUrl"
                placeholder="Enter your LinkedIn URL"
                required={true}
              />
            </div>
          </div>
        </div>
        <div className="px-6 py-2">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
          >
            Save
          </button>
        </div>
      </form>
    </Layout>
  );
}
