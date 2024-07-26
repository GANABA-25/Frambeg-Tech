import { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { BiSolidError } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const ResetPassword = () => {
  const { token } = useParams();
  const [validToken, setValidToken] = useState(null);

  useEffect(() => {
    const fetchTokenValidation = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/user/tokenValidation/${token}`
        );

        console.log(res);
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

  const [viewPassword, setViewPassword] = useState(false);
  const [viewConfirmPassword, setViewConfirmPassword] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [successMsg, seSuccessMsg] = useState("");

  const [resetPassword, setResetPassword] = useState({
    password: "",
    newPassword: "",
  });

  const togglePasswordVisibility = () => {
    setViewPassword(!viewPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setViewConfirmPassword(!viewConfirmPassword);
  };

  const emailInputHandler = (e) => {
    setResetPassword((prevState) => {
      return { ...prevState, password: e.target.value };
    });
  };

  const passwordInputHandler = (e) => {
    setResetPassword((prevState) => {
      return { ...prevState, newPassword: e.target.value };
    });
  };

  const SubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        ` http://localhost:8080/user/resetPassword/`,
        resetPassword
      );

      setResetPassword({
        password: "",
        newPassword: "",
      });

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
  const isButtonDisabled =
    resetPassword.password === "" || resetPassword.newPassword === "";
  return (
    <Fragment>
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
        {validToken ? (
          <form
            onSubmit={SubmitHandler}
            className="max-[767px]:my-2 border-2 max-[767px]:p-4 shadow-2xl md:p-6 lg:p-14"
          >
            <h1 className="max-[767px]:text-2xl font-bold max-[767px]:my-4 md:text-2xl lg:text-xl md:my-6 lg:my-0 lg:mb-4 opacity-80">
              Reset your Password
            </h1>

            <div className="grid max-[767px]:gap-8 md:gap-10 lg:w-[30rem]">
              <div className="relative grid max-[767px]:gap-2 md:gap-4 lg:gap-1">
                <label>New password</label>
                <input
                  className="bg-grayDark focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-sm border-2 p-2 md:p-4 lg:p-2"
                  type={viewPassword ? "text" : "password"}
                  name="password"
                  placeholder="Please enter a new password"
                  onChange={emailInputHandler}
                  value={resetPassword.password}
                  required
                />
                <div
                  onClick={togglePasswordVisibility}
                  className="absolute right-4 bottom-3 flex items-center text-blue-600"
                >
                  {viewPassword ? (
                    <FaEyeSlash className="w-[1.5rem] h-[1.5rem] cursor-pointer md:w-[2rem] md:h-[2rem] lg:w-[1.5rem] lg:h-[1.5rem]" />
                  ) : (
                    <FaEye className="w-[1.5rem] h-[1.5rem] cursor-pointer md:w-[2rem] md:h-[2rem] lg:w-[1.5rem] lg:h-[1.5rem]" />
                  )}
                </div>
              </div>

              <div className="relative grid items-center max-[767px]:gap-2 md:gap-4 lg:gap-1">
                <label>Confirm your password</label>
                <input
                  className="bg-grayDark focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-sm border-2 p-2 md:p-4 lg:p-2"
                  type={viewConfirmPassword ? "text" : "password"}
                  name="newPassword"
                  placeholder="Please confirm the password"
                  onChange={passwordInputHandler}
                  value={resetPassword.newPassword}
                  required
                />
                <div
                  onClick={toggleConfirmPasswordVisibility}
                  className="absolute right-4 bottom-3 flex items-center text-blue-600"
                >
                  {viewConfirmPassword ? (
                    <FaEyeSlash className="w-[1.5rem] h-[1.5rem] cursor-pointer md:w-[2rem] md:h-[2rem] lg:w-[1.5rem] lg:h-[1.5rem]" />
                  ) : (
                    <FaEye className="w-[1.5rem] h-[1.5rem] cursor-pointer md:w-[2rem] md:h-[2rem] lg:w-[1.5rem] lg:h-[1.5rem]" />
                  )}
                </div>
              </div>

              <button
                type="submit"
                className={`max-[767px]:p-2 max-[767px]:text-2xl font-bold border-none active:bg-blue-600 flex justify-center items-center w-full bg-blue-600 text-white border-2 hover:bg-blue-700 md:text-2xl md:p-3 md:my-4 lg:text-sm lg:p-2 lg:my-2 ${
                  isButtonDisabled
                    ? "opacity-50 cursor-not-allowed"
                    : "opacity-100"
                }`}
                disabled={isButtonDisabled}
              >
                Continue
              </button>
            </div>
          </form>
        ) : (
          <h1>Token has expired</h1>
        )}

        <div className="max-[767px]:mt-4 flex max-[767px]:gap-3 opacity-80 md:gap-4 md:mt-6 md:text-xl lg:text-sm">
          <h1 className="cursor-pointer">@ Frambeg-Tech</h1>
          <h1 className="cursor-pointer">Contact</h1>
          <h1 className="cursor-pointer">Privacy & terms</h1>
        </div>
      </div>
    </Fragment>
  );
};

export default ResetPassword;
