import React, { useEffect, useState } from "react";
import { Header } from "../layout/Header";
import pic11 from "../assets/images/yourpic (6).png";
import pic12 from "../assets/images/yourpic (7).png";
import pic13 from "../assets/images/yourpic (8).png";
import pic14 from "../assets/images/yourpic (9).png";
import pic15 from "../assets/images/yourpic (10).png";
import pic16 from "../assets/images/yourpic (11).png";
import pic17 from "../assets/images/yourpic (12).png";
import pic18 from "../assets/images/yourpic (13).png";
import pic19 from "../assets/images/yourpic (14).png";
import pic20 from "../assets/images/yourpic (15).png";
import pic21 from "../assets/images/yourpic (16).png";
import pic22 from "../assets/images/yourpic (17).png";
import pic23 from "../assets/images/yourpic (18).png";
import pic24 from "../assets/images/yourpic (19).png";
import pic25 from "../assets/images/yourpic (20).png";
import bg from "../assets/images/bg.png";
import { InstagramImageGroup } from "../layout/InstagramImageGroup";
import { Footer } from "../layout/Footer";
import { FeaturedImageContainer } from "../layout/FeaturedImageContainer";
import { PopularStoriesGroup } from "../layout/PopularStoriesGroup";
import { SinglePopularStory } from "../layout/SinglePopularStory";
import { PaginationButton } from "../components/PaginationButton";
import { CTAButton } from "../components/CTAButton";
import { getArticles, getSingleArticle } from "../API/apis";
import { useNavigate } from "react-router";
export const BlogList = () => {

  const [articles,setArticles]=useState([])
  const navigate=useNavigate()

  useEffect(()=>{
    let articles=getArticles()
    articles.then((res)=>{
      console.log(res);
      setArticles(res.data)
    })
  },[])

  //click single article
  const clickSingleArticle=(id)=>()=>{
    getSingleArticle(id).then((res)=>{
      navigate('/blog')
    })
  }




  return (
    <>
      <Header style={{ position: "relative" }} />
      <FeaturedImageContainer src={bg} title="MY BLOG">
        <PopularStoriesGroup>

        {articles.slice(5,14).map((article)=>(
          <SinglePopularStory
            src={pic17}
            linkHref="#"
            linkLabel="BEAUTY"
            heading={article.title}
            bredcrumbLabel="BY MICHEL JHON / 02 May 2021"
            onClick={clickSingleArticle(article.id)}
          />
        ))}
          {/* <SinglePopularStory
            src={pic17}
            linkHref="#"
            linkLabel="BEAUTY"
            heading="Noticed by me when hear buzz of
the little world among"
            bredcrumbLabel="BY MICHEL JHON / 02 May 2021"
          />
          <SinglePopularStory
            src={pic18}
            linkHref="#"
            linkLabel="LIFESTYLE"
            heading="Foliage of my trees & but few
stray gleams steal"
            bredcrumbLabel="BY NATHAN / 02 May 2021"
          />
          <SinglePopularStory
            src={pic19}
            linkHref="#"
            linkLabel="FASHION"
            heading="Sanctuary, I throw myself down
among the tall"
            bredcrumbLabel="BY NATHAN / 02 May 2021"
          />
          <SinglePopularStory
            src={pic20}
            linkHref="#"
            linkLabel="BEAUTY"
            heading="Among the tall grass by the
trickling stream and"
            bredcrumbLabel="BY NATHAN / 02 May 2021"
          />
          <SinglePopularStory
            src={pic21}
            linkHref="#"
            linkLabel="LIFESTYLE"
            heading="Close to the earth thousand
unknown plants arenotic"
            bredcrumbLabel="BY NATHAN / 02 May 2021"
          />
          <SinglePopularStory
            src={pic22}
            linkHref="#"
            linkLabel="FASHION"
            heading="Earth thousand unknown around
plants are notic nice"
            bredcrumbLabel="BY NATHAN / 02 May 2021"
          />
          <SinglePopularStory
            src={pic23}
            linkHref="#"
            linkLabel="BEAUTY"
            heading="Possession of my entire soul, like
these sweet mornings"
            bredcrumbLabel="BY NATHAN / 02 May 2021"
          />
          <SinglePopularStory
            src={pic24}
            linkHref="#"
            linkLabel="LIFESTYLE"
            heading="Enjoy with my whole heart am
alone, and feel charm"
            bredcrumbLabel="BY NATHAN / 02 May 2021"
          />
          <SinglePopularStory
            src={pic25}
            linkHref="#"
            linkLabel="LIFESTYLE"
            heading="Created for the bliss of souls like
mine am so happy"
            bredcrumbLabel="BY NATHAN / 02 May 2021"
          /> */}
        </PopularStoriesGroup>
        <div className="pagination-btn-wrapper">
            <PaginationButton label='1' isActive={true}/>
            <PaginationButton label='2' isActive={false}/>
            <CTAButton  label='NEXT' icon={<i class="bi bi-chevron-right"></i>}/>
          </div>
      </FeaturedImageContainer>
      <InstagramImageGroup
        followText="Follow my instagram"
        instaUserName="@logoipsum"
      >
        <img src={pic11} alt="" />
        <img src={pic12} alt="" />
        <img src={pic13} alt="" />
        <img src={pic14} alt="" />
        <img src={pic15} alt="" />
        <img src={pic16} alt="" />
      </InstagramImageGroup>
      <Footer />
    </>
  );
};
