import React from "react";
import Slider from "react-slick";
import { Image } from "semantic-ui-react";

export default function Home() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
  };

  return (
    <div className="">
      <div className="categories-list">
        <Slider {...settings}>
          <div className="catgry-img">
            <Image
              src="https://static.6degrees.cash/images/home-page/Finance.png"
              wrapped
            />
            <p>
              <a href="/shop">Finance</a>
            </p>
          </div>
          <div className="catgry-img">
            <Image
              src="https://static.6degrees.cash/images/home-page/Health-Beauty.png"
              wrapped
            />
            <p>Health & Beauty</p>
          </div>
          <div className="catgry-img">
            <Image
              src="https://static.6degrees.cash/images/home-page/Travel.png"
              wrapped
            />
            <p>Travel</p>
          </div>
          <div className="catgry-img">
            <Image
              src="https://static.6degrees.cash/images/home-page/Fashion.png"
              wrapped
            />
            <p>Fashion</p>
          </div>
          <div className="catgry-img">
            <Image
              src="https://static.6degrees.cash/images/home-page/LIFESTYLE.png"
              wrapped
            />
            <p>Lifestyle</p>
          </div>
          <div className="catgry-img">
            <Image
              src="https://static.6degrees.cash/images/home-page/marketplace.png"
              wrapped
            />
            <p>Marketplace</p>
          </div>
          <div className="catgry-img">
            <Image
              src="https://static.6degrees.cash/images/home-page/marketplace.png"
              wrapped
            />
            <p>Marketplace</p>
          </div>
          <div className="catgry-img">
            <Image
              src="https://static.6degrees.cash/images/home-page/services.png"
              wrapped
            />
            <p>Services</p>
          </div>
          <div className="catgry-img">
            <Image
              src="https://static.6degrees.cash/images/home-page/services.png"
              wrapped
            />
            <p>Services</p>
          </div>
        </Slider>
      </div>
    </div>
  );
}
