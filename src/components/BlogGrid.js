import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BlogGridItem from './BlogGridItem'
import { fetchBlogs } from './../features/blogs/blogsSlice'
import Loading from './Loading'
import Error from './Error'

const BlogGrid = () => {
  const { status } = useSelector((state) => state.filter)
  const savedBlogs = useSelector((state) => state.savedBlogs)
  const { blogs, isLoading, isError, error } = useSelector(
    (state) => state.blogs
  )
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchBlogs())
  }, [dispatch])

  const filterByStatus = (blog) => {
    if (status === 'Saved') {
      return savedBlogs.includes(Number(blog.id))
    } else {
      return true
    }
  }

  // decide what to render
  let content

  if (isLoading) content = <Loading />
  if (!isLoading && isError) content = <Error>{error}</Error>

  if (!isError && !isLoading && blogs?.length === 0) {
    content = <h3 style={{ color: 'gray' }}>No videos found!</h3>
  }

  if (!isError && !isLoading && blogs?.length > 0) {
    content = blogs
      .filter(filterByStatus)
      .map((blog) => <BlogGridItem key={blog.id} video={blog} />)
  }

  return (
    <main className='post-container' id='lws-postContainer'>
      {content}
    </main>
  )
}

export default BlogGrid
