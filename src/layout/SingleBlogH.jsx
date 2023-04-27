import React from "react";
import { Link } from "../components/Link";
import "../assets/css/singleBlogH.css";
import { Breadcrumb } from "../components/Breadcrumb";
export const SingleBlogH = (props) => {
  const { src,bredcrumbLabel,heading,linkHref,linkLabel } = props;
  return (
    <div className="single-blog-h-wrapper">
      <img src={src} alt="" />
      <div className="texts-container">
        <Link href={linkHref} linkLabel={linkLabel} />
        <h3>
         {heading}
        </h3>
        <Breadcrumb label={bredcrumbLabel}/>
      </div>
    </div>
  );
};
