import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../../store/user-slice";
import { GiBasket } from "react-icons/gi";

const CartFile = (props) => {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const message = useSelector((state) => state.user.message);
  const showMessage = useSelector((state) => state.user.showMessage);

  useEffect(() => {
    if (showMessage) {
      const timer = setTimeout(() => {
        dispatch(userActions.clearMessage());
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [showMessage, dispatch]);

  return (
    <>
      <div
        className="relative text-white flex cursor-pointer p-2 lg:text-lg"
        onClick={props.onClick}
      >
        <GiBasket className="max-[767px]:mr-3 text-2xl lg:hover:text-slate-400 md:mr-4 md:text-3xl lg:text-2xl lg:mr-0" />
        <h1 className="absolute max-[767px]:right-2 max-[767px]:bottom-7 bottom-5 font-mono md:text-2xl md:left-10 md:bottom-7 lg:text-lg lg:bottom-4 lg:left-8 text-center">
          {cartQuantity}
        </h1>
      </div>

      {showMessage && (
        <h1 className="absolute text-white max-[767px]:left-[18.2rem] max-[767px]:top-[1.1rem] z-20 text-center bg-green-600 p-2 text-sm md:text-lg md:top-[1rem] md:left-[39rem] lg:top-[9.6rem] lg:left-[73rem]">
          {message}
        </h1>
      )}
    </>
  );
};

export default CartFile;
