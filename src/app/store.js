import { configureStore } from "@reduxjs/toolkit";
import currentUserReducer from "../features/signinSlice";
import CartSlice from "../features/CartSlice";

const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
    cart : CartSlice
  },
});

export default store;