import React from "react";
import "../App.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import data from "./Data";

function Gallery() {
  const settings = {
    className: "center",
    focusOnSelect: true,
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    speed: 500,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  let galleryImages = data.map((item) => (
    // < div >
    //     <img className="sliderImg" src={require(`../images/pizzas/product${index + 1}.jpg`)} alt="" />
    // </div >

    <img className="sliderImg" src={item} alt="" />
  ));

  // let galleryImages = names.map(name => {
  //     <div>
  //         <img
  //             src={require(`../images/pizzas/${name}.jpg`)}
  //             alt=""
  //             className="img-responsive" />
  //     </div>
  // });

  return (
    <div className=" row ">
      <div className="container-fluid">
        <Slider className="mt-5  " {...settings}>
          {galleryImages}
        </Slider>

        {/* <img className="sliderImg" src={require('./images/timer.png')} alt="" /> */}
      </div>
    </div>
  );
}

export default Gallery;
