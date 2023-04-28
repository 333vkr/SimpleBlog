import React from 'react'
import '../assets/css/bloggerCardH.css'
export const BloggerCardHorizontal = (props) => {
    const {src,name,title,description}=props
  return (
    <div className='blogger-card-horizontal-parent'>
        <img src={src} alt="" />
        <div className='text-group'>
            <p className='name'>{name}</p>
            <p className='title'>{title}</p>
            <p className='desc'>{description}</p>
        </div>
    </div>
  )
}
