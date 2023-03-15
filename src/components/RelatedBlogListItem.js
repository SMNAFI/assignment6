import React from 'react'
import { Link } from 'react-router-dom'
import tagSpanGenerator from './../utils/tagSpanGenerator'

const RelatedPostListItem = ({ blog }) => {
  const { id, image, title, tags, createdAt } = blog
  return (
    <div className='card'>
      <Link to={`/blog/${id}`}>
        <img src={image} className='card-image' alt='title' />
      </Link>
      <div className='p-4'>
        <Link
          to={`/blog/${id}`}
          className='text-lg post-title lws-RelatedPostTitle'
        >
          {title}
        </Link>
        <div className='mb-0 tags'>{tagSpanGenerator(tags)}</div>
        <p>{createdAt}</p>
      </div>
    </div>
  )
}

export default RelatedPostListItem
