import { cartAction } from "./cart-slice";
import { useDispatch } from "react-redux";
import { userActions } from "../store/user-slice";
import axios from "axios";

export const fetchCartData = (userId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/cart/getCart/${userId}`
      );

      const cartData = response.data.cart;
      dispatch(cartAction.replaceCart(cartData));
    } catch (error) {
      console.log(error);
    }
  };
};

export const sendCartData = (itemToSend, userId) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `http://localhost:8080/cart/addToCart/${userId}`,
        itemToSend
      );
      if (response.status === 200) {
        const message = response.data.message;
        dispatch(userActions.setMessage(message));
      }
    } catch (error) {
      console.error("Error sending cart data:", error);
    }
  };
};
