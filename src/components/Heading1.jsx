import React from 'react'
import '../assets/css/headings.css'
export const Heading1 = (props) => {
    const {style,label}=props
  return (
    <h1 style={style} className='big-heading'>{label}</h1>
  )
}
