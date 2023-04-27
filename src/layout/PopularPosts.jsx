import React from "react";
import "../assets/css/popularPosts.css";
export const PopularPosts = (props) => {
  const { heading } = props;
  return (
    <div>
      <div className="popular-post-heading">
        <p>{heading}</p>
        <hr />
      </div>
        {props.children}
    </div>
  );
};
