import { useState, useEffect } from "react";
import { hamburger } from "../assets/icons";
import { fragrencelogo } from "../assets/images";
import { navLinks } from "../constants";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Nav = () => {
  const navigate = useNavigate();
  const [authorized, setAuthorized] = useState(
    localStorage.getItem("token") ? true : false
  );

  const [firstname, setFirstName] = useState(null);
  const [lastname, setLastName] = useState(null);

  const loginhandler = () => {
    navigate("/auth/signin");
  };
  const signuphandler = () => {
    navigate("/auth/signup");
  };
  const logoutHandler = () => {
    localStorage.removeItem("authorized");
    localStorage.removeItem("token");
    localStorage.removeItem("refresh_token");
    setAuthorized(false);

    // console.log("after logout", localStorage.getItem("lastName"));

    navigate("/");
  };
  const fetchUserDetails = async (token) => {
    console.log("calling fetchUserDetails", token);
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    axios
      .get("http://localhost:8080/api/v1/user/get", { headers: headers })
      .then((response) => {
        console.log("resssssssss", response);
        console.log("firstttt", response.data.data[0].firstName);
        setFirstName(response.data.data[0].firstName);
        setLastName(response.data.data[0].lastName);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };
  useEffect(() => {
    if (authorized) {
      const token = localStorage.getItem("token");
      fetchUserDetails(token);
    }
  }, [authorized]);

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={fragrencelogo}
            alt="logo"
            width={229}
            height={89}
            className="m-0 w-[229px] h-[89px]"
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {!authorized && (
          <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
            <button onClick={loginhandler}>
              <a>Sign in</a>
            </button>
            {/* {userDetails} */}
            <span>/</span>
            <button onClick={signuphandler}>
              <a>Sign Up</a>
            </button>
          </div>
        )}

        {authorized && (
          <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
            <a className="mt-2">{firstname}</a>
            <a className="mt-2">{lastname}</a>
            {/* <span>/</span> */}
            <a className="mt-2"></a>
            <button
              onClick={logoutHandler}
              // className="bg-yellow-600 text-white font-bold py-2 px-4 rounded"
              style={{
                backgroundColor: "#D9BB66",
                color: "white",
                fontWeight: "bold",
                padding: "10px 20px",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          </div>
        )}
        {/* {userDetails} */}
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamburger icon" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
