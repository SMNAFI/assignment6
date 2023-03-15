const { createSlice } = require('@reduxjs/toolkit')

const initialState = {
  sortBy: '',
  status: 'All',
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    statusChanged: (state, action) => {
      state.status = action.payload
    },
    sortByChanged: (state, action) => {
      state.sortBy = action.payload
    },
  },
})

export default filterSlice.reducer
export const { statusChanged, sortByChanged } = filterSlice.actions
