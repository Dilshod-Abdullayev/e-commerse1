import React from "react";
import Logo from "./Logo";
import "../../styles/style.css";
import Nav__list from "./Nav__list";
import SearchNav from "./SearchNav";
import SelectLang from "./SelectLang";
export default function Nav() {
  return (
    <div className="nav">
      <Logo />
      <Nav__list />
      <SearchNav />
      <SelectLang/>
    </div>
  );
}
