import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const SideBar = () => {
  // const [shouldMove, setShouldMove] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollHeight = window.scrollY;

  //     if (scrollHeight > 2400) {
  //       setShouldMove(true);
  //     } else {
  //       setShouldMove(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // const divStyle = {
  //   position: "fixed",
  //   top: shouldMove ? "-370px" : "130px",
  //   transition: "top 0.3s ease",
  // };
  // style={divStyle}

  return (
    <div className="mt-4 hidden lg:block lg:pr-[4.5rem]">
      <h1 className="font-bold text-2xl mt-[12rem]">Categories</h1>
      <ul className="my-24 opacity-75 text-sm md:text-xl lg:text-sm">
        <li className="my-3 hover:text-blue-500 cursor-pointer">
          Air conditioner
        </li>
        <Link to="/AudioAndVideo">
          <li className="my-3 hover:text-blue-500 cursor-pointer">
            Audio & Video
          </li>
        </Link>

        <Link to="/NewArrival">
          <li className="my-3 hover:text-blue-500 cursor-pointer">
            New Arrivals
          </li>
        </Link>

        <Link to="/HomeAppliance">
          <li className="my-3 hover:text-blue-500 cursor-pointer">
            Home Appliances
          </li>
        </Link>

        <Link to="">
          <li className="my-3 hover:text-blue-500 cursor-pointer">
            Kitchen Appliances
          </li>
        </Link>

        <Link to="">
          <li className="my-3 hover:text-blue-500 cursor-pointer">
            PCs & laptop
          </li>
        </Link>

        <Link to="/Refrigerators">
          <li className="my-3 hover:text-blue-500 cursor-pointer">
            Refrigerator
          </li>
        </Link>

        <Link to="/TodaysDeals">
          <li className="my-3 hover:text-blue-500 cursor-pointer">
            Best Deals
          </li>
        </Link>
      </ul>
      <h1 className="font-bold text-2xl my-12">
        Search for <br /> your products
      </h1>
    </div>
  );
};

export default SideBar;
