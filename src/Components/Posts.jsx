import React from 'react'
import Post from './Post'

const Posts = () => {
  return (
    <div className='posts_container'>
      <div className='post-header'>Posts</div>
      <div className="posts"> 
        <Post></Post>
        <Post></Post>
        <Post></Post>
      </div>
    </div>
  )
}

export default Posts