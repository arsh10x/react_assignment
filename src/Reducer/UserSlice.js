import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    authLogin: (state, action) => {
      const keys = Object.keys(action.payload);
      keys.forEach((key) => {
        state[key] = action.payload[key];
      });
    },

    authLogout: (state) => {
      const keys = Object.keys(state);
      keys.forEach((key) => {
        state[key] = null;
      });
    },
  },
});

export const { authLogin, authLogout } = UserSlice.actions;
export default UserSlice.reducer;
