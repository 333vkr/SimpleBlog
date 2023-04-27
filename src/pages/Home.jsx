import React, { useEffect, useState } from "react";
import { Header } from "../layout/Header";
import { Footer } from "../layout/Footer";
import "../assets/css/section1.css";
import { SocialIconGroup } from "../layout/SocialIconGroup";
import { SocialIcon } from "../components/SocialIcon";
import Cover1Img from "../assets/images/cover1.png";
import { Breadcrumb } from "../components/Breadcrumb";
import { Heading1 } from "../components/Heading1";
import { ShortDescription } from "../components/ShortDescription";
import { CTAButton } from "../components/CTAButton";
import { RandomImageGroup } from "../layout/RandomImageGroup";
import Pic1 from "../assets/images/yourpic.png";
import Pic2 from "../assets/images/yourpic (1).png";
import Pic3 from "../assets/images/yourpic (2).png";
import Pic4 from "../assets/images/yourpic (3).png";
import Pic5 from "../assets/images/pic.png";
import Pic6 from "../assets/images/pic1.png";
import Pic7 from "../assets/images/pic (1).png";
import pic8 from "../assets/images/yourpic (4).png";
import pic9 from "../assets/images/yourpic (5).png";
import pic10 from "../assets/images/pic (2).png";
import pic11 from "../assets/images/yourpic (6).png";
import pic12 from "../assets/images/yourpic (7).png";
import pic13 from "../assets/images/yourpic (8).png";
import pic14 from "../assets/images/yourpic (9).png";
import pic15 from "../assets/images/yourpic (10).png";
import pic16 from "../assets/images/yourpic (11).png";
import { PaddingSection } from "../layout/PaddingSection";
import { PopularStoriesGroup } from "../layout/PopularStoriesGroup";
import { SinglePopularStory } from "../layout/SinglePopularStory";
import { Search } from "../components/Search";
import { BloggerCardVertical } from "../components/BloggerCardVertical";
import { SingleBlogH } from "../layout/SingleBlogH";
import { PaginationButton } from "../components/PaginationButton";
import { InstagramImageGroup } from "../layout/InstagramImageGroup";
import { getArticles } from "../API/apis";

//icons
const fb = <i class="bi bi-facebook"></i>;
const twitter = <i className="bi bi-twitter"></i>;
const pin = <i class="bi bi-pinterest"></i>;
const insta = <i class="bi bi-instagram"></i>;

const rightArrow = <i class="bi bi-arrow-right-short"></i>;
export const Home = () => {

  const [articles,setArticles]=useState([])
  useEffect(()=>{
    let articles=getArticles()
    articles.then((res)=>{
      console.log(res);
      setArticles(res.data)
    })
  },[])




  const HeadingOneLabel = "Life is a flower of which love is the honey.";
  const shortDescription =
    "When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees";
  return (
    <>
      <Header />
      {/* section one  */}
      <section>
        <div className="section1">
          <div className="section1-child">
            <img src={Cover1Img} alt="" className="left-cover" />
            <SocialIconGroup
              style={{ position: "relative", bottom: "100px", left: "40px" }}
            >
              <SocialIcon icon={fb} />
              <SocialIcon icon={twitter} />
              <SocialIcon icon={pin} />
              <SocialIcon icon={insta} />
            </SocialIconGroup>
          </div>
          <div className="section1-child">
            <div className="section1-right-texts">
              <Breadcrumb label="BY EMMA / 02 MAY 2021" />
              <Heading1 label={HeadingOneLabel} />
              <ShortDescription description={shortDescription} />
              <CTAButton label={"READ MORE"} icon={rightArrow} />
            </div>
          </div>

          {/* random image slider in home section  */}
          <RandomImageGroup>
            <img src={Pic1} alt="random pic one" />
            <img src={Pic2} alt="random pic two" />
            <img src={Pic3} alt="random pic three" />
            <img src={Pic4} alt="random pic four" />
          </RandomImageGroup>
        </div>
      </section>
      <PaddingSection>
        {/* section 2 */}
        <section>
          <div className="heading-ruler-wrapper">
            <hr />
            <p>POPULAR STORIES</p>
            <hr />
          </div>
          <PopularStoriesGroup>

            <SinglePopularStory
              src={Pic5}
              linkHref="#"
              linkLabel="TRAVEL"
              heading="Sheets containing Ipsum passages & more"
              bredcrumbLabel="BY MICHEL JHON / 02 May 2021"
            />
            <SinglePopularStory
              src={Pic6}
              linkHref="#"
              linkLabel="FASHION"
              heading="Alteration in some form, by
                      injected humour"
              bredcrumbLabel="BY NATHAN / 02 May 2021"
            />
            <SinglePopularStory
              src={Pic7}
              linkHref="#"
              linkLabel="LIFESTYLE"
              heading="Control about the blind text it almostunorthographic"
              bredcrumbLabel="BY NATHAN / 02 May 2021"
            />
          </PopularStoriesGroup>
          <hr />
        </section>
        {/* section 3 */}
        <section>
          <div className="section3-wrapper">
            <div className="section3-wrapper-left">
            {articles.slice(3,6).map((article,i)=>(
              <SingleBlogH
                src={pic8}
                bredcrumbLabel="BY MICHEL JOHN / 02 May 2021"
                heading={article.title}
                linkHref="#"
                linkLabel="LIFESTYLE"
              />
            ))}
              {/* <SingleBlogH
                src={pic8}
                bredcrumbLabel="BY MICHEL JOHN / 02 May 2021"
                heading="There are many variations of passages of available not
                the majority have suffered alteration"
                linkHref="#"
                linkLabel="LIFESTYLE"
              />
              <SingleBlogH
                src={pic10}
                bredcrumbLabel="BY MICHEL JOHN / 02 May 2021"
                heading="Possession of my entire soul, like these sweet mornings of
                spring which I enjoy with my whole heart."
                linkHref="#"
                linkLabel="TRAVEL"
              />
              <SingleBlogH
                src={pic9}
                bredcrumbLabel="BY MICHEL JOHN / 02 May 2021"
                heading="Feel the charm of existence in this spot, which was created
                for the bliss of souls like mine"
                linkHref="#"
                linkLabel="INTERIOR"
              /> */}
            </div>
            <div className="section3-wrapper-right">
              <Search placeholder="Search..." />
              <BloggerCardVertical />
            </div>
          </div>
          <div className="pagination-btn-wrapper">
            <PaginationButton label='1' isActive={true}/>
            <PaginationButton label='2' isActive={false}/>
            <CTAButton  label='NEXT' icon={<i class="bi bi-chevron-right"></i>}/>
          </div>
        </section>
      </PaddingSection>
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
  );
};
