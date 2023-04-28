import React from 'react'
import '../assets/css/tag.css'
export const SingleTag = (props) => {
  return (
    <p className='tag-name'>{props.tagName}</p>
  )
}
