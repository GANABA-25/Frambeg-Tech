import { cartAction } from "./cart-slice";
import { useSelector } from "react-redux";
import axios from "axios";

// export const fetchCartData = () => {
//   return async (dispatch) => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8080/cart/getCart`);

//         if (response.status === 200) {
//           console.log("cart fetched successfully");
//           dispatch(cartAction.replaceCart(response.data.cart));
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchData();
//   };
// };

export const sendCartData = (item, userId) => {
  return async () => {
    const sendRequest = async () => {
      try {
        const response = await axios.post(
          `http://localhost:8080/cart/addToCart/${userId}`,
          item
        );

        console.log("Cart data sent successfully:", response.data);
      } catch (error) {
        console.error("Error sending cart data:", error);
      }
    };

    sendRequest();
  };
};
