import React from "react";
import "../assets/css/previousNext.css";
export const PreviousNext = (props) => {
  const { isPrevious, btnLabel, postLabel } = props;
  return (
    <div className="previous-next-wrapper">
      <button className={isPrevious?'previous':'next'}>{btnLabel}</button>
      <p className={isPrevious?'previous':'next'}>{postLabel}</p>
    </div>
  );
};
