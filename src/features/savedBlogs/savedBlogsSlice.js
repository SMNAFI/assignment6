const { createSlice } = require('@reduxjs/toolkit')

const initialState = []

const savedBlogsSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    addToSave: (state, action) => {
      state = state.push(action.payload)
    },
    removeFromSave: (state, action) => {
      state.map((e) => console.log(e))
      state = state.filter((id) => id !== action.payload)
    },
  },
})

export default savedBlogsSlice.reducer
export const { addToSave, removeFromSave } = savedBlogsSlice.actions
