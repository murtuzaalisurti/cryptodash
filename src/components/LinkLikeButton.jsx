import React from "react";
import { LinkToButton } from "../styledComponents/LinkStyle";
const LinkLikeButton = ({ linkToWhere, text }) => {
  return (
    <LinkToButton to={linkToWhere}>{text ? text : "Get Started"}</LinkToButton>
  );
};

export default LinkLikeButton;
