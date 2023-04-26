import React from 'react'
import '../assets/css/link.css'
export const Link = (props) => {
    const {linkLabel,href}=props
  return (
    <a href={href} className='link'>{linkLabel}</a>
  )
}
