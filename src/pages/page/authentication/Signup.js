import { Fragment, useState } from "react";
import axios from "axios";

import { BiSolidError } from "react-icons/bi";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { MdCloudDone } from "react-icons/md";

const Signup = ({ onClose, isOpen }) => {
  const [viewPassword, setViewPassword] = useState(false);
  const [viewConfirmPassword, setViewConfirmPassword] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const LoginHandler = () => {
    onClose();
    setTimeout(() => {
      isOpen();
    }, 300);
  };

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

    try {
      const response = await axios.post(
        "http://localhost:8080/user/signup",
        signupData
      );

      setSignupData({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      setSuccessMsg(response.data.message);
      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
      }, 3000);

      setTimeout(() => {
        onClose();
      }, 3000);
    } catch (error) {
      const errors = error.response?.data?.errors;
      if (errors && Array.isArray(errors)) {
        setErrorMsg(errors.map((err) => err.msg).join(", "));
      } else {
        setErrorMsg("An error occurred");
      }
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };
  return (
    <Fragment>
      <div className="grid justify-center items-center font-serif lg:p-4">
        <div className="flex justify-center items-center max-[767px]:gap-2 md:gap-3 ">
          <img
            className="max-[767px]:w-[4rem] md:w-[5rem] lg:w-[3rem]"
            src="https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711542176/FrambegTech/HOME%20PAGE/logo_ddmofy.png"
          />
          <h1 className="max-[767px]:text-2xl font-bold md:text-4xl">
            Frambeg Tech
          </h1>
        </div>
        <h1 className="flex justify-center items-center max-[767px]:text-2xl md:text-4xl md:mb-4 lg:my-3">
          Signup
        </h1>
      </div>
      {error && (
        <div className="max-[767px]:w-[90%] m-auto capitalize font-bold border-2 border-red-600 mb-3 text-center md:w-[95%]">
          <div className="flex justify-center bg-red-600 text-white p-2 md:p-4 lg:p-2">
            <BiSolidError className="text-center max-[767px]: md:text-2xl lg:text-xl" />
          </div>
          <p className="p-2 text-sm md:text-lg">{errorMsg}</p>
        </div>
      )}
      {success && (
        <div className="max-[767px]:w-[90%] m-auto capitalize font-bold border-2 border-green-600 mb-3 text-center md:w-[95%]">
          <div className="flex justify-center bg-green-600 text-white p-2 md:p-4 lg:p-2">
            <MdCloudDone className="text-center max-[767px]: md:text-2xl lg:text-xl" />
          </div>
          <p className="p-2 text-sm md:text-lg">{successMsg}</p>
        </div>
      )}
      <form
        onSubmit={SubmitHandler}
        className="font-serif grid justify-center items-center max-[767px]:my-2 md:my-4 lg:my-5"
      >
        <div className="grid md:grid-cols-2 md:w-[45rem] md:gap-4 lg:w-[40rem]">
          <div className="max-[767px]:w-[20rem] grid gap-4 pb-2">
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

          <div className="max-[767px]:w-[20rem] grid gap-4 pb-2">
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

          <div className="relative max-[767px]:w-[20rem] grid gap-4 pb-2">
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
              className="absolute right-4 max-[767px]:bottom-4 cursor-pointer md:bottom-5 flex items-center text-blue-600"
            >
              {viewPassword ? (
                <FaEyeSlash className="w-[1.5rem] h-[1.5rem] md:w-[2rem] md:h-[2rem] lg:w-[1.5rem] lg:h-[1.5rem]" />
              ) : (
                <FaEye className="w-[1.5rem] h-[1.5rem] md:w-[2rem] md:h-[2rem] lg:w-[1.5rem] lg:h-[1.5rem]" />
              )}
            </div>
          </div>

          <div className="relative max-[767px]:w-[20rem] grid items-center gap-4 pb-2">
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
              className="absolute right-4 max-[767px]:bottom-4 cursor-pointer md:bottom-5 flex items-center text-blue-600"
            >
              {viewConfirmPassword ? (
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
          Signup
        </button>
      </form>
      <div className="flex justify-center items-center md:mb-5">
        <h1
          onClick={LoginHandler}
          className="max-[767px]:gap-3 max-[767px]:my-4 text-center  cursor-pointer hover:text-blue-600 underline underline-offset-2 underline-blue-600 md:text-2xl lg:text-xl"
        >
          Already have an Account Login
        </h1>
      </div>
    </Fragment>
  );
};

export default Signup;
