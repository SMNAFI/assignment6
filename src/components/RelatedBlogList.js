import React, { useEffect } from 'react'
import RelatedBlogListItem from './RelatedBlogListItem'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRelatedBlogs } from './../features/relatedBlogs/relatedBlogsSlice'
import Loading from './Loading'
import Error from './Error'

const RelatedBlogList = ({ id, tags }) => {
  const dispatch = useDispatch()
  const { relatedBlogs, isLoading, isError, error } = useSelector(
    (state) => state.relatedBlogs
  )

  useEffect(() => {
    dispatch(fetchRelatedBlogs({ id, tags }))
  }, [dispatch, tags, id])

  // decide what to render
  let content = null

  if (isLoading) content = <Loading />
  if (!isLoading && isError) {
    content = <Error>{error}</Error>
  }
  if (!isLoading && !isError && relatedBlogs?.length === 0) {
    content = <h3 className='col-span-12'>No related videos found!</h3>
  }
  if (!isLoading && !isError && relatedBlogs?.length > 0) {
    content = relatedBlogs.map((blog) => (
      <RelatedBlogListItem key={blog.id} blog={blog} />
    ))
  }
  return (
    <aside>
      <h4 className='mb-4 text-xl font-medium' id='lws-relatedPosts'>
        Related Posts
      </h4>

      <div className='space-y-4 related-post-container'>{content}</div>
    </aside>
  )
}

export default RelatedBlogList
