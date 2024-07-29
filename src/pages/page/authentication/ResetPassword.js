import { Fragment, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import axios from "axios";

import formLoadingAnimation from "../../../lottie/Animation - form loading.json";

import { BiError, BiSolidError } from "react-icons/bi";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";

const ResetPassword = () => {
  const [viewPassword, setViewPassword] = useState(false);
  const [viewConfirmPassword, setViewConfirmPassword] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [successMsg, seSuccessMsg] = useState("");

  const { token } = useParams();
  const [validToken, setValidToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchTokenValidation = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/user/tokenValidation/${token}`
        );

        setUserId(res.data.userId);
        setResetPassword((prevState) => ({
          ...prevState,
          userId: res.data.userId,
        }));
        if (res.status == 200) {
          setValidToken(true);
        }
      } catch (error) {
        setValidToken(false);
        console.log("error", error.message);
      }
    };
    if (token) {
      fetchTokenValidation();
    }
  }, [token]);

  const [resetPassword, setResetPassword] = useState({
    newPassword: "",
    confirmPassword: "",
    userId: userId,
  });

  const togglePasswordVisibility = () => {
    setViewPassword(!viewPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setViewConfirmPassword(!viewConfirmPassword);
  };

  const emailInputHandler = (e) => {
    setResetPassword((prevState) => {
      return { ...prevState, newPassword: e.target.value };
    });
  };

  const passwordInputHandler = (e) => {
    setResetPassword((prevState) => {
      return { ...prevState, confirmPassword: e.target.value };
    });
  };

  const SubmitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(
        ` http://localhost:8080/user/resetPassword/${token}`,
        resetPassword
      );

      setResetPassword({
        newPassword: "",
        confirmPassword: "",
        userId: userId,
      });

      setTimeout(() => {
        navigate("/");
      }, 3000);

      seSuccessMsg(response.data.message);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
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
  const isButtonDisabled =
    resetPassword.newPassword === "" || resetPassword.confirmPassword === "";
  return (
    <Fragment>
      {validToken ? (
        <div className="font-serif max-[767px]:w-[90%] m-auto md:w-[60%] lg:grid lg:justify-center lg:items-center lg:w-[30rem]">
          <div className="flex items-center max-[767px]:my-4 max-[767px]:gap-2 md:gap-3 md:my-8">
            <img
              className="max-[767px]:w-[2rem] md:w-[2rem]"
              src="https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711542176/FrambegTech/HOME%20PAGE/logo_ddmofy.png"
            />
            <h1 className="max-[767px]:text-xl font-bold md:text-2xl lg:text-xl">
              Frambeg Tech
            </h1>
          </div>

          <form
            onSubmit={SubmitHandler}
            className="max-[767px]:my-2 border-2 max-[767px]:p-4 shadow-2xl md:p-6 lg:p-14"
          >
            <h1 className="max-[767px]:text-2xl font-bold max-[767px]:my-4 md:text-2xl lg:text-xl md:my-6 lg:my-0 lg:mb-4 opacity-80">
              Reset your Password
            </h1>
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
                  <FaCircleCheck className="text-center max-[767px]: md:text-2xl lg:text-xl" />
                </div>
                <p className="p-2 text-sm md:text-lg">{successMsg}</p>
              </div>
            )}

            <div className="grid max-[767px]:gap-8 md:gap-10 lg:w-[30rem]">
              <div className="relative grid max-[767px]:gap-2 md:gap-4 lg:gap-1">
                <label>New password</label>
                <input
                  className="bg-grayDark focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-sm border-2 p-2 md:p-4 lg:p-2"
                  type={viewPassword ? "text" : "password"}
                  name="password"
                  placeholder="Please enter a new password"
                  onChange={emailInputHandler}
                  value={resetPassword.newPassword}
                  required
                />
                <div
                  onClick={togglePasswordVisibility}
                  className="absolute opacity-50 hover:opacity-100 right-4 bottom-3 flex items-center text-blue-600"
                >
                  {viewPassword ? (
                    <FaEyeSlash className="w-[1.5rem] h-[1.5rem] cursor-pointer md:w-[2rem] md:h-[2rem] lg:w-[1.2rem] lg:h-[1.2rem]" />
                  ) : (
                    <FaEye className="w-[1.5rem] h-[1.5rem] cursor-pointer md:w-[2rem] md:h-[2rem] lg:w-[1.2rem] lg:h-[1.2rem]" />
                  )}
                </div>
              </div>

              <div className="relative grid items-center max-[767px]:gap-2 md:gap-4 lg:gap-1">
                <label>Confirm your password</label>
                <input
                  className="bg-grayDark focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-sm border-2 p-2 md:p-4 lg:p-2"
                  type={viewConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Please confirm the password"
                  onChange={passwordInputHandler}
                  value={resetPassword.confirmPassword}
                  required
                />
                <div
                  onClick={toggleConfirmPasswordVisibility}
                  className="absolute opacity-50 hover:opacity-100 right-4 bottom-3 flex items-center text-blue-600"
                >
                  {viewConfirmPassword ? (
                    <FaEyeSlash className="w-[1.5rem] h-[1.5rem] cursor-pointer md:w-[2rem] md:h-[2rem] lg:w-[1.2rem] lg:h-[1.2rem]" />
                  ) : (
                    <FaEye className="w-[1.5rem] h-[1.5rem] cursor-pointer md:w-[2rem] md:h-[2rem] lg:w-[1.2rem] lg:h-[1.2rem]" />
                  )}
                </div>
              </div>

              <button
                type="submit"
                className={`max-[767px]:p-2 max-[767px]:text-2xl font-bold border-none active:bg-blue-600 flex justify-center items-center w-full bg-blue-600 text-white border-2 hover:bg-blue-700 md:text-2xl md:p-3 md:my-4 lg:text-xl lg:p-2 lg:my-2 ${
                  isButtonDisabled
                    ? "opacity-50 cursor-not-allowed"
                    : "opacity-100"
                }`}
                disabled={isButtonDisabled}
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
                  "Continue"
                )}
              </button>
            </div>
          </form>
          <div className="max-[767px]:mt-4 flex max-[767px]:gap-3 md:gap-4 md:mt-6 md:text-xl lg:text-sm">
            <h1 className="cursor-pointer opacity-50 hover:opacity-100">
              @ Frambeg-Tech
            </h1>
            <h1 className="cursor-pointer opacity-50 hover:opacity-100">
              Contact
            </h1>
            <h1 className="cursor-pointer opacity-50 hover:opacity-100">
              Privacy & terms
            </h1>
          </div>
        </div>
      ) : (
        <div className="max-[767px]:w-[90%] m-auto grid justify-center font-serif lg:w-[50%]">
          <h1 className="max-[767px]:text-xl max-[767px]:my-4 font-bold md:text-2xl md:my-8 lg:text-xl">
            Frambeg-Tech
          </h1>
          <div className="shadow-lg">
            <div className="max-[767px]:p-8 border-2 grid gap-3 md:p-8 lg:p-16">
              <h1 className="max-[767px]:text-xl flex justify-center items-center md:text-2xl font-bold lg:text-2xl">
                <BiError />
              </h1>
              <p>This password reset link has expired.</p>
              <Link
                to="/ResetPasswordEmailVerification"
                className="text-blue-600 cursor-pointer text-center opacity-50 hover:opacity-100"
              >
                Try resetting your password again
              </Link>
            </div>
          </div>

          <div className="max-[767px]:mt-4 flex max-[767px]:gap-3 md:gap-4 md:mt-6 md:text-xl lg:text-sm">
            <h1 className="cursor-pointer opacity-60 hover:opacity-100">
              @ Frambeg-Tech
            </h1>
            <h1 className="cursor-pointer opacity-60 hover:opacity-100">
              Contact
            </h1>
            <h1 className="cursor-pointer opacity-60 hover:opacity-100">
              Privacy & terms
            </h1>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default ResetPassword;
