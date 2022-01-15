import React from "react";
import {
  HomeWrapper,
  Left,
  Right,
  Title,
  Desc,
} from "../styledComponents/HomeStyles";
import Ill from "../assets/landing-page.png";
import ImageComponent from "../components/ImageComponent";
import LinkLikeButton from "../components/LinkLikeButton";
const Home = () => {
  return (
    <HomeWrapper>
      <Left>
        <Title>CryptoDASH</Title>
        <Desc>
          A place where you can track your favourite cryptos and get the latest
          news about them
        </Desc>
        <LinkLikeButton text="Get Started!" linkToWhere="/login" />
      </Left>
      <Right>
        <ImageComponent src={Ill} />
      </Right>
    </HomeWrapper>
  );
};

export default Home;
