import React from "react";
import '../assets/css/ctaButtons.css'
export const CTAButton = (props) => {
  const { label, icon, style } = props;
  return (
    <button style={style} className="cta-btn">
      {label} <span className="cta-icon">{icon}</span>
    </button>
  );
};
