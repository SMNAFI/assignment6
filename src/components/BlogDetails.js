import React, { useState } from 'react'
import tagSpanGenerator from '../utils/tagSpanGenerator'
import { useDispatch, useSelector } from 'react-redux'
import {
  addToSave,
  removeFromSave,
} from '../features/savedBlogs/savedBlogsSlice'

const BLogDetails = ({ blog }) => {
  const { id, title, description, likes, image, tags } = blog
  const dispatch = useDispatch()
  const savedBlogs = useSelector((state) => state.savedBlogs)
  console.log(savedBlogs)
  const [isSaved, setIsSaved] = useState(savedBlogs.includes(id))

  const handleSave = () => {
    if (isSaved === true) {
      dispatch(removeFromSave(id))
      setIsSaved(false)
    } else {
      dispatch(addToSave(id))
      setIsSaved(true)
    }
  }
  return (
    <main className='post'>
      <img
        src={image}
        alt='title'
        className='w-full rounded-md'
        id='lws-megaThumb'
      />
      <div>
        <h1 className='mt-6 text-2xl post-title' id='lws-singleTitle'>
          {title}
        </h1>
        <div className='tags' id='lws-singleTags'>
          {tagSpanGenerator(tags)}
        </div>
        <div className='btn-group'>
          {/* <!-- handle like on button click --> */}
          <button className='like-btn' id='lws-singleLinks'>
            <i className='fa-regular fa-thumbs-up'></i>
            {likes}
          </button>
          {/* <!-- handle save on button click --> */}
          {/* <!-- use ".active" class and "Saved" text  if a post is saved, other wise "Save" --> */}
          <button
            className={`save-btn ${isSaved ? 'active' : ''}`}
            id='lws-singleSavedBtn'
            onClick={handleSave}
          >
            <i className='fa-regular fa-bookmark'></i>{' '}
            {isSaved ? 'Saved' : 'Save'}
          </button>
        </div>
        <div className='mt-6'>
          <p>{description}</p>
        </div>
      </div>
    </main>
  )
}

export default BLogDetails
