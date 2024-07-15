import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cart-slice";
import searchBarSlice from "./searchBar-slice";

const store = configureStore({
  reducer: { cart: cartSlice.reducer, searchInput: searchBarSlice.reducer },
});
export default store;
