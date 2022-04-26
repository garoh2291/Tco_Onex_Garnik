import React from "react";
import { serviceItems } from "../data/data";
import "../styles/smart_services_main.css";

export function SmartImage() {
  return (
    <div className="main-image">
      <img src="https://onex.am/images/smart-service.svg" alt="main" />
    </div>
  );
}

export function ServiceList() {
  return (
    <div className="service-text">
      <div className="service-list">
        {serviceItems.map((item) => (
          <li className="service-list-item">
            <img src={item.link} alt="service" />
            <span>{item.text}</span>
          </li>
        ))}
      </div>
      <div className="button-more-sector">
        <button className="more-button">
          <span>Ավելին</span>
          <i class="bx bx-right-arrow-alt"></i>
        </button>
      </div>
    </div>
  );
}
