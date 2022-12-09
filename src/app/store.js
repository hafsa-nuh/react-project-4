import { configureStore } from "@reduxjs/toolkit";
import currentUserReducer from "../features/signinSlice";

const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
  },
});

export default store;