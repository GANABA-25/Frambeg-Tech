import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
  userId: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    setUserId(state, action) {
      state.userId = action.payload;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
