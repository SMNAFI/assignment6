import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getBlog } from './blogAPI'

const initialState = {
  blog: {},
  isLoading: false,
  isError: false,
  error: '',
}

// thunk function
export const fetchBlog = createAsyncThunk('blog/fetchBlog', async (id) => {
  const response = await getBlog(id)

  return response
})

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlog.pending, (state) => {
        state.isLoading = true
        state.isError = false
      })
      .addCase(fetchBlog.fulfilled, (state, action) => {
        state.isLoading = false
        state.blog = action.payload
      })
      .addCase(fetchBlog.rejected, (state, action) => {
        state.isLoading = false
        state.blog = {}
        state.isError = true
        state.error = action.error?.message
      })
  },
})

export default blogSlice.reducer
