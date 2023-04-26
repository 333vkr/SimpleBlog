import React from "react";

import '../assets/css/pargraphs.css'
export const ShortDescription = (props) => {
  const { description, style } = props;
  return (
    <div style={style} className="description-container">
      <p className="description-text">{description}</p>
    </div>
  );
};
