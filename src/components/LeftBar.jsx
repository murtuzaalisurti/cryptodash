import React from "react";
import FavIcon from "../assets/fav-icon.png";
import NewsIcon from "../assets/news-icon.png";
import { Link } from "react-router-dom";
import { Img, LeftBarWrapper } from "../styledComponents/LeftBar";
const LeftBar = () => {
  return (
    <LeftBarWrapper>
      <Link to="/fav">
        <Img src={FavIcon} alt="" />
      </Link>
      <Link to="/news">
        <Img src={NewsIcon} alt="" />
      </Link>
    </LeftBarWrapper>
  );
};

export default LeftBar;
