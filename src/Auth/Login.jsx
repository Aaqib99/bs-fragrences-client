/* eslint-disable no-unused-vars */
import { useState } from "react";
import signInImg from "../assets/icons/fragrence-04.svg";
// import BackgroundChange from "./BackgroundChange";
import { useNavigate } from "react-router-dom";
import "./logoAnimation.css";
import axios from "axios";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

// import p1 from "../assets/images/p3.jpg";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  // const [background, setBackground] = useState(null);
  const backgroundImg = localStorage.getItem("backgroundImage");
  // const [loginError, setLoginError] = useState(null);
  const backgroundhandler = () => {
    // setBackground(newBackground);
    navigate("/auth/change-background");
  };
  const handlelogin = async (e) => {
    e.preventDefault();

    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email && !password) {
      setErrorMessage("Please enter email address & password.");
      return;
    }

    if (!email) {
      setErrorMessage("Please enter your email address.");
      return;
    }

    if (!password) {
      setErrorMessage("Please enter your password.");
      return;
    }

    if (email && password) {
      setErrorMessage("");
      try {
        const response = await axios.post(
          "http://localhost:8080/api/v1/auth/signin",
          {
            // Your request data goes here
            email: email,
            password: password,
          }
        );
        console.log(response);
        // Handle the response data
        if (response.data) {
          // Handle successful login here

          console.log("Login successful", response.data);
          localStorage.setItem("token", response.data.token);
          console.log("token", response.data.token);
          localStorage.setItem("refresh_token", response.data.refreshToken);
          navigate("/");
        } else {
          setErrorMessage("Invalid credentials. Please try again.");
        }
      } catch (error) {
        console.log("errorr", error);
        setErrorMessage("Please provide valid email address & password.");
      }
    }
  };

  const signuphandler = () => {
    navigate("/auth/signup");
  };
  const forgethandler = () => {
    navigate("/auth/forgetpassword");
  };
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const sectionStyle = {
    backgroundImage: `url(${backgroundImg})`, // Use the retrieved URL
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return (
    <>
      {/* <form onSubmit={handlelogin}> */}
      <section
        className="bg-gray-50 dark:bg-gray-900 my-section"
        style={sectionStyle}
      >
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">
          <img
            className="center w-24 h-24 moving-text"
            src={signInImg}
            alt="logo"
          />

          <h1
            className="text-xl font-bold leading-tight tracking-tight mt-2 mb-4 text-gray-900 "
            style={{
              backgroundColor: "rgba(255, 255, 255, 255)",
              padding: "10px",
              borderRadius: "6px",
            }}
          >
            {" "}
            B&S Fragrances
          </h1>

          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@gmail.com"
                  required=""
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ marginTop: "0.25rem", marginBottom: "0.25rem" }}
                />
                <br />
                <label>Password:</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    onChange={(e) => setPassword(e.target.value)}
                    style={{
                      // position: "absolute",
                      top: "50%",
                      // right: "5px",
                      transform: "translateY(-50%)",
                      color: "grey",
                      fontSize: "20px",
                    }}
                  />
                  <span
                    onClick={togglePasswordVisibility}
                    className="absolute right-2 transform -translate-y-1/2 cursor-pointer"
                    style={{
                      color: "grey",
                      fontSize: "20px",
                      marginTop: "-45px",
                    }}
                  >
                    {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                  </span>
                </div>
                {errorMessage && (
                  <div
                    className="text-red-600 "
                    style={{ position: "absolute", marginTop: "-20px" }}
                  >
                    {errorMessage}
                  </div>
                )}
                {/* <br /> */}
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href=""
                    onClick={forgethandler}
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  onClick={handlelogin}
                  // type="submit"
                  className="w-full text-white bg-dark-blue-color hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign in
                </button>

                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <button onClick={signuphandler}>
                    <a className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                      Sign up
                    </a>
                  </button>
                </p>
              </form>
            </div>
          </div>
          <a href="" onClick={backgroundhandler}>
            <p
              className="leading-tight tracking-tight mt-4 mb-4 text-gray-900 "
              style={{
                backgroundColor: "rgba(255, 255, 255, 255)",
                padding: "10px",
                borderRadius: "6px",
              }}
            >
              {" "}
              Change Background
            </p>
          </a>
        </div>
      </section>
    </>
  );
};
// };
export default Login;
