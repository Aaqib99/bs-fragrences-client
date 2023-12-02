/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import signInImg from "../assets/icons/fragrence-04.svg";
import { useNavigate, useParams } from "react-router-dom";
import "./logoAnimation.css";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import axios from "axios";

const ResetPassword = () => {
  // let token;
  console.log("aqib");
  const { token } = useParams();
  console.log("tokenn", token);
  // const status = queryParams.get("status");
  // const token_received = localStorage.getItem("new-pass-token");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setNewPassword] = useState("");
  const [confirmnewpassword, setConfirmNewPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmShowPassword] = useState(false);
  const backgroundImg = localStorage.getItem("backgroundImage");
  const sectionStyle = {
    backgroundImage: `url(${backgroundImg})`, // Use the retrieved URL
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  const [validPassword, setValidPassword] = useState(false);

  // Function to validate the password format
  // const validatePassword = (password) => {
  //   const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$!]).{8,}$/;
  //   return passwordRegex.test(password);
  // };
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const togglePasswordVisibility1 = () => {
    setConfirmShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const Spinner = () => {
    return (
      <div className="inline-block animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-white"></div>
    );
  };
  const emailhandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordhandler = (event) => {
    setNewPassword(event.target.value);
  };
  const newpasswordhandler = (event) => {
    setConfirmNewPassword(event.target.value);
  };

  const passwordformhandler = async (event) => {
    event.preventDefault();
    // const newPassword = event.target.value;
    // setNewPassword(newPassword);
    // setValidPassword(validatePassword(newPassword));

    if (email && password && confirmnewpassword) {
      if (password !== confirmnewpassword) {
        setErrorMessage("Passwords do not match");
        return;
      }
      setLoading(true);
      console.log("emailyy,", email);
      const data = {
        token: token,
        email: email,
        password: password,
      };
      try {
        const response = await axios.post(
          `http://localhost:8080/api/v1/auth/reset-password`,
          data
        );
        console.log("abc", response);
        if (response.data.status === "OK") {
          // Route change on successful response
          navigate("/auth/password-successfully-updated");
        } else {
          setErrorMessage("Something went wrong. Please try again.");
        }
      } catch (error) {
        console.error("Error occurred while resetting password", error);
        setErrorMessage("Error occurred. Please try again.");
      }
    } else {
      setErrorMessage("Please fill all the fields correctly.");
    }
    setLoading(false);
  };

  useEffect(() => {
    if (token) {
      const loadData = async () => {
        setLoading(true);
        try {
          const response = await axios.get(
            `http://localhost:8080/api/v1/auth/verify-reset-token/${token}`
          );
          if (response.data.status === "OK") {
            // Proceed with additional logic after token verification
            console.log("resssssss", response);
            // Example: Display password reset window
          } else {
            console.error("Token verification failed");
          }
        } catch (error) {
          console.error("Error occurred while verifying the token", error);
          setErrorMessage("Error verifying token");
        }
        setLoading(false);
      };

      loadData();
    }
  }, []);
  return (
    <>
      {/* <form onSubmit={handlelogin}> */}
      <section className="bg-gray-50 dark:bg-gray-900" style={sectionStyle}>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">
          <img
            className="center w-24 h-24 moving-text"
            src={signInImg}
            alt="logo"
          />

          <h1 className="text-xl font-bold leading-tight tracking-tight mt-2 mb-4 text-gray-900 ">
            {" "}
            B&S Fragrancess
          </h1>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Enter Your New Password
              </h1>
              <p className="border-gray-300 text-gray-500 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                Password must include 8 characters long, UPPERCASE & lowercase
                letters, number & symbol(#$!).
              </p>
              <form className="space-y-6 md:space-y-6" action="#">
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={email}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="enter new password"
                  required=""
                  onChange={emailhandler}
                  style={{ marginTop: "0.25rem", marginBottom: "0.25rem" }}
                />
                <br />
                <label>New Password:</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    value={password}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="enter new password"
                    required=""
                    onChange={passwordhandler}
                    style={{
                      position: "absolute",
                      top: "50%",
                      // right: "10px",
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
                      // marginTop: "-45px",
                    }}
                  >
                    {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                  </span>
                </div>
                <br />
                <br />
                <label>Confirm New Password:</label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmpassword"
                    id="confirmpassword"
                    value={confirmnewpassword}
                    placeholder="confirm new password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    onChange={newpasswordhandler}
                    style={{
                      position: "absolute",
                      top: "50%",
                      // right: "10px",
                      transform: "translateY(-50%)",
                      color: "grey",
                      fontSize: "20px",
                    }}
                  />
                  <span
                    onClick={togglePasswordVisibility1}
                    className="absolute right-2 transform -translate-y-1/2 cursor-pointer"
                    style={{
                      color: "grey",
                      fontSize: "20px",
                      // marginTop: "-45px",
                    }}
                  >
                    {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                  </span>
                </div>
                {errorMessage && (
                  <div
                    className="text-red-600"
                    style={{ position: "absolute" }}
                  >
                    {errorMessage}
                  </div>
                )}
                <br />
                <button
                  onClick={passwordformhandler}
                  className="w-full text-white bg-dark-blue-color hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  style={{ marginTop: "40px" }}
                  disabled={loading}
                >
                  {loading ? <Spinner /> : "Change Password"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* </form> */}
    </>
  );
};
// };
export default ResetPassword;
