import { Fragment, useState } from "react";
import axios from "axios";

import { BiSolidError } from "react-icons/bi";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

// import ResetPassword from "./authentication/ResetPassword";
// import Modal from "../../components/model/Modal";

const Login = () => {
  const [viewPassword, setViewPassword] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [successMsg, seSuccessMsg] = useState("");

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const togglePasswordVisibility = () => {
    setViewPassword(!viewPassword);
  };

  const emailInputHandler = (e) => {
    setLoginData((prevState) => {
      return { ...prevState, email: e.target.value };
    });
  };

  const passwordInputHandler = (e) => {
    setLoginData((prevState) => {
      return { ...prevState, password: e.target.value };
    });
  };

  const SubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/user/login",
        loginData
      );

      if (response.status === 200) {
        setLoginData({
          email: "",
          password: "",
        });
      }
      seSuccessMsg(response.data.message);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } catch (error) {
      setErrorMsg(error.response.data.message);

      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };

  return (
    <Fragment>
      <div className="absolute flex justify-center items-center">
        <img
          src="https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712436345/PORTFOLIO/project_2_lef2ro.png"
          alt="Frambeg-Tech"
          className="max-[767px]:h-[50rem]  block"
        />
        <div className="absolute inset-0 backdrop-blur-[2px]" />
        {error && (
          <div className="font-bold capitalize border-2 border-red-600 mb-3 text-center">
            <div className="flex justify-center bg-red-600 text-white p-2 md:p-4 lg:p-2">
              <BiSolidError className="text-center max-[767px]: md:text-2xl lg:text-xl" />
            </div>
            <p className="p-2 text-sm md:text-lg">{errorMsg}</p>
          </div>
        )}
        {success && (
          <div className="font-bold capitalize border-2 border-green-600 mb-3 text-center">
            <div className="flex justify-center bg-green-600 text-white p-2 md:p-4 lg:p-2">
              <BiSolidError className="text-center max-[767px]: md:text-2xl lg:text-xl" />
            </div>
            <p className="p-2 text-sm md:text-lg">{successMsg}</p>
          </div>
        )}
        <form
          onSubmit={SubmitHandler}
          className="absolute font-serif bg-white p-4"
        >
          <div>
            <h1 className="max-[767px]:text-xl font-bold md:text-2xl">
              Sign in to your account
            </h1>

            <div className="grid max-[767px]:gap-6">
              <div className="grid">
                <label className="font-bold">email</label>
                <input
                  className="bg-grayDark focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-sm border-2 p-2 md:p-4 lg:p-2"
                  type="email"
                  name="email"
                  placeholder="Please Enter Your Email"
                  onChange={emailInputHandler}
                  value={loginData.email}
                  required
                />
              </div>

              <div className="relative  grid items-center">
                <span className="flex justify-between">
                  <label className="font-bold">Password</label>
                  <h1>Forget your Password?</h1>
                </span>

                <input
                  className="bg-grayDark focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-sm border-2 p-2 md:p-4 lg:p-2"
                  type={viewPassword ? "text" : "password"}
                  name="password"
                  placeholder="Please Enter Your Password"
                  onChange={passwordInputHandler}
                  value={loginData.password}
                  required
                />
                <div
                  onClick={togglePasswordVisibility}
                  className="absolute right-4 flex items-center text-blue-600"
                >
                  {viewPassword ? (
                    <FaEyeSlash className="w-[1.5rem] h-[1.5rem] md:w-[2rem] md:h-[2rem] lg:w-[1.5rem] lg:h-[1.5rem]" />
                  ) : (
                    <FaEye className="w-[1.5rem] h-[1.5rem] md:w-[2rem] md:h-[2rem] lg:w-[1.5rem] lg:h-[1.5rem]" />
                  )}
                </div>
              </div>
              <div className="flex gap-4">
                <input type="checkbox" />
                <label>Stay signed in for a week</label>
              </div>
            </div>

            <button
              type="submit"
              className="max-[767px]:p-2 max-[767px]:text-2xl font-bold border-none active:bg-blue-600 flex justify-center items-center w-full bg-blue-600 text-white border-2 hover:bg-blue-700 md:text-5xl lg:text-2xl"
            >
              Login
            </button>

            <div className="flex justify-center items-center">
              <h1 className="cursor-pointer hover:text-blue-600 md:text-2xl lg:text-xl">
                New to Frambeg Tech Create account
              </h1>
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Login;

{
  /* <div className="flex justify-center items-center max-[767px]:gap-2 md:gap-3 ">
                  <img
                    className="max-[767px]:w-[4rem] md:w-[5rem] lg:w-[3rem]"
                    src="https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711542176/FrambegTech/HOME%20PAGE/logo_ddmofy.png"
                  />
                  <h1 className="max-[767px]:text-2xl font-bold md:text-4xl">
                    Frambeg Tech
                  </h1>
                </div> */
}
