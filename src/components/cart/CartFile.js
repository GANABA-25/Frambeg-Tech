import React from "react";
import { useSelector } from "react-redux";

import { FaCartArrowDown } from "react-icons/fa";

const CartFile = (props) => {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <>
      <div
        className="lg:text-lg border text-white px-2 py-2 md:px-6 lg:px-6 flex m-1 p-1 rounded-md hover:border-blue-400 cursor-pointer md:mx-4"
        onClick={props.onClick}
      >
        <FaCartArrowDown className="text-2xl md:mr-2 lg:mr-2" />
        <h1 className="ml-2 bg-slate-950 px-4 rounded-full">{cartQuantity}</h1>
      </div>
    </>
  );
};

export default CartFile;
