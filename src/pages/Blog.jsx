import React from 'react'
import { Header } from '../layout/Header'
import { InstagramImageGroup } from '../layout/InstagramImageGroup'
import { Footer } from '../layout/Footer'
import pic11 from "../assets/images/yourpic (6).png";
import pic12 from "../assets/images/yourpic (7).png";
import pic13 from "../assets/images/yourpic (8).png";
import pic14 from "../assets/images/yourpic (9).png";
import pic15 from "../assets/images/yourpic (10).png";
import pic16 from "../assets/images/yourpic (11).png";
import bg from  "../assets/images/yourpic (21).png";
import { FeaturedImageContainer } from '../layout/FeaturedImageContainer';
import { SingleBlogWrapper } from '../layout/SingleBlogWrapper';
export const Blog = () => {
  return (
    <>
     <Header style={{ position: "relative" }} />
     <FeaturedImageContainer src={bg} title="MY BLOG">
      <SingleBlogWrapper/>
      </FeaturedImageContainer>
    <InstagramImageGroup followText='Follow my instagram' instaUserName='@logoipsum'>
        <img src={pic11} alt="" /> 
        <img src={pic12} alt="" /> 
        <img src={pic13} alt="" /> 
        <img src={pic14} alt="" /> 
        <img src={pic15} alt="" /> 
        <img src={pic16} alt="" /> 
      </InstagramImageGroup>
      <Footer />

  </>

  )
}
