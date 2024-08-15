import { Fragment } from "react";

import { FaShippingFast } from "react-icons/fa";
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import { FaArrowRotateLeft } from "react-icons/fa6";
import { MdOutlinePayment } from "react-icons/md";

const Offers = () => {
  return (
    <Fragment>
      <div className="grid grid-cols-2 md:grid-cols-4 shadow-md border-2 gap-4 bg-white m-4 p-4 md:absolute md:top-46 lg:w-4/5 lg:m-auto lg:top-[47rem]  lg:right-0 lg:left-0">
        <div className="md:flex lg:flex">
          <div className="text-blue-700 text-3xl md:px-2 lg:p-5">
            <FaShippingFast />
          </div>
          <div>
            <h1 className="text-sm font-bold md:text-base lg:text-xl">
              Free Shipping
            </h1>
            <p className="opacity-50 text-sm">
              when you spend GH¢80 or <br className="lg:hidden" /> more
            </p>
          </div>
        </div>

        <div className="md:flex">
          <div className="text-blue-700 text-3xl  md:px-2 lg:p-5">
            <BiSolidMessageRoundedDots />
          </div>
          <div>
            <h1 className="text-sm font-bold md:text-base lg:text-xl">
              we are available 24/7
            </h1>
            <p className="opacity-50 text-sm">
              Need help? Connect us <br className="lg:hidden" /> anytime
            </p>
          </div>
        </div>

        <div className="md:flex">
          <div className="text-blue-700 text-3xl md:px-2 lg:p-5">
            <FaArrowRotateLeft />
          </div>
          <div>
            <h1 className="text-sm font-bold md:text-base lg:text-xl">
              Satisfied or return
            </h1>
            <p className="opacity-50 text-sm">Easy 30-day return policy</p>
          </div>
        </div>

        <div className="md:flex">
          <div className="text-blue-700 text-3xl  md:px-2 lg:p-5">
            <MdOutlinePayment />
          </div>
          <div>
            <h1 className="text-sm font-bold md:text-base lg:text-xl">
              100% secure payment
            </h1>
            <p className="opacity-50 text-sm">
              Visa Mastercard,Strip <br className="lg:hidden" /> Paypal
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Offers;
