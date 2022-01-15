import React from "react";
import { ButtonStyle } from "../styledComponents/ButtonStyles";
const Button = ({ text, handleClick }) => {
  return (
    <ButtonStyle type="submit" onClick={handleClick}>
      {text ? text : "Submit"}
    </ButtonStyle>
  );
};

export default Button;
