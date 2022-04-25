import React from "react";
import '../styles/image_helper.css'

export default function ImageHelperItem(props) {
  return (
    <div className="info-item">
      <img src={props.src} alt="onex" />
      <p>{props.text}</p>
    </div>
  );
}
