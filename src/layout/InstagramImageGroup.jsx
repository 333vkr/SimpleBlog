import React from 'react'
import '../assets/css/instaImageGroup.css'
export const InstagramImageGroup = (props) => {
    const {followText,instaUserName}=props
  return (
    <div className='insta-images-wrapper'>
        {props.children}
        <div className="follow-container">
            <p className='follow-text'>{followText}</p>
            <p className='user-name'>{instaUserName}</p>
        </div>
    </div>
  )
}
