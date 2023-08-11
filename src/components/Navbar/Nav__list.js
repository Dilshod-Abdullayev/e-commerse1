import React from "react";
import "../../styles/style.css";
import { data_nav } from "../../data/data";
import { StyledList } from "../../styles/TextStyles/TextItem";
import { Link } from "react-router-dom";
export default function Nav__list() {
  return (
    <ul className="nav__items">
      {data_nav.map((item) => (
        <Link key={item.id} to={item.path}>
          <StyledList>{item.text}</StyledList>
        </Link>
      ))}
    </ul>
  );
}
