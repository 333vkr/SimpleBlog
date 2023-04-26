import React from 'react'
import '../assets/css/breadcrumb.css'

export const Breadcrumb = (props) => {
    const {label}=props
  return (
    <p className='breadcrumb'>{label}</p>
  )
}
