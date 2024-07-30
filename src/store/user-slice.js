import { createSlice } from "@reduxjs/toolkit";

const initialUserState = { userId: null };

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    setUser(state, action) {
      state.userId = action.payload.userId;
    },
    clearUser(state) {
      state.userId = null;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;
