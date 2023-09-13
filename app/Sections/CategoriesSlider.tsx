import { Box, Link, Typography } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import {
  LeftArrowIcon,
  RightArrowIcon,
  AnchorArrowIcon,
} from "../assets/icons";
import { useTranslation } from "react-i18next";

import Category from "../components/Category";
import phone from "../assets/images/phone.png";
import airPods1 from "../assets/images/airPods1.png";
import airPods2 from "../assets/images/airPods2.png";
import battery from "../assets/images/battery.png";

const data = [
  {
    id: "1",
    title: "phone",
    category: "electronics",
    img: phone,
  },
  {
    id: "2",
    title: "battery",
    category: "electronics",
    img: battery,
  },
  {
    id: "3",
    title: "AirPods Pro",
    category: "electronics",
    img: airPods1,
  },
  {
    id: "4",
    title: "AirPods",
    category: "electronics",
    img: airPods2,
  },
  {
    id: "4",
    title: "AirPods",
    category: "electronics",
    img: phone,
  },
];
const CategoriesSlider: React.FC = () => {
  const { t } = useTranslation();

  const settings = {
    arrow: true,
    infinite: true,
    speed: 500,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <RightArrowIcon />,
    prevArrow: <LeftArrowIcon />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
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
        padding: { lg: "0 135px", xs: "0 50px" },
        margin: "60px 0",
      }}
    >
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography>{t("categories")}</Typography>
        <Link href="#" underline="hover">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span>{t("seeAll")}</span>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                verticalAlign: "middle",
              }}
            >
              <AnchorArrowIcon />
            </span>
          </Box>
        </Link>
      </Box>
      <Slider {...settings}>
        {data.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </Slider>
    </Box>
  );
};

export default CategoriesSlider;
