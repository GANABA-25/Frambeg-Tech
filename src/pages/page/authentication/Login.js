import { Fragment, useState } from "react";
import axios from "axios";

import { BiSolidError } from "react-icons/bi";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

// import ResetPassword from "./authentication/ResetPassword";
// import Modal from "../../components/model/Modal";

import { FcGoogle } from "react-icons/fc";

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
      <div className="w-[90%] m-auto flex justify-center lg:items-center">
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
        <form onSubmit={SubmitHandler} className="font-serif">
          <h1 className="max-[767px]:text-xl max-[767px]:my-4 font-bold md:text-2xl md:my-8">
            Frambeg-Tech
          </h1>

          <div className="border-2 bg-gray-300 p-8 grid gap-8 shadow-lg">
            <h1 className="max-[767px]:text-xl font-bold md:text-2xl">
              Sign in to your account
            </h1>

            <div className=" grid max-[767px]:gap-6  md:gap-12">
              <div className="grid max-[767px]:gap-2 md:gap-4">
                <label className="font-bold">Email</label>
                <input
                  className=" bg-grayDark focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-sm border-2 p-2 md:p-4 lg:p-2"
                  type="email"
                  name="email"
                  placeholder="Please Enter Your Email"
                  onChange={emailInputHandler}
                  value={loginData.email}
                  required
                />
              </div>

              <div className="relative grid max-[767px]:gap-2 md:gap-4 items-center">
                <span className="flex justify-between">
                  <label className="font-bold">Password</label>
                  <h1 className="text-blue-600">Forget your Password?</h1>
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
                <label className="opacity-70">Stay signed in for a week</label>
              </div>
            </div>

            <button
              type="submit"
              className="max-[767px]:p-2 max-[767px]:text-xl font-bold border-none active:bg-blue-600 flex justify-center items-center w-full bg-blue-600 text-white border-2 hover:bg-blue-700 md:p-3 md:text-3xl lg:text-2xl"
            >
              Sign in
            </button>

            <h1 className="cursor-pointer text-center hover:text-blue-600 md:text-2xl lg:text-xl">
              Sign in with Google Account
            </h1>

            {/* <div className="max-[767px]:text-[0.7rem] max-[767px]:p-2 grid justify-center items-center bg-blue-50 max-[767px]:m-2">
              <h1 className="flex gap-2 cursor-pointer md:text-2xl lg:text-xl">
                <span className="opacity-80">New to Frambeg Tech</span>
                <span className="text-blue-600 hover:text-red-600">
                  Create account
                </span>
              </h1>
            </div> */}
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
                </div>

                 <h1>
            On a shared computer, make sure to sign out when you're done.
            Thishelps keep your account secure from other people using your
            device.
          </h1>
                 */
}
