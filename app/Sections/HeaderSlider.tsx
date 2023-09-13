import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import placeholder from "../assets/images/placeholder.svg";
import { Box } from "@mui/material";

const data = [
  {
    id: "1",
    img: placeholder,
  },
  {
    id: "2",
    img: placeholder,
  },
  {
    id: "3",
    img: placeholder,
  },
  {
    id: "4",
    img: placeholder,
  },
  {
    id: "5",
    img: placeholder,
  },
];

const HeaderSlider: React.FC = () => {
  // const settings = {
  //   className: "center",
  //   centerMode: true,
  //   infinite: true,
  //   centerPadding: "60px",
  //   slidesToShow: 1,
  //   speed: 500,
  //       autoplay: true, // Enable automatic sliding
  //   autoplaySpeed: 2000, 
  //   responsive: [
  //     {
  //       breakpoint: 500,
  //       settings: {
  //         slidesToShow: 1,
  //       },
  //     },
  //   ],
  // };
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '0',
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    arrows: false,
  };
  return (
    <div
      // sx={{
      //   width: "100%",
      //   height: "auto",
      //   margin: "60px 0",
      // }}
      className="image-slider"
    >
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index} className="image-slide">
          <img src={item.img} alt={`Slide ${index + 1}`} />
        </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeaderSlider;
