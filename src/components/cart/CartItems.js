import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { cartAction } from "../../store/cart-slice";
import { removeCartItem } from "../../store/cart-actions";
import { sendCartData } from "../../store/cart-actions";

import { IoMdAdd } from "react-icons/io";
import { HiOutlineMinus } from "react-icons/hi";
import { FaRegTimesCircle } from "react-icons/fa";

const CartItem = (props) => {
  const {
    title,
    price,
    total,
    description,
    quantity,
    totalPrice,
    productImage,
    productId,
  } = props.item;

  const dispatch = useDispatch();

  const removeItemHandler = () => {
    const itemToRemove = {
      productId,
      price,
      quantity,
    };

    const itemToDelete = {
      ...itemToRemove,
      quantity: 1,
      totalPrice: price,
    };

    dispatch(cartAction.removeItemFromCart(productId));

    dispatch(removeCartItem(itemToDelete));
  };

  const addItemHandler = () => {
    const itemToAdd = {
      productId,
      title,
      price,
      total,
      description,
      productImage,
    };

    dispatch(
      cartAction.addItemToCart({
        productId,
        price,
        description,
      })
    );

    const itemToSend = {
      ...itemToAdd,
      quantity: 1,
      totalPrice: price,
    };

    dispatch(sendCartData(itemToSend));
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
              {totalPrice.toLocaleString(undefined, {
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
