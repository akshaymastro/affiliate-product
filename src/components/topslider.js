import React from "react";
import Slider from "react-slick";
import { Image } from "semantic-ui-react";
import Categories from "../components/Categories";

export default function TopSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="home-page">
      <Slider settings={settings}>
        <div>
          <Image
            src=" https://static.6degrees.cash/images/banners/banner_4_en.png"
            wrapped
          />
        </div>
        <div>
          <Image
            src=" https://static.6degrees.cash/images/banners/banner_3_en.png"
            wrapped
          />
        </div>
        <div>
          <Image
            src=" https://static.6degrees.cash/images/banners/banner_1_en.png
         "
            wrapped
          />
        </div>
        <div>
          <Image
            src=" https://static.6degrees.cash/images/banners/banner_1_en.png
         "
            wrapped
          />
        </div>
      </Slider>
   
    </div>
  );
}
