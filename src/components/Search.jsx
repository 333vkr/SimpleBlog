import React from 'react'
import '../assets/css/search.css'
export const Search = (props) => {
    const {placeholder,style}=props
  return (
    <div className='search-wrapper' style={style}>
        <input type="text" placeholder={placeholder}/>
        <i class="bi bi-search search-icon"></i>
    </div>
    
  )
}
