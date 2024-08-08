import { Fragment } from "react";
import { useDispatch } from "react-redux";

import { cartAction } from "../../store/cart-slice";
import { IoMdAdd } from "react-icons/io";
import { HiOutlineMinus } from "react-icons/hi";
import { FaRegTimesCircle } from "react-icons/fa";

const CartItem = (props) => {
  const { description, quantity, total, price, productImage, productId } =
    props.item;

  const dispatch = useDispatch();

  const removeItemHandler = () => {
    dispatch(cartAction.removeItemFromCart(productId));
  };

  const addItemHandler = () => {
    dispatch(
      cartAction.addItemToCart({
        productId,
        price,
        description,
      })
    );
  };

  const removeItemCompletelyHandler = () => {
    dispatch(cartAction.removeItemCompletely(productId));
  };

  return (
    <Fragment>
      <div className="grid gap-4 max-[767px]:mt-[18.5%] md:mt-[15%] lg:flex lg:gap-0 lg:mt-16">
        <div className="flex justify-center items-center w-full">
          <img
            className=" max-[767px]:w-[6rem] max-[767px]:h-[6rem] md:w-[9rem] md:h-[9rem] lg:w-[8rem] lg:h-[8rem]"
            src={productImage}
            alt="ProductImage"
          />
        </div>

        <div className="grid gap-2">
          <h1 className="text-xs md:text-lg lg:text-[13px]">{description}</h1>

          <div className="flex justify-between gap-4 cursor-pointer">
            <div className="flex">
              <button
                onClick={removeItemHandler}
                className="p-1 px-3 border-2 hover:text-blue-600"
              >
                <HiOutlineMinus />
              </button>
              <div className="p-1 px-3 border-2">{quantity}</div>
              <button
                onClick={addItemHandler}
                className="p-1 px-3 border-2 hover:text-blue-600"
              >
                <IoMdAdd />
              </button>
            </div>
            <h4 className="text-xl">
              ¢
              {total.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </h4>
            <h1
              className="flex items-center text-xl opacity-50  hover:text-blue-600"
              onClick={removeItemCompletelyHandler}
            >
              <FaRegTimesCircle />
            </h1>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default CartItem;
