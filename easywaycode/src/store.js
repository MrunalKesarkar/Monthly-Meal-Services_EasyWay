import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './features/cartSlice'


// create a store object to maintain global state (cart)
export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
})
