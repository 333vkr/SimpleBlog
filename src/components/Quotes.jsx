import React from "react";
import "../assets/css/quotes.css";
export const Quotes = (props) => {
  return <div className="quotes-wrapper">
  <i class="bi bi-quote"></i>
  <div className="quote-group">
  <p className="quote">{props.quote}</p>
  <p className="name">-{props.name}</p>
  </div>
  </div>;
};
