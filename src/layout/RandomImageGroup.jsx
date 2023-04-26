import React from 'react'
import '../assets/css/randomImageGroup.css'

export const RandomImageGroup = (props) => {

  return (
    <div className="random-article-image-group">
    {props.children}        
    </div>
  )
}
