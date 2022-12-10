import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cartState: false,
    cartItems: localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [],
    // for cart item calculation
    cartTotalAmount: 0,
    cartTotalQantity: 0,
  },
  reducers: {
    setOpenCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },
    setCloseCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },
    // for adding items to cart
    setAddItemToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;

        // https://react-hot-toast.com/
        toast.success(`Item QTY Increased`);
      } else {
        const temp = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(temp);

        toast.success(`${action.payload.title} added to Cart`);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    // removing item from cart
    setRemoveItemFromCart: (state, action) => {
      const removeItem = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );

      state.cartItems = removeItem;
      localStorage.setItem("cart", JSON.stringify(state.cartItems));

      toast.success(`${action.payload.title} Removed From Cart`);
    },
    // to increase quantity
    setIncreaseItemQTY: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;

        toast.success(`Item QTY Increased`);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },

    // to decrease quantity
    setDecreaseItemQTY: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;

        toast.success(`Item QTY Decreased`);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },

    // to clear cart
    setClearCartItems: (state, action) => {
      state.cartItems = [];
      toast.success(`Cart Cleared`);
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    // get total
    setGetTotals: (state, action) => {
      let { totalAmount, totalQTY } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const totalPrice = price * cartQuantity;

          cartTotal.totalAmount += totalPrice;
          cartTotal.totalQTY += cartQuantity;

          return cartTotal;
        },
        {
          totalAmount: 0,
          totalQTY: 0,
        }
      );

      state.cartTotalAmount = totalAmount;
      state.cartTotalQantity = totalQTY;
    },
  },
});

export const {setOpenCart, setCloseCart, setAddItemToCart, setRemoveItemFromCart, setIncreaseItemQTY, setDecreaseItemQTY, setClearCartItems, setGetTotals} =CartSlice.actions

export const selectCartState = (state) => state.cart.cartState
export const selectCartItems = (state) => state.cart.cartItems;

export const selectTotalAmount = (state) => state.cart.cartTotalAmount;
export const selectTotalQTY = (state) => state.cart.cartTotalQantity;

export default CartSlice.reducer