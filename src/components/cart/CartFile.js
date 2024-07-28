import React from "react";
import { useSelector } from "react-redux";

import { GiBasket } from "react-icons/gi";

const CartFile = (props) => {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <>
      <div
        className="relative text-white flex cursor-pointer p-2 lg:text-lg"
        onClick={props.onClick}
      >
        <GiBasket className="text-2xl lg:hover:text-slate-400" />
        <h1 className="absolute max-[767px]:right-0 max-[767px]:bottom-4  bottom-5 font-mono lg:bottom-4 lg:left-8 text-center">
          {cartQuantity}
        </h1>
      </div>
    </>
  );
};

export default CartFile;
