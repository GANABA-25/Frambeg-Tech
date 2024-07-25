import { Fragment } from "react";

import { FaCcVisa } from "react-icons/fa6";
import { FaCcStripe } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa6";
import { FaCcMastercard } from "react-icons/fa6";

const Footer = () => {
  return (
    <Fragment>
      <footer className="border-t-4">
        <div className="font-serif text-blue-600 grid justify-center text-center m-4 md:mx-8 md:text-start md:flex md:justify-between md:py-24 lg:w-4/5 lg:m-auto ">
          <div className="text-black flex justify-center m-4 mb-12 opacity-70">
            <img
              className="w-2/12 ml-2 md:w-14 md:h-14"
              src="https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711542176/FrambegTech/HOME%20PAGE/logo_ddmofy.png"
            />
            <h1 className="mt-3">Frambeg Tech</h1>
          </div>

          <div className="">
            <h1 className=" text-black mb-12 text-2xl font-bold">Shop</h1>
            <h6>Hot Deals</h6>
            <h6>Categories</h6>
            <h6>Brands</h6>
            <h6>Rebates</h6>
            <h6>Weekly deals</h6>
          </div>

          <div className="mt-12 md:mt-0">
            <h1 className="text-2xl mb-12 text-black font-bold">Need Help?</h1>
            <h6>Contact</h6>
            <h6>Order Tracking</h6>
            <h6>FAQS</h6>
            <h6>Return Policy</h6>
            <h6>Privacy Policy</h6>
          </div>

          <div className="mt-12 md:mt-0">
            <h1 className="text-2xl mb-12 text-black font-bold">Contact</h1>
            <h6>Pankrono, Kumasi</h6>
            <h6>+233 596 498 006</h6>
            <h6>
              NathanielOwus01
              <br />
              @gmail.com
            </h6>
          </div>
        </div>
        <div className="text-center p-4 bg-slate-800 text-white md:flex md:justify-between  md:py-10 md:px-8 lg:justify-around">
          <h1 className=" opacity-50">
            @ 2023 Frambeg Tech Powered by Frambeg Industries
          </h1>
          <div className="flex justify-center gap-4 mt-4 text-2xl md:mt-0 opacity-50">
            <FaCcVisa />
            <FaCcStripe />
            <FaCcPaypal />
            <FaCcMastercard />
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
