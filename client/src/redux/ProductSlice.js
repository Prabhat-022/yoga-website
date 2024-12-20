import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  status: 'idle',
  error: null,
  product: [],
  selectedProduct: null
}

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    AllProduct: (state, action) => {
      state.product = action.payload
    },
    addProduct: (state, action) => {
      state.product.push(action.payload)
    },
    removeProduct: (state, action) => {
      state.product = state.product.filter(product => product.id !== action.payload)
    },
    updateProduct: (state, action) => {
      const index = state.product.findIndex(product => product.id === action.payload.id)
      if (index !== -1) {
        state.product[index] = action.payload
      }
    },
    selectProduct: (state, action) => {
      state.selectedProduct = action.payload
    }
  }
})

export const {AllProduct, addProduct, removeProduct, updateProduct, selectProduct} = productSlice.actions
export default productSlice.reducer
