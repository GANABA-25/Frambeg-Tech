import { createSlice } from "@reduxjs/toolkit";

const initialState = { searchWord: "" };

const searchBarSlice = createSlice({
  name: "searchBar",
  initialState,
  reducers: {
    handleSearchWord: (state, action) => {
      state.searchWord = action.payload;
    },
  },
});

export const searchBarAction = searchBarSlice.actions;

export default searchBarSlice;
