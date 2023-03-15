import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import tagSpanGenerator from '../utils/tagSpanGenerator'

const BlogGridItem = ({ video = {} }) => {
  const savedBlogs = useSelector((state) => state.savedBlogs)
  const { id, title, image, likes, createdAt, tags } = video

  return (
    <div className='lws-card'>
      <Link to={`/blog/${id}`}>
        <img src={image} className='lws-card-image' alt={title} />
      </Link>
      <div className='p-4'>
        <div className='lws-card-header'>
          <p className='lws-publishedDate'>{createdAt}</p>
          <p className='lws-likeCount'>
            <i className='fa-regular fa-thumbs-up'></i>
            {likes}
          </p>
        </div>
        <Link to={`/blog/${id}`} className='lws-postTitle'>
          {' '}
          {title}{' '}
        </Link>
        <div className='lws-tags'>{tagSpanGenerator(tags)}</div>
        {savedBlogs.includes(id) ? (
          <div className='flex gap-2 mt-4'>
            <span className='lws-badge'> Saved </span>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default BlogGridItem
