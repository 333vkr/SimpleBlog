import React from 'react'
import '../assets/css/paginationButton.css'
export const PaginationButton = (props) => {
    const {label,isActive=false}=props
  return (
    <button className={`pagination-btn ${isActive? 'pagination-focus':'pagination-non-focus'}`}>{label}</button>
  )
}
