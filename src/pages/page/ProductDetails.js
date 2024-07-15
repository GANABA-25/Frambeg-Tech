import { Fragment } from "react";
import { useLocation } from "react-router-dom";

import { IoMdAdd } from "react-icons/io";
import { HiOutlineMinus } from "react-icons/hi";
import NavigationBar from "../../components/navBar/Navigation";

import Footer from "../components/Footer";

const ProductDetails = () => {
  const { state } = useLocation();
  const payload = state && state.payload;

  // console.log(payload);

  return (
    <Fragment>
      <NavigationBar />
      <div className="font-serif mt-40">
        <div className="lg:w-4/5 lg:m-auto lg:flex">
          <div className="flex justify-center items-center lg:justify-normal lg:items-start lg:w-3/6 lg:mt-12">
            <img
              className="mx-4 h-48 w-48 md:h-96 md:w-96 mt-12 lg:h-10/12  lg:mx-0 lg:mt-0"
              src={payload.productImage}
            ></img>
          </div>

          <div className="lg:w-3/6 lg:mt-12">
            <h1 className="text-2xl text-blue-600 m-4 mt-9 font-bold md:text-4xl md:mt-16 lg:text-xl lg:mt-0">
              {payload.productName}
            </h1>
            <div className="mx-4 text-xl font-bold md:text-3xl lg:text-xl">
              <p>{payload.description}</p>
            </div>

            <span>
              <h1 className="text-xl m-4 font-bold md:text-4xl lg:text-xl">
                <span className="text-blue-600">Price : </span>
                {payload.price.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </h1>
              <div className="m-4">
                <h5 className="mb-2 md:text-4xl lg:text-xl">key features :</h5>
                <ul className="ml-5 md:text-2xl lg:text-sm">
                  <li>Newest Technology</li>
                  <li>Best in class components</li>
                  <li>Dimensions -69.5 * 750 * 169.0</li>
                  <li>Maintenance free</li>
                  <li>12 year warranty</li>
                </ul>
              </div>
            </span>

            <div className=" flex gap-4 m-4">
              <div className="flex mt-2">
                <button
                  // onClick={removeItemHandler}
                  className="border-2 md:border-4 lg:border-2 px-4 hover:text-blue-600 md:px-8 lg:px-4 md:text-2xl lg:text-sm"
                >
                  <HiOutlineMinus />
                </button>
                <div className="border-2 md:border-4 lg:border-2 pt-1 px-4 md:px-8 lg:px-4 md:text-2xl lg:text-sm">
                  0
                </div>
                <button
                  // onClick={addItemHandler}
                  className="border-2 md:border-4 lg:border-2 px-4 hover:text-blue-600 md:px-8 lg:px-4 md:text-2xl lg:text-sm"
                >
                  <IoMdAdd />
                </button>
              </div>
              <button className="bg-slate-950 text-white p-2 px-14 text-sm mt-2 hover:bg-blue-600 shadow-lg md:text-xl lg:px-8 lg:text-sm">
                {payload.addToCart}
              </button>
            </div>
          </div>
        </div>
        <div className="m-4 mt-8 lg:w-4/5 lg:m-auto ">
          <h1 className="text-2xl font-bold md:text-4xl lg:text-2xl">
            Related Products
          </h1>
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default ProductDetails;
