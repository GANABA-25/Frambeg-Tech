import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { items: [], totalQuantity: 0, subtotal: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.items.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.subtotal = action.payload.subtotal;
      state.items = action.payload.items;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.productId === newItem.productId
      );
      state.totalQuantity++;
      state.subtotal = state.subtotal + newItem.price;
      if (!existingItem) {
        state.items.push({
          productId: newItem.productId,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.tittle,
          productImage: newItem.productImage,
          description: newItem.description,
          subtotal: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const productId = action.payload;
      const existingItem = state.items.find(
        (item) => item.productId === productId
      );
      state.totalQuantity--;
      state.subtotal = state.subtotal - existingItem.price;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter(
          (item) => item.productId !== productId
        );
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },

    removeItemCompletely(state, action) {
      const productId = action.payload;
      const existingItem = state.items.find(
        (item) => item.productId === productId
      );
      state.totalQuantity = state.totalQuantity - existingItem.quantity;
      state.subtotal = state.subtotal - existingItem.totalPrice;
      if (existingItem.quantity >= 1) {
        state.items = state.items.filter(
          (item) => item.productId !== productId
        );
      }
    },
  },
});

export const cartAction = cartSlice.actions;

export default cartSlice;
