import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cart-slice";
import searchBarSlice from "./searchBar-slice";
import tokenSlice from "./token-slice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    searchInput: searchBarSlice.reducer,
    token: tokenSlice.reducer,
  },
});
export default store;
