import {
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';

import {
  ICart,
  IProduct,
  ICartState
} from '../../../types/index'

const initialState = {
  cart: [],
}

const CartData = createSlice({
  name: 'cartData',
  initialState,
  reducers: {
    addNewItem: (state: ICart, action) => {
      if (state.cart.find(item => item.id === action.payload.id)) {
        let index = state.cart.findIndex(item => item.id === action.payload.id);
        state.cart[index].amount += 1
        return
      }
      state.cart = [...state.cart, action.payload];
    },

    removeItems: (state: ICart, action) => {
      if (state.cart.find(item => item.id === action.payload.id)) {
        let index = state.cart.findIndex(item => item.id === action.payload.id);
        if (state.cart[index].amount > 1) {
          state.cart[index].amount -= 1
          return
        }
        if (state.cart[index].amount === 1) {
          state.cart[index].amount -= 1
          state.cart.splice(index, 1);
          return
        }
      }
    }
  }
});

export const { addNewItem, removeItems } = CartData.actions;

export const cartStateData = (state: ICartState) => state.cart.cart

export default CartData.reducer;