import { cartAction } from "./cart-slice";
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
      console.log("fetching cart data", error);
    }
  };
};

export const sendCartData = (itemToSend) => {
  return async (dispatch) => {
    const storedAuthData = sessionStorage.getItem("user");
    if (!storedAuthData) {
      return;
    }
    const userData = JSON.parse(storedAuthData);
    const userId = userData.userId;
    const token = userData.token;
    try {
      const response = await axios.post(
        `http://localhost:8080/cart/addToCart/${userId}`,
        itemToSend,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
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
    const storedAuthData = sessionStorage.getItem("user");
    if (!storedAuthData) {
      return;
    }
    const userData = JSON.parse(storedAuthData);
    const userId = userData.userId;
    const token = userData.token;
    try {
      const response = await axios.post(
        `http://localhost:8080/cart/removeProductFromCart/${userId}`,
        itemToRemove,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
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

export const removeItemCompletely = (itemToDelete) => {
  return async (dispatch) => {
    const storedAuthData = sessionStorage.getItem("user");
    if (!storedAuthData) {
      return;
    }
    const userData = JSON.parse(storedAuthData);
    const userId = userData.userId;
    const token = userData.token;
    try {
      const response = await axios.post(
        `http://localhost:8080/cart/removeProductFromCartCompletely/${userId}`,
        itemToDelete,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
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
