/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import signInImg from "../assets/icons/fragrence-04.svg";
import passwordupdate from "../assets/images/passwordupdate.png";

const PasswordUpdated = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const backgroundImg = localStorage.getItem("backgroundImage");
  const sectionStyle = {
    backgroundImage: `url(${backgroundImg})`, // Use the retrieved URL
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  const loginagain = () => {
    // localStorage.removeItem("authorized");
    // localStorage.removeItem("token");
    // localStorage.removeItem("refresh_token");
    navigate("/auth/signin");
  };
  const Spinner = () => {
    return (
      <div className="inline-block animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-white"></div>
    );
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
              <img className="w-32 h-32" src={passwordupdate} alt="emailsent" />
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                That's Great.
              </h1>
              <p className="border-gray-300 text-gray-500 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                Your password have been updated successfully.
              </p>
              <p className="border-gray-300 text-gray-500 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                Please login with recent password you updated.
              </p>
              <div className="flex items-center justify-between"></div>
              {/* Conditional rendering for the button */}
              <button
                onClick={loginagain}
                type="submit"
                className="w-full mx-auto text-white bg-dark-blue-color hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                disabled={loading}
              >
                {loading ? <Spinner /> : "Login Now"}
              </button>
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>
      {/* </form> */}
    </>
  );
};
// };
export default PasswordUpdated;
