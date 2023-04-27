import React from "react";
import "../assets/css/article.css";
import { Breadcrumb } from "./Breadcrumb";
import { Link } from "./Link";
import { PopularStoriesGroup } from "../layout/PopularStoriesGroup";
import { SinglePopularStory } from "../layout/SinglePopularStory";

export const Article = (props) => {
  const { linkLabel, href, heading, label, fImageSrc } = props;
  return (
    <div className="article-wrapper">
      <Link linkLabel={linkLabel} href={href} />
      <h3>{heading}</h3>
      <Breadcrumb label={label} />
      <img src={fImageSrc} alt="" className="featured-img" />
      <div className="article-text">{props.children}</div>
    </div>
  );
};
