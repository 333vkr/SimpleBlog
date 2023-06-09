import React from "react";
import "../assets/css/singleBlog.css";
import { Link } from "../components/Link";
import { Article } from "../components/Article";
import { PopularStoriesGroup } from "./PopularStoriesGroup";
import { SinglePopularStory } from "./SinglePopularStory";
import Pic5 from "../assets/images/pic.png";
import Pic6 from "../assets/images/pic1.png";
import Pic7 from "../assets/images/pic (1).png";
import Pic8 from "../assets/images/yourpic (23).png";
import Pic9 from "../assets/images/pic (3).png";
import Pic10 from "../assets/images/yourpic (24).png";
import Pic11 from "../assets/images/pic (4).png";
import Pic12 from "../assets/images/pic (5).png";
import Pic13 from "../assets/images/yourpic (25).png";
import Pic14 from "../assets/images/yourpic (26).png";
import Pic15 from "../assets/images/yourpic (27).png";
import Pic16 from "../assets/images/pic (6).png";
import Pic17 from "../assets/images/yourpic (28).png";
import Pic18 from "../assets/images/pci.png";
import fImage from "../assets/images/yourpic (22).png";
import { Search } from "../components/Search";
import { PopularPosts } from "./PopularPosts";
import { SinglePopularPost } from "../components/SinglePopularPost";
import { SingleCategoryComponent } from "../components/SingleCategoryComponent";
import { SingleTag } from "../components/SingleTag";
import { Quotes } from "../components/Quotes";
import { SocialIconGroup } from "./SocialIconGroup";
import { SocialIcon } from "../components/SocialIcon";
import { BloggerCardHorizontal } from "../components/BloggerCardHorizontal";
import { PreviousNext } from "../components/PreviousNext";

//icons
const fb = <i class="bi bi-facebook" style={{color:'#3B5998'}}></i>;
const twitter = <i className="bi bi-twitter" style={{color:'#00ACED'}}></i>;
const pin = <i class="bi bi-pinterest" style={{color:'#E60023'}}></i>;
const insta = <i class="bi bi-vimeo" style={{color:'#000000'}}></i>;
export const SingleBlogWrapper = () => {
  return (
    <>
      <div className="single-blog-wrapper">
        <div className="single-blog-article">
          <Article
            linkLabel="LIFESTYLE"
            href="#"
            heading="Minstry are many variations of passages
            available not the majority"
            label="BY EMMA JACSON / 02 MAY 2021"
            fImageSrc={fImage}
          >
            <p className="first">
              Existence, that I neglect my talents. I should be incapable of
              drawing a single stroke at the present moment; and yet I feel that
              I never was a greater artist than now Face of the impenetrable
              foliage.Sense of mere tranquil existence, that I neglect my
              talents. I should be incapable of drawing a single stroke at the
              present moment; and yet I feel that I never was a greater artist
              than now
            </p>
            <p>
              Face of the impenetrable foliage of my trees, and but a few stray
              gleams steal into the inner sanctuary, I throw myself down among
              the tall grass by the trickling stream; and, as I lie close to the
              earth, a thousand unknown plants are noticed by me: when I hear
              the buzz of the little world among the stalks, and grow familiar
              with the countless indescribable forms of the insects and flies
            </p>
            <Quotes
              quote="Mornings of spring which I enjoy with my whole heart. I am alone, and
feel the charm of existence in this spot, which was created"
              name="LYNDA JACSON"
            />
            <h3 className="sub-heading">
              Familiar with the countless indescribable
            </h3>
            <p>
              Dorizon the impenetrable foliage of my trees, and but a few stray
              gleams steal into the inner sanctuary, I throw myself down among
              the tall grass by the trickling stream; and, as I lie close to the
              earth, a thousand unknown plants are noticed by me: when I hear
              the buzz of the little world among the stalks, and grow familiar
              with the countless indescribable
            </p>
            {/* image  */}
            <div className="inner-article-img-group">
              <img src={Pic16} alt="" />
              <img src={Pic17} alt="" />
            </div>
            <h3 className="sub-heading">Serenity has taken possession</h3>
            <p>
              Dorizon the impenetrable foliage of my trees, and but a few stray
              gleams steal into the inner sanctuary, I throw myself down among
              the tall grass by the trickling stream; and, as I lie close to the
              earth, a thousand unknown plants are noticed by me: when I hear
              the buzz of the little
            </p>
          </Article>

          <div style={{ display: "flex", alignItems: "center" }}>
            SHARES :{" "}
            <SocialIconGroup>
              <SocialIcon icon={fb} />
              <SocialIcon icon={twitter} />
              <SocialIcon icon={pin} />
              <SocialIcon icon={insta} />
            </SocialIconGroup>
          </div>

          <BloggerCardHorizontal
            src={Pic18}
            name="Emma Jacson"
            title="BLOGGER"
            description="Hello, I am in his into a horrible lay on his armour-like back horrible vermin. He lay
on his armour Face of the impenetrable foliage of my trees"
          />

          {/* Previous and next btn  */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              margin: "6% 0",
            }}
          >
            <PreviousNext
              isPrevious={true}
              btnLabel="PREVIOUS POST"
              postLabel="Describable forms of the insects"
            />
            <PreviousNext
              isPrevious={false}
              btnLabel="PREVIOUS POST"
              postLabel="Describable forms of the insects"
            />
          </div>
        </div>

        <div className="single-blog-right-side">
          <Search placeholder="Search..." style={{ width: "100%" }} />
          <PopularPosts heading="POPULAR POSTS">
            <SinglePopularPost
              heading="Meridian sun strikes the
upper surface of the
impenetrable"
              breadcrumbLabel="02 MAY 2021"
              src={Pic8}
            />
            <SinglePopularPost
              heading="Impenetrable foliage of
my trees, and but a few
stray gleams"
              breadcrumbLabel="02 MAY 2021"
              src={Pic9}
            />
            <SinglePopularPost
              heading="Myself down among the
tall grass by the trickling
stream"
              breadcrumbLabel="02 MAY 2021"
              src={Pic10}
            />
          </PopularPosts>

          <div className="single-image-container">
            <img src={Pic11} alt="" />
          </div>

          <PopularPosts heading="CATEGORIES">
            <div className="categories-wrapper">
              <SingleCategoryComponent src={Pic12} label="Lifestyle" />
              <SingleCategoryComponent src={Pic13} label="Travel" />
              <SingleCategoryComponent src={Pic14} label="Fashion" />
              <SingleCategoryComponent src={Pic15} label="Interior" />
            </div>
          </PopularPosts>
          <PopularPosts heading="TAGS">
            <div className="categories-wrapper">
              <SingleTag tagName="Art & Design" />
              <SingleTag tagName="Interior" />
              <SingleTag tagName="Modern" />
              <SingleTag tagName="Travel" />
              <SingleTag tagName="Home Decor" />
              <SingleTag tagName="Fashion" />
            </div>
          </PopularPosts>
        </div>
      </div>
      <div>
        <div className="heading-ruler-wrapper">
          <hr />
          <p>RELATED POSTS</p>
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
      </div>
    </>
  );
};
