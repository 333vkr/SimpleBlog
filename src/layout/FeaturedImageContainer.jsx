import React from 'react'
import '../assets/css/featuredImageContainer.css'
export const FeaturedImageContainer = (props) => {
    const {src,title}=props
  return (
    <div className="featured-image-wrapper">
        <img className='fetured-img' src={src} alt="" />

        <div className="blog-list-container">
            <p className='blog-list-title'>{title}</p>
            {props.children}
        </div>
      </div>
  )
}
