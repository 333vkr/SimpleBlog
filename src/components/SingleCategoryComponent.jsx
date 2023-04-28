import React from 'react'

export const SingleCategoryComponent = (props) => {
const {src,label}=props
  return (
    <div className='single-category-wrapper'>
    <img src={src} alt="" />
    <p className='single-category-label'>{label}</p>
    </div>
  )
}
