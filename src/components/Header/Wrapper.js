import React from "react";
import { StyledGrey, StyledTitle } from "../../styles/TextStyles/TextItem";
import { StyledYellow } from "../../styles/TextStyles/ButtonStyled";
import { AiOutlineArrowRight } from "react-icons/ai";
import '../../styles/style.css'
export const Wrapper = () => {
  return (
    <div className="wrapper">
      <StyledGrey>100% Natural Food</StyledGrey>
      <StyledTitle>Choose the best healthier way of life</StyledTitle>
      <StyledYellow>
        Explore Now <AiOutlineArrowRight />
      </StyledYellow>
    </div>
  );
};
