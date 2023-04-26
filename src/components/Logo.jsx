import React from 'react'
import '../assets/css/logo.css'
export const Logo = (props) => {
  const {src,label,alt}=props
  return (
    <div className='logo'>
        <img src={src} alt={alt} />
    </div>
  )
}
