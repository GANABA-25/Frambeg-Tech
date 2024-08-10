import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
  message: null,
  showMessage: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    setMessage(state, action) {
      state.message = action.payload;
      state.showMessage = true;
    },
    clearMessage(state) {
      state.message = null;
      state.showMessage = false;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
