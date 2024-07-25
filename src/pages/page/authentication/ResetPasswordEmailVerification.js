import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { BiSolidError } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

import ScrollToTop from "../../components/ScrollToTop";

const ResetPasswordEmailVerification = () => {
  const [viewPassword, setViewPassword] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [successMsg, seSuccessMsg] = useState("");

  const [loginData, setLoginData] = useState({
    email: "",
  });

  const emailInputHandler = (e) => {
    setLoginData((prevState) => {
      return { ...prevState, email: e.target.value };
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
      <ScrollToTop />
      <div className="max-[767px]:w-[90%] m-auto grid justify-center lg:items-center font-serif md:w-[60%] lg:w-screen lg:h-screen">
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
        <h1 className="max-[767px]:text-xl max-[767px]:my-4 font-bold md:text-2xl md:my-8 lg:text-xl">
          Frambeg-Tech
        </h1>
        <form onSubmit={SubmitHandler} className="border-2 shadow-2xl">
          <div className=" max-[767px]:p-4 grid gap-8 md:p-4 lg:p-8">
            <div className="grid max-[767px]:gap-2 md:my-4 md:gap-4 lg:w-[25rem]">
              <h1 className="max-[767px]:text-2xl font-bold md:text-2xl lg:text-xl">
                Reset your password
              </h1>
              <p className="opacity-90 lg:text-sm">
                Enter the email address associated with your account and we'll
                send you a link to reset your password.
              </p>
            </div>

            <div className="grid max-[767px]:gap-6 md:gap-12 lg:gap-6 lg:w-[25rem]">
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
            </div>

            <button
              type="submit"
              className="max-[767px]:p-2 max-[767px]:text-xl opacity-90 font-bold border-none active:bg-blue-600 flex justify-center items-center w-full bg-blue-600 text-white border-2 hover:bg-blue-700 md:p-3 md:text-3xl lg:w-[25rem] lg:p-2 lg:text-sm"
            >
              Continue
            </button>
            <div className="text-center">
              <Link
                to="/SignIn"
                className="text-blue-600 opacity-90 cursor-pointer md:text-xl lg:text-sm"
              >
                Return to sign in
              </Link>
            </div>
          </div>

          <div className="max-[767px]:text-[0.7rem] max-[767px]:p-4 grid justify-center items-center bg-blue-50 md:p-4">
            <h1 className="flex gap-2 cursor-pointer md:text-2xl lg:text-sm">
              <span className="opacity-80">New to Frambeg Tech</span>
              <Link
                to="/Signup"
                className="text-blue-600 hover:text-red-600 opacity-50 cursor-pointer"
              >
                Create account
              </Link>
            </h1>
          </div>
        </form>
      </div>
      <div className="font-serif max-[767px]:my-8 max-[767px]:w-[90%] m-auto md:w-[60%] md:my-8 lg:w-[30rem]">
        <div className="max-[767px]:p-4 border-4 leading-4 opacity-80 md:p-4 md:text-sm lg:text-sm">
          <h1>
            Don't click on links if an email looks suspicious. Fraudsters
            sometimes send emails with phishing links while pretending to be
            Frambeg-Tech. To avoid phishing attacks, set a bookmark for this
            page and only use that link when signing in.
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

export default ResetPasswordEmailVerification;
