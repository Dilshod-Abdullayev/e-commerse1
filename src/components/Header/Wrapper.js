import React, { useState, useEffect } from "react";
import { StyledGrey, StyledTitle } from "../../styles/TextStyles/TextItem";
import { StyledYellow } from "../../styles/TextStyles/ButtonStyled";
import { AiOutlineArrowRight } from "react-icons/ai";
import "../../styles/style.css";
export const Wrapper = () => {
  const [background, setBackground] = useState(
    "https://images.unsplash.com/photo-1561047029-3000c68339ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29mZmVlJTIwY3VwfGVufDB8fDB8fHww&w=1000&q=80"
  );
  const images = [
    "https://img.freepik.com/premium-photo/beautiful-mountain-range-reflects-tranquil-water-generative-ai_188544-9117.jpg",
    "https://i.ytimg.com/vi/OxoUada5Cok/maxresdefault.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0jzdFr8eamyBoozd68YCNAOhFyUBXVbbvtA&usqp=CAU",
  ];
  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * images.length);
      const randomImg = images[randomIndex];
      setBackground(randomImg);
    }, 3000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div className="wrapper" style={{ backgroundImage: `url(${background})` }}>
      <StyledGrey>100% Natural Food</StyledGrey>
      <StyledTitle>Choose the best healthier way of life</StyledTitle>
      <StyledYellow>
        Explore Now <AiOutlineArrowRight />
      </StyledYellow>
    </div>
  );
};
