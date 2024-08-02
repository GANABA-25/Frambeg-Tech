import { Fragment } from "react";
import { useLocation } from "react-router-dom";

import { IoMdAdd } from "react-icons/io";
import { HiOutlineMinus } from "react-icons/hi";
import NavigationBar from "../../components/navBar/Navigation";

import Footer from "../components/Footer";

const ProductDetails = () => {
  const { state } = useLocation();
  const payload = state && state.payload;

  return (
    <Fragment>
      <NavigationBar />
      <div className="font-serif mt-40 md:mt-[12rem] lg:mt-[11rem] lg:flex">
        <div className="lg:w-4/5 lg:m-auto lg:flex lg:gap-24">
          <div className="flex justify-center items-center">
            <img
              className="max-[767px]:h-[10rem] max-[767px]:w-[10rem] md:h-[17rem] md:w-[17rem] lg:w-[30rem] lg:h-[15rem]"
              src={payload.productImage}
              alt="product"
            />
          </div>

          <div className="">
            <h1 className="text-xl text-blue-600 m-4 mt-9 font-bold md:text-3xl md:mt-16 lg:text-xl lg:mt-0">
              {payload.productName}
            </h1>
            <div className="mx-4 max-[767px]:text-[0.9rem] md:text-xl lg:text-[1rem]">
              <p>{payload.description}</p>
            </div>

            <span>
              <div className="m-4">
                <h5 className="mb-2 font-bold md:text-3xl lg:text-xl">
                  key features :
                </h5>
                <ul className="ml-5 md:text-xl lg:text-sm">
                  <li>Newest Technology</li>
                  <li>Best in class components</li>
                  <li>Dimensions -69.5 * 750 * 169.0</li>
                  <li>Maintenance free</li>
                  <li>12 months warranty</li>
                </ul>
              </div>

              <h1 className="text-xl m-4 font-bold md:text-2xl lg:text-lg">
                <span className="text-blue-600">Price : </span>
                {payload.price.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </h1>
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
                add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="m-4 max-[767px]:mt-8 lg:w-4/5 lg:m-auto lg:my-12">
        <h1 className="text-2xl font-bold md:text-4xl lg:text-2xl">
          Related Products
        </h1>
        <p>This is a section for related products</p>
      </div>
      <Footer />
    </Fragment>
  );
};

export default ProductDetails;
