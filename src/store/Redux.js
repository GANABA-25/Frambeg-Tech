import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cart-slice";
import searchBarSlice from "./searchBar-slice";
import userSlice from "./user-slice";
import authSlice from "./authentication-slice";
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    search: searchBarSlice,
    user: userSlice,
    auth: authSlice,
  },
});
export default store;
