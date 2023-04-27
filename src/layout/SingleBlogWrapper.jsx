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
import fImage from "../assets/images/yourpic (22).png";
import { Search } from "../components/Search";
import { PopularPosts } from "./PopularPosts";
import { SinglePopularPost } from "../components/SinglePopularPost";
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

            <q>abcd</q>
          </Article>
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



          <PopularPosts heading='CATEGORIES'></PopularPosts>
          <PopularPosts heading='TAGS'></PopularPosts>
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
