import React from 'react'
import { Link } from '../components/Link'
import { Breadcrumb } from '../components/Breadcrumb'
import '../assets/css/popularStories.css'
export const SinglePopularStory = (props) => {
const {src,linkLabel,linkHref,heading,bredcrumbLabel,onClick}=props
  return (
    <div className='popular-story-container' onClick={onClick}>
        <img src={src} alt="" />
        <Link href={linkHref} linkLabel={linkLabel}/>
        <h2>{heading}</h2>
        <Breadcrumb label={bredcrumbLabel}/>
    </div>
  )
}
