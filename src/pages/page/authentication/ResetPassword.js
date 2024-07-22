import { Fragment, useState } from "react";
import axios from "axios";

import { BiSolidError } from "react-icons/bi";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const ResetPassword = () => {
  const [viewPassword, setViewPassword] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [successMsg, seSuccessMsg] = useState("");
  const [resetPassword, setResetPassword] = useState({
    email: "",
    newPassword: "",
  });

  const togglePasswordVisibility = () => {
    setViewPassword(!viewPassword);
  };

  const emailInputHandler = (e) => {
    setResetPassword((prevState) => {
      return { ...prevState, email: e.target.value };
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
        "http://localhost:8080/user/resetPassword",
        resetPassword
      );

      setResetPassword({
        email: "",
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
  return (
    <Fragment>
      <div className="font-serif">
        <form
          onSubmit={SubmitHandler}
          className="flex justify-center items-center max-[767px]:my-2 md:my-4 lg:my-5"
        >
          <div>
            <div className="grid justify-center items-center">
              <div className="flex justify-center items-center max-[767px]:gap-2 md:gap-3 ">
                <img
                  className="max-[767px]:w-[4rem] md:w-[5rem] lg:w-[3rem]"
                  src="https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711542176/FrambegTech/HOME%20PAGE/logo_ddmofy.png"
                />
                <h1 className="max-[767px]:text-2xl font-bold md:text-4xl">
                  Frambeg Tech
                </h1>
              </div>
              <h1 className="flex justify-center items-center max-[767px]:text-2xl max-[767px]:mb-4 md:text-4xl md:mb-4 lg:my-3">
                Reset Password
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
            <div className="md:w-[40rem]">
              <div className="max-[767px]:w-[20rem] grid gap-4 pb-2">
                <input
                  className="bg-grayDark focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-sm border-2 p-2 md:p-4 lg:p-2"
                  type="email"
                  name="email"
                  placeholder="Please Enter Your Email"
                  onChange={emailInputHandler}
                  value={resetPassword.email}
                  required
                />
              </div>

              <div className="relative max-[767px]:w-[20rem] grid items-center gap-4 pb-2">
                <input
                  className="bg-grayDark focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-sm border-2 p-2 md:p-4 lg:p-2"
                  type={viewPassword ? "text" : "password"}
                  name="newPassword"
                  placeholder="Please Enter Your newPassword"
                  onChange={passwordInputHandler}
                  value={resetPassword.newPassword}
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
            </div>

            <button
              type="submit"
              className="max-[767px]:p-2 max-[767px]:text-2xl font-bold border-none active:bg-blue-600 flex justify-center items-center w-full bg-blue-600 text-white border-2 hover:bg-blue-700 md:text-5xl md:p-3 md:my-4 lg:text-2xl lg:p-2 lg:my-2"
            >
              submit
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default ResetPassword;
