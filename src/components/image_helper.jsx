import React from "react";
import ImageHelperItem from "./image_helper_item";

export default function ImageHelper() {
  return (
    <div className="info-div">
      <ImageHelperItem
        src="https://onex.am/img/svg/step1.svg"
        text="Գրանցվե՛ք մեր կայքում
և անվճար ստացե՛ք առաքման հասցեներ"
      />
      <ImageHelperItem
        src="https://onex.am/img/svg/step2.svg"
        text="Օգտագործե՛ք Ձեզ տրամադրված առաքման հասցեները կայքերից գնումներ կատարելիս"
      />
      <ImageHelperItem
        src="https://onex.am/img/svg/step3.svg"
        text="Ստացե՛ք Ձեր գնումները ՀՀ բոլոր քաղաքներում և Արցախում"
      />
    </div>
  );
}
