import { createSlice } from "@reduxjs/toolkit";

const signinSlice = createSlice({
  name: "currentUser",
  initialState: { user: null },
  reducers: {
    currentUserAdded(state, action) {
      state.user = action.payload;
    },
  },
});

export const { currentUserAdded } = signinSlice.actions;
export default signinSlice.reducer;
