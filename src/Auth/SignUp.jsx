import { useForm } from "react-hook-form";
import signUpImg from "../assets/icons/fragrence-04.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./logoAnimation.css";
import axios from "axios";

// const roles = {
//   role: "ADMIN",
//   description: "Admin role",
// };
const SignUp = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const backgroundImg = localStorage.getItem("backgroundImage");
  const sectionStyle = {
    backgroundImage: `url(${backgroundImg})`, // Use the retrieved URL
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  const termconditionclick = () => {
    navigate("/terms-and-conditions");
  };
  const {
    register,
    handleSubmit,
    // initialValues,
    // formState: { errors, isSubmitSuccessful },
  } = useForm({
    defaultValues: {},
  });

  const loginhandler = () => {
    navigate("/auth/signin");
  };

  const submitHandler = async (event) => {
    // event.preventDefault();
    // let companyTemp = { ...event.company, faxNumber: "12324" };

    let temp = {
      ...event,
      // roles: roles,
      // initialValues: initialValues,
      // company: companyTemp,
      image: "aaqib-profile",
    };

    // temp = {};
    console.log("temp-apiii", temp);
    console.log(loading);

    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:8080/api/v1/auth/signup",
        temp
      );
      // console.log("resss", response);
      // Handle the response data
      if (response.data.status === "OK") {
        // Handle successful login here
        console.log("Signup successful", response);
        console.log("First Name", response.data.data[0].firstName);
        navigate("/auth/signin");
      } else {
        // Handle login error here
        console.error("Credentials didn't match");
      }
    } catch (error) {
      // Handle errors
      console.log("errorr", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <section className="bg-gray-50 dark:bg-gray-900" style={sectionStyle}>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
          <img
            className="center w-24 h-24 mr-2 mt-4 moving-text"
            src={signUpImg}
            alt="logo"
          />
          <h1 className="text-xl font-bold leading-tight tracking-tight mt-2 mb-4 text-gray-900 ">
            {" "}
            B&S Fragrances
          </h1>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create an account
              </h1>
              {/* <form className="space-y-4 md:space-y-6" action="#"> */}
              <div>
                <label
                  htmlFor="first-name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  {...register(`firstName`, {
                    required: true,
                  })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="enter first name"
                  // required=""
                />
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="last-name"
                  {...register(`lastName`, {
                    required: true,
                  })}
                  id="last-name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="enter last name"
                  // required=""
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  {...register(`email`, {
                    required: true,
                  })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  // required=""
                />
              </div>
              <div>
                <label
                  htmlFor="mobilenumber"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Mobile Number
                </label>
                <input
                  type="number"
                  name="phone-number"
                  {...register(`phoneNumber`, {
                    required: true,
                  })}
                  id="mobile-number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="enter mobile number"
                  // required=""
                />
              </div>

              <div>
                <label
                  htmlFor="gender"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Gender
                </label>
                <input
                  type="text"
                  name="gender"
                  {...register(`gender`, {
                    required: true,
                  })}
                  id="gender"
                  placeholder="enter your gender"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  // required=""
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  name="company-name"
                  {...register(`company.name`, {
                    required: true,
                  })}
                  id="company-name"
                  placeholder="enter your company name i-e Google, Ibex"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  // required=""
                />
              </div>
              <div>
                <label
                  htmlFor="company-url"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Company Url
                </label>
                <input
                  type="text"
                  name="company-url"
                  id="company-url"
                  {...register(`company.website`, {
                    required: true,
                  })}
                  placeholder="enter your company url i-e google.com, ibex.com"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  // required=""
                />
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  {...register(`address.country`, {
                    required: true,
                  })}
                  id="address"
                  placeholder="enter your complete address"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  // required=""
                />
              </div>
              <div>
                <label
                  htmlFor="current-password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="current-password"
                  name="currentpassword"
                  {...register(`password`, {
                    required: true,
                  })}
                  id="current-password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  // required=""
                />
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm password
                </label>
                <input
                  type="confirm-password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  // required=""
                />
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    // required=""
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="terms"
                    className="font-light text-gray-500 dark:text-gray-300"
                  >
                    I accept the{" "}
                    <a
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      onClick={termconditionclick}
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-white  bg-dark-blue-color hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Create an account
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <button onClick={loginhandler}>
                  <a className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                    Login here
                  </a>
                </button>
              </p>
              {/* </form> */}
            </div>
          </div>
        </div>
      </section>
    </form>
  );
};

export default SignUp;
