import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import axios from "axios";

import ScrollToTop from "../../components/ScrollToTop";
import formLoadingAnimation from "../../../lottie/Animation - form loading.json";

import { BiSolidError } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Signup = () => {
  const [viewPassword, setViewPassword] = useState(false);
  const [viewConfirmPassword, setViewConfirmPassword] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const togglePasswordVisibility = () => {
    setViewPassword(!viewPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setViewConfirmPassword(!viewConfirmPassword);
  };

  const fullNameInputHandler = (e) => {
    setSignupData((prevState) => {
      return { ...prevState, fullName: e.target.value };
    });
  };
  const emailInputHandler = (e) => {
    setSignupData((prevState) => {
      return { ...prevState, email: e.target.value };
    });
  };

  const passwordInputHandler = (e) => {
    setSignupData((prevState) => {
      return { ...prevState, password: e.target.value };
    });
  };

  const confirmPasswordInputHandler = (e) => {
    setSignupData((prevState) => {
      return { ...prevState, confirmPassword: e.target.value };
    });
  };

  const SubmitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:8080/user/signup",
        signupData
      );

      if (response.status === 200) {
        setSuccessMsg(response.data.message);
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 3000);

        setTimeout(() => {
          navigate("/SignIn");
        }, 3000);
      }
      setSignupData({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      const errors = error.response?.data?.errors;
      if (errors && Array.isArray(errors)) {
        setErrorMsg(errors.map((err) => err.msg).join(", "));
      } else {
        setErrorMsg(error.response.data.message);
      }
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    } finally {
      setIsLoading(false);
    }
  };

  const disabledButton =
    signupData.fullName === "" ||
    signupData.email === "" ||
    signupData.password === "" ||
    signupData.confirmPassword === "";
  return (
    <Fragment>
      <ScrollToTop />
      <div className="max-[767px]:w-[90%] m-auto md:w-[60%] font-serif lg:w-[70%]">
        <div className="max-[767px]:my-4 flex items-center max-[767px]:gap-2 md:gap-3 md:my-6 lg:hidden">
          <img
            className="max-[767px]:w-[2rem] md:w-[3rem] lg:w-[3rem]"
            src="https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711542176/FrambegTech/HOME%20PAGE/logo_ddmofy.png"
            alt="logo"
          />
          <h1 className="max-[767px]:text-xl font-bold md:text-2xl">
            Frambeg Tech
          </h1>
        </div>

        <div className="lg:flex lg:gap-24 lg:my-12">
          <div className="hidden lg:block justify-center items-center mt-[4rem]">
            <div className="max-[767px]:my-4 flex items-center max-[767px]:gap-2 md:gap-3 md:my-6">
              <img
                className="lg:w-[2rem]"
                src="https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711542176/FrambegTech/HOME%20PAGE/logo_ddmofy.png"
                alt="logo"
              />
              <h1 className="max-[767px]:text-xl font-bold md:text-2xl">
                Frambeg Tech
              </h1>
            </div>
            <div className="grid gap-4">
              <div>
                <h1 className="flex items-center gap-3">
                  <FaRegCheckCircle className="text-blue-600" />
                  <span className="opacity-95">Get started quickly</span>
                </h1>
                <p className="opacity-70 text-sm">
                  Integrate with developer-friendly APIs or choose low-code or
                  pre-built solutions
                </p>
              </div>
              <div>
                <h1 className="flex items-center gap-3">
                  <FaRegCheckCircle className="text-blue-600" />
                  <span className="opacity-95">Support any business model</span>
                </h1>
                <p className="opacity-70 text-sm">
                  E-commerce, subscriptions, SaaS platforms, marketplaces, and
                  more—all within a unified platform.
                </p>
              </div>
              <div>
                <h1 className="flex items-center gap-3">
                  <FaRegCheckCircle className="text-blue-600" />
                  <span className="opacity-95">
                    Join millions of businesses
                  </span>
                </h1>
                <p className="opacity-70 text-sm">
                  Stripe is trusted by ambitious startups and enterprises of
                  every size.
                </p>
              </div>
            </div>

            <div className="max-[767px]:mb-8 max-[767px]:mt-4 flex max-[767px]:gap-3 opacity-80 md:gap-4 md:mt-6 md:text-xl lg:text-sm">
              <h1 className=" cursor-pointer">@ Frambeg-Tech</h1>
              <h1>Contact</h1>
              <h1>Privacy & terms</h1>
            </div>
          </div>
          <form onSubmit={SubmitHandler} className="shadow-lg border-2">
            <div className="max-[767px]:px-4 max-[767px]:py-8 grid justify-center md:px-6 lg:px-16">
              <h1 className="max-[767px]:text-[1.38rem] max-[767px]:mb-4 font-bold md:text-2xl md:my-6 lg:text-xl">
                Create your FrambegTech account
              </h1>
              {error && (
                <div className=" capitalize font-bold border-2 border-red-600 mb-3 text-center lg:w-[25rem]">
                  <div className="flex justify-center bg-red-600 text-white p-2 md:p-4 lg:p-2">
                    <BiSolidError className="text-center max-[767px]: md:text-2xl lg:text-xl" />
                  </div>
                  <p className="p-2 text-sm md:text-lg">{errorMsg}</p>
                </div>
              )}
              {success && (
                <div className=" capitalize font-bold border-2 border-green-600 mb-3 text-center lg:w-[25rem]">
                  <div className="flex justify-center bg-green-600 text-white p-2 md:p-4 lg:p-2">
                    <FaCircleCheck className="text-center max-[767px]: md:text-2xl lg:text-xl" />
                  </div>
                  <p className="p-2 text-sm md:text-lg">{successMsg}</p>
                </div>
              )}
              <div className="max-[767px]:w-[20rem] grid max-[767px]:gap-8 md:gap-10 lg:w-[25rem] lg:gap-4">
                <div className="grid gap-1 md:gap-2 lg:gap-1">
                  <label>Full Name</label>
                  <input
                    className="bg-grayDark focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-sm border-2 p-2 md:p-4 lg:p-2"
                    type="text"
                    name="fullName"
                    placeholder="Please Enter Your First and Last Email"
                    onChange={fullNameInputHandler}
                    value={signupData.fullName}
                    required
                  />
                </div>

                <div className="grid gap-1 md:gap-2 lg:gap-1">
                  <label>Email</label>
                  <input
                    className="bg-grayDark focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-sm border-2 p-2 md:p-4 lg:p-2"
                    type="email"
                    name="email"
                    placeholder="Please Enter Your Email"
                    onChange={emailInputHandler}
                    value={signupData.email}
                    required
                  />
                </div>

                <div className="relative grid gap-1 md:gap-2 lg:gap-1">
                  <label>Password</label>
                  <input
                    className="bg-grayDark focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-sm border-2 p-2 md:p-4 lg:p-2"
                    type={viewPassword ? "text" : "password"}
                    name="password"
                    placeholder="Please Enter Your Password"
                    onChange={passwordInputHandler}
                    value={signupData.password}
                    required
                  />
                  <div
                    onClick={togglePasswordVisibility}
                    className="opacity-50 hover:opacity-100 absolute right-4 max-[767px]:bottom-3 cursor-pointer md:bottom-4 flex items-center text-blue-600 lg:bottom-3"
                  >
                    {viewPassword ? (
                      <FaEyeSlash className="w-[1.5rem] h-[1.5rem] md:w-[2rem] md:h-[2rem] lg:w-[1.2rem] lg:h-[1.2rem]" />
                    ) : (
                      <FaEye className="w-[1.5rem] h-[1.5rem] md:w-[2rem] md:h-[2rem] lg:w-[1.2rem] lg:h-[1.2rem]" />
                    )}
                  </div>
                </div>

                <div className="relative grid gap-1 md:gap-2 lg:gap-1">
                  <label>Confirm Password</label>
                  <input
                    className="bg-grayDark focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-sm border-2 p-2 md:p-4 lg:p-2"
                    type={viewConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="Please confirm Your Password"
                    onChange={confirmPasswordInputHandler}
                    value={signupData.confirmPassword}
                    required
                  />
                  <div
                    onClick={toggleConfirmPasswordVisibility}
                    className="opacity-50 hover:opacity-100 absolute right-4 max-[767px]:bottom-3 cursor-pointer md:bottom-4 flex items-center text-blue-600 lg:bottom-3"
                  >
                    {viewConfirmPassword ? (
                      <FaEyeSlash className="w-[1.5rem] h-[1.5rem] md:w-[2rem] md:h-[2rem] lg:w-[1.2rem] lg:h-[1.2rem]" />
                    ) : (
                      <FaEye className="w-[1.5rem] h-[1.5rem] md:w-[2rem] md:h-[2rem] lg:w-[1.2rem] lg:h-[1.2rem]" />
                    )}
                  </div>
                </div>
              </div>
              <div className="max-[767px]:my-10 grid max-[767px]:gap-5 md:my-12 md:gap-8 lg:w-[25rem]">
                <h1 className="opacity-70 max-[767px]:text-sm lg:text-sm">
                  <span>
                    <input
                      type="checkbox"
                      className="max-[767px]:mr-2 md:mr-4 md:w-[1.3rem] md:h-[1.3rem] lg:w-[0.8rem] lg:h-[0.8rem] lg:mr-2"
                    />
                  </span>
                  Get emails from frambegTech about product updates, industry
                  news, and discounts. You can
                  <span className="text-blue-600 cursor-pointer hover:text-blue-800">
                    {" "}
                    unsubscribe{" "}
                  </span>{" "}
                  at any time.
                  <span className="text-blue-600 cursor-pointer hover:text-blue-800">
                    {" "}
                    Privacy Policy
                  </span>
                </h1>

                <button
                  type="submit"
                  className={`max-[767px]:p-2 max-[767px]:text-xl font-bold border-none active:bg-blue-600 flex justify-center items-center w-full bg-blue-600 text-white border-2 hover:bg-blue-700 md:text-xl md:p-3 lg:text-xl lg:p-2 ${
                    disabledButton
                      ? "opacity-50 curser-not-allowed"
                      : "opacity-100"
                  }`}
                  disabled={disabledButton}
                >
                  {isLoading ? (
                    <Lottie
                      className="w-[3.4rem] lg:w-[3.4rem]"
                      animationData={formLoadingAnimation}
                      loop={true}
                    />
                  ) : (
                    " Create account"
                  )}
                </button>
              </div>
            </div>
            <h1 className="flex justify-center gap-2 text-center bg-blue-50 max-[767px]:p-4 md:text-xl md:p-4 lg:text-sm">
              Already have an account?
              <Link
                to="/SignIn"
                className="text-blue-600 cursor-pointer hover:text-green-600"
              >
                Sign in
              </Link>
            </h1>
          </form>
        </div>

        <div className="max-[767px]:mb-8 max-[767px]:mt-4 flex max-[767px]:gap-3 opacity-80 md:gap-4 md:mt-6 md:text-xl lg:text-sm lg:hidden">
          <h1>@ Frambeg-Tech</h1>
          <h1>Contact</h1>
          <h1>Privacy & terms</h1>
        </div>
      </div>
    </Fragment>
  );
};

export default Signup;
