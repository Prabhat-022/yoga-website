import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  status: 'idle',
  error: null,
  user: null,
  isLoggedIn: false
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setloginuser: (state, action) => {
      state.user = action.payload
      state.isLoggedIn = true
    },
    logout: (state) => {
      state.user = null
      state.isLoggedIn = false
    }
  }
})

export const { setloginuser, logout } = userSlice.actions
export default userSlice.reducer