/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
// import { useState } from "react";
import signInImg from "../assets/icons/fragrence-04.svg";
import emailsenticon from "../assets/images/emailsenticon.png";

const EmailSent = () => {
  const backgroundImg = localStorage.getItem("backgroundImage");
  const sectionStyle = {
    backgroundImage: `url(${backgroundImg})`, // Use the retrieved URL
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return (
    <>
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
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8 flex flex-col items-center">
              <img className="w-32 h-32" src={emailsenticon} alt="emailsent" />
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Update link it's on the way
              </h1>
              <p className="border-gray-300 text-gray-500 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                For security reasons, we've sent you an email that contains a
                link to update your password.
              </p>
              <p className="border-gray-300 text-gray-500 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                Please check your email and click reset password button.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* </form> */}
    </>
  );
};
// };
export default EmailSent;
