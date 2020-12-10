import React from "react";
import Slider from "react-slick";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import TopSlider from "../components/topslider";
import Feature from "../components/Features";
import Footer from "../components/Footer";
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
      <Navbar />
      <TopSlider />
      <Categories />
      <Feature />
      <Footer/>
    </div>
  );
}
