import { cartAction } from "./cart-slice";
import { userActions } from "../store/user-slice";
import axios from "axios";

export const fetchCartData = () => {
  return async (dispatch) => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const userId = user.userId;
    try {
      const response = await axios.get(
        `http://localhost:8080/cart/getCart/${userId}`
      );
      const cartData = response.data.cart;
      dispatch(cartAction.replaceCart(cartData));
    } catch (error) {
      console.log("error fetching cart data", error);
    }
  };
};

export const sendCartData = (itemToSend) => {
  return async (dispatch) => {
    const userData = sessionStorage.getItem("user");

    if (!userData) {
      console.log("No user data found in session storage.");
      return;
    }

    const user = JSON.parse(userData);
    const userId = user.userId;
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

export const removeCartItem = (itemToRemove) => {
  return async (dispatch) => {
    const userData = sessionStorage.getItem("user");

    if (!userData) {
      console.log("No user data found in session storage.");
      return;
    }

    const user = JSON.parse(userData);
    const userId = user.userId;

    console.log(userId);
    try {
      const response = await axios.post(
        `http://localhost:8080/cart/removeProductFromCart/${userId}`,
        itemToRemove
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
