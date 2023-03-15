import React from 'react'
import Filter from '../components/Filter'
import BlogGrid from './../components/BlogGrid'

const Home = () => {
  return (
    <section className='wrapper'>
      <Filter />
      <BlogGrid />
    </section>
  )
}

export default Home
