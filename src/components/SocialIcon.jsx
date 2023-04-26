import React from "react";
import "../assets/css/socialcon.css";
export const SocialIcon = (props) => {
  const { icon, href } = props;
  return <div className="social-icon">{icon}</div>;
};
