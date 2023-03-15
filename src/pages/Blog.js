import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import BlogDetails from '../components/BlogDetails'
import RelatedBlogList from '../components/RelatedBlogList'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBlog } from './../features/blog/blogSlice'
import Loading from '../components/Loading'
import Error from '../components/Error'

const Blog = () => {
  const { blog, isLoading, isError, error } = useSelector((state) => state.blog)
  const dispatch = useDispatch()
  const { blogId } = useParams()
  useEffect(() => {
    dispatch(fetchBlog(blogId))
  }, [dispatch, blogId])

  const { id, tags } = blog || {}

  // decide what to render
  let content = null
  if (isLoading) content = <Loading />

  if (!isLoading && isError) content = <Error>{error}</Error>

  if (!isLoading && !isError && !blog?.id) {
    content = (
      <h3 style={{ color: 'gray' }} className='col-span-12'>
        No video found!
      </h3>
    )
  }

  if (!isLoading && !isError && blog?.id) {
    content = (
      <section className='post-page-container'>
        <BlogDetails blog={blog} />
        <RelatedBlogList id={id} tags={tags} />
      </section>
    )
  }

  return (
    <>
      <div className='container mt-8'>
        <Link
          to='/'
          className='inline-block text-gray-600 home-btn'
          id='lws-goHome'
        >
          <i className='mr-2 fa-solid fa-house'></i>Go Home
        </Link>
      </div>

      {content}
    </>
  )
}

export default Blog
