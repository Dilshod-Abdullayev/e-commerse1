import React from "react";
import "../../styles/style.css";
import { data_nav } from "../../data/data";
import { StyledList } from "../../styles/TextStyles/TextItem";
export default function Nav__list() {
  return (
    <ul className="nav__items">
      {data_nav.map((item) => (
        <StyledList>{item.text}</StyledList>
      ))}
    </ul>
  );
}
