/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { useState } from "react";
import signInImg from "../assets/icons/fragrence-04.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ForgetPassword = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const backgroundImg = localStorage.getItem("backgroundImage");
  const sectionStyle = {
    backgroundImage: `url(${backgroundImg})`, // Use the retrieved URL
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  const Spinner = () => {
    return (
      <div className="inline-block animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-white"></div>
    );
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {},
  });
  const submitHandler = async (event) => {
    setLoading(true);
    console.log("emaillll", event);
    localStorage.setItem("email99", event);

    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/auth/reset-password-request",
        event
      );
      if (response.data.status === "OK") {
        // Handle successful login here
        console.log("Email Sent", response);
        const token = response.data.data[0].token; // Accessing token from the first object in the data array
        console.log("Token:", token);
        localStorage.setItem("new-pass-token", token);
        navigate("/auth/email-sent");
      } else {
        // Handle login error here
        console.error("Credentials didn't match");
      }
    } catch (error) {
      // Handle errors
      console.log("errorr", error);
    }
    setLoading(false);
  };
  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <section className="bg-gray-50 dark:bg-gray-900" style={sectionStyle}>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">
          <img
            className="center w-24 h-24 moving-text"
            src={signInImg}
            alt="logo"
          />

          <h1 className="text-xl font-bold leading-tight tracking-tight mt-2 mb-4 text-gray-900 ">
            {" "}
            B&S Fragrances
          </h1>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Forgot Password
              </h1>
              <p className="border-gray-300 text-gray-500 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                We want to make sure its really you. In order to retreived
                forgotten password, enter the verified email address. We will
                send you a link to recover your account.
              </p>
              {/* <form className="space-y-4 md:space-y-6" action="#"> */}
              <br />
              <label>Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@gmail.com"
                required=""
                {...register("email", {
                  required: "Please enter your valid email address",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Please enter a valid email address",
                  },
                })}
                style={{ marginTop: "0.25rem", marginBottom: "0.25rem" }}
              />
              {errors.email && (
                <p
                  className="text-red-500 text-sm mt-2"
                  style={{ position: "absolute", marginTop: "5px" }}
                >
                  {errors.email.message}
                </p>
              )}
              <div className="flex items-center justify-between"></div>
              {/* Conditional rendering for the button */}
              <button
                type="submit"
                className="w-full text-white bg-dark-blue-color hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                disabled={loading}
              >
                {loading ? <Spinner /> : "Send Email"}
              </button>
            </div>
          </div>
        </div>
      </section>
    </form>
  );
};
// };
export default ForgetPassword;
