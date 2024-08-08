import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cart-slice";
import searchBarSlice from "./searchBar-slice";
import userSlice from "./user-slice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    searchInput: searchBarSlice.reducer,
    user: userSlice,
  },
});
export default store;
