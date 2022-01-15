import React from "react";
import { HeaderWrapper } from "../styledComponents/Header";

const Header = ({ title, isLoggedIn }) => {
  return (
    <HeaderWrapper>
      <h3>{title}</h3>
      <button>{isLoggedIn ? "Logout" : "Login"}</button>
    </HeaderWrapper>
  );
};

export default Header;
