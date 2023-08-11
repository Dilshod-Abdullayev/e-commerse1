import React from "react";
import { Wrapper } from "./Header/Wrapper";
import { ImgTop } from "./ImgTop";
import About from "./About";
import Customer from "./Customer/Customer";
import Categories from "./Categories";
import { Subcribe } from "./Subcribe";
import Product from "./Product";
export default function Main() {
  return (
    <div className="main">
      <Wrapper />
      <ImgTop />
      <About />
      <Product/>
      <Customer />
      <Categories />
      <Subcribe />
    </div>
  );
}
