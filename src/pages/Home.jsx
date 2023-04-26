import React from "react";
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
import { PaddingSection } from "../layout/PaddingSection";
import { PopularStoriesGroup } from "../layout/PopularStoriesGroup";
import { SinglePopularStory } from "../layout/SinglePopularStory";
import { Search } from "../components/Search";
import { BloggerCardVertical } from "../components/BloggerCardVertical";
//icons
const fb = <i class="bi bi-facebook"></i>;
const twitter = <i className="bi bi-twitter"></i>;
const pin = <i class="bi bi-pinterest"></i>;
const insta = <i class="bi bi-instagram"></i>;

const rightArrow = <i class="bi bi-arrow-right-short"></i>;
export const Home = () => {
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
              linkLabel='TRAVEL'
              heading="Sheets containing Ipsum passages & more"
              bredcrumbLabel="BY MICHEL JHON / 02 May 2021"
            />
            <SinglePopularStory
              src={Pic6}
              linkHref="#"
              linkLabel='FASHION'
              heading="Alteration in some form, by
                      injected humour"
              bredcrumbLabel="BY NATHAN / 02 May 2021"
            />
            <SinglePopularStory
              src={Pic7}
              linkHref="#"
              linkLabel='LIFESTYLE'
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
                abc
              </div>
              <div className="section3-wrapper-right">
                <Search placeholder='Search...'/>
                <BloggerCardVertical/>
              </div>
            </div>
          </section>

      </PaddingSection>
      <Footer />
    </>
  );
};
