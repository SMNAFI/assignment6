import { configureStore } from '@reduxjs/toolkit'
import blogsReducer from '../features/blogs/blogsSlice'
import blogReducer from '../features/blog/blogSlice'
import filterReducer from '../features/filter/fliterSlice'
import relatedBlogsReducer from '../features/relatedBlogs/relatedBlogsSlice'
import savedBlogsReducer from '../features/savedBlogs/savedBlogsSlice'

export const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    blog: blogReducer,
    filter: filterReducer,
    relatedBlogs: relatedBlogsReducer,
    savedBlogs: savedBlogsReducer,
  },
})
