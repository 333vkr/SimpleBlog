import React from 'react'
import '../assets/css/socialIconGroup.css'
export const SocialIconGroup = (props) => {
  const {style}=props
  return (
    <div className='social-icon-container' style={style}>
        {props.children}
    </div>
  )
}
