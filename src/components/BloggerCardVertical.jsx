import React from "react";
import "../assets/css/bloggerCard.css";
import BloggerImg from '../assets/images/pci.png'
export const BloggerCardVertical = (props) => {
  return (
    <div className="blogger-card-wrapper">
      <img src={BloggerImg} alt="" />
      <p className="name-p">Emma Jacson</p>
      <p className="blogger-type">BLOGGER</p>
      <p className="description">
        Hello, I am in his into a horrible lay on his armour-like back horrible
        vermin. He lay on his armour
      </p>
    </div>
  );
};
