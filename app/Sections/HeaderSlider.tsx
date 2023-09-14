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
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        margin: "60px 0"
      }}
      className="custom-slider-container"
    >
      <Slider {...settings}>
        {data.map((item) => (
          <Box sx={{
            minHeight: "472px",
            transform: "transform 0.3s ease"
          }}
          key={item.id} className="custom-slide">
            <Image style={{
              width: "100%",
            }} width={900} alt="img" src={item.img} />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default HeaderSlider;
