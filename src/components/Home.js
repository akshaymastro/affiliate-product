import React from "react";
import Slider from "react-slick";
import Categories from "../components/Categories";
import Feature from "../components/Features";
export default function Home() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="home-page">
      <Categories />
      <Feature />
    </div>
  );
}
