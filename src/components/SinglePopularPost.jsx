import React from 'react'
import '../assets/css/popularPosts.css'
import { Breadcrumb } from './Breadcrumb'
export const SinglePopularPost = (props) => {
    const {src,heading,breadcrumbLabel}=props
  return (
    <div className='single-popular-post'>
    <img src={src} alt="" />
    <div className="texts">
        <p className='heading'>{heading}</p>
        <Breadcrumb label={breadcrumbLabel}/>
    </div>
    </div>
  )
}
