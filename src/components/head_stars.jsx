import React from "react";
import "../styles/head_stars.css";

export default function HeadStars(props) {
  return (
    <div className="head-stars">
      <i className={`${props.type} bx bxs-star`}></i>
      <i class="bx bxs-star"></i>
      <i class="bx bxs-star"></i>
      <i class="bx bxs-star"></i>
      <i className={`${props.type} bx bxs-star`}></i>
    </div>
  );
}
