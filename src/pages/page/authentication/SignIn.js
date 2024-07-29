import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import axios from "axios";

import { BiSolidError } from "react-icons/bi";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

import ScrollToTop from "../../components/ScrollToTop";
import formLoadingAnimation from "../../../lottie/Animation - form loading.json";

const SignIn = () => {
  const [viewPassword, setViewPassword] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

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
    setIsLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:8080/user/login",
        loginData
      );

      if (response.status === 200) {
        navigate("/");
        setLoginData({
          email: "",
          password: "",
        });
      }
    } catch (error) {
      const errors = error.response?.data?.errors;
      if (errors) {
        setErrorMsg(error.response.data.message);
      } else {
        setErrorMsg("An error occurred, Try again later");
      }
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    } finally {
      setIsLoading(false);
    }
  };
  const disableButton = loginData.email === "" || loginData.password === "";
  return (
    <Fragment>
      <ScrollToTop />
      <div className="flex justify-center lg:items-center font-serif">
        <form onSubmit={SubmitHandler}>
          <h1 className="max-[767px]:text-xl max-[767px]:my-4 font-bold md:text-2xl md:my-8 lg:text-xl">
            Frambeg-Tech
          </h1>
          <div className="border-2">
            <div className=" p-8 grid gap-8 shadow-lg">
              <h1 className="max-[767px]:text-xl font-bold md:text-2xl lg:text-xl">
                Sign in to your account
              </h1>
              {error && (
                <div className="font-bold capitalize border-2 border-red-600 text-center">
                  <div className="flex justify-center bg-red-600 text-white p-2 md:p-4 lg:p-2">
                    <BiSolidError className="text-center max-[767px]: md:text-2xl lg:text-xl" />
                  </div>
                  <p className="p-2 text-sm md:text-lg">{errorMsg}</p>
                </div>
              )}
              <div className="max-[767px]:w-[18rem] grid max-[767px]:gap-6 md:gap-12 lg:gap-6 lg:w-[30rem]">
                <div className="grid max-[767px]:gap-2 md:gap-4">
                  <label className="font-bold max-[767px]:text-[0.8rem] lg:text-[0.8rem]">
                    Email
                  </label>
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

                <div className="relative grid max-[767px]:gap-2 md:gap-4 items-center">
                  <span className="max-[767px]:text-[0.8rem] flex justify-between lg:text-[0.8rem]">
                    <label className="font-bold ">Password</label>
                    <Link
                      to="/ResetPasswordEmailVerification"
                      className="text-blue-600 hover:text-black cursor-pointer"
                    >
                      Forget your Password?
                    </Link>
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
                    className="absolute opacity-50 hover:opacity-100 right-4 bottom-3 flex items-center text-blue-600"
                  >
                    {viewPassword ? (
                      <FaEyeSlash className="w-[1.5rem] h-[1.5rem] md:w-[2rem] md:h-[2rem] lg:w-[1.2rem] lg:h-[1.2rem]" />
                    ) : (
                      <FaEye className="w-[1.5rem] h-[1.5rem] md:w-[2rem] md:h-[2rem] lg:w-[1.2rem] lg:h-[1.2rem]" />
                    )}
                  </div>
                </div>
                <div className="flex gap-2">
                  <input className="w-[1rem]" type="checkbox" />
                  <label className="opacity-70">
                    Stay signed in for a week
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className={`max-[767px]:p-2 max-[767px]:text-xl font-bold border-none active:bg-blue-600 flex justify-center items-center w-full bg-blue-600 text-white border-2 hover:bg-blue-700 md:p-3 md:text-3xl lg:p-2 lg:text-xl ${
                  disableButton
                    ? "opacity-50 cursor-not-allowed"
                    : "opacity-100"
                }`}
                disabled={disableButton}
              >
                {isLoading ? (
                  <div className="flex justify-center ">
                    <Lottie
                      className="w-[3.4rem]"
                      animationData={formLoadingAnimation}
                      loop={true}
                    />
                  </div>
                ) : (
                  "Sign in"
                )}
              </button>

              <h1 className="cursor-pointer text-center hover:text-blue-600 md:text-2xl lg:text-sm">
                Sign in with Google
              </h1>
            </div>
            <div className="max-[767px]:text-[0.7rem] max-[767px]:p-2 grid justify-center items-center bg-blue-50 md:p-4">
              <h1 className="flex gap-2 cursor-pointer md:text-2xl lg:text-sm">
                <span className="opacity-80">New to Frambeg Tech</span>
                <Link
                  to="/Signup"
                  className="text-blue-600 hover:text-green-600"
                >
                  Create account
                </Link>
              </h1>
            </div>
          </div>
        </form>
      </div>
      <div className="font-serif max-[767px]:my-8 max-[767px]:w-[82%] m-auto md:w-[62%] md:my-8 lg:w-[36%]">
        <div className="max-[767px]:p-4 border-2 opacity-80 md:p-4 md:text-xl lg:text-sm">
          <h1>
            On a shared computer, make sure to sign out when you're done.
            Thishelps keep your account secure from other people using your
            device.
          </h1>
        </div>

        <div className="max-[767px]:mt-4 flex max-[767px]:gap-3 opacity-80 md:gap-4 md:mt-6 md:text-xl lg:text-sm">
          <h1>@ Frambeg-Tech</h1>
          <h1>Contact</h1>
          <h1>Privacy & terms</h1>
        </div>
      </div>
    </Fragment>
  );
};

export default SignIn;
