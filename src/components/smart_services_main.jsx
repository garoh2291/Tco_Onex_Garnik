import React from "react";
import "../styles/smart_services_main.css";
import {  ServiceList, SmartImage } from "./smart_services_main_content";

export default function SmartServicesMain() {
  return (
    <div className="smart-main-content">
      <SmartImage />
      <ServiceList />
    </div>
  );
}
