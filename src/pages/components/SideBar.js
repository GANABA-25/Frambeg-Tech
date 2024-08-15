import { Link } from "react-router-dom";
import { useState, useEffect, Fragment } from "react";
const SideBar = () => {
  return (
    <Fragment>
      <div className="mt-4 hidden lg:block ml-[4rem] font-serif">
        <h1 className="font-bold text-2xl mt-[12rem]">Categories</h1>
        <ul className="my-12 grid gap-4 opacity-75 text-sm md:text-xl lg:text-sm">
          <Link to="" className="hover:text-blue-500 cursor-pointer">
            Air conditioner
          </Link>
          <Link
            className="hover:text-blue-500 cursor-pointer"
            to="/AudioAndVideo"
          >
            Audio & Video
          </Link>

          <Link className="hover:text-blue-500 cursor-pointer" to="/NewArrival">
            New Arrivals
          </Link>

          <Link
            className="hover:text-blue-500 cursor-pointer"
            to="/HomeAppliance"
          >
            Home Appliances
          </Link>

          <Link className="hover:text-blue-500 cursor-pointer" to="">
            Kitchen Appliances
          </Link>

          <Link className="hover:text-blue-500 cursor-pointer" to="">
            PCs & laptop
          </Link>

          <Link
            className="hover:text-blue-500 cursor-pointer"
            to="/Refrigerators"
          >
            Refrigerator
          </Link>

          <Link
            className="hover:text-blue-500 cursor-pointer"
            to="/TodaysDeals"
          >
            Best Deals
          </Link>
        </ul>
      </div>
      <div className="grid gap-12">
        <div className="hidden border border-blue-600 font-serif lg:grid gap-2 bg-blue-10003 px-2 py-6 m-2 shadow-lg">
          <h1 className="font-bold uppercase text-blue-600">
            Important Notice
          </h1>
          <p className="text-sm ">
            The search box above enables you to search for products based on the
            current page. If you wish to search for a specific product, please
            navigate to the appropriate category or the All Products page.
          </p>
        </div>
        <div className="hidden border border-blue-600 font-serif lg:grid gap-2 bg-blue-10003 px-2 py-6 m-2 shadow-lg">
          <h1 className="font-bold text-blue-600 uppercase">
            Register and Join Us
          </h1>
          <p className="text-sm">
            Register today to become a valued customer and enjoy exclusive
            discounts, special offers, and personalized deals. Don't miss out on
            the chance to enhance your shopping experience with us!
          </p>
          <button className="underline underline-offset-2 text-red-600">
            Read More
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default SideBar;
