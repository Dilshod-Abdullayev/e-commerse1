import React from "react";
import Nav from "./Navbar/Nav";
import { Wrapper } from "./Header/Wrapper";
import { ImgTop } from "./ImgTop";
import About from "./About";
import Customer from "./Customer/Customer";
export default function Main() {
  return (
    <div className="main">
      <Nav />
      <Wrapper />
      <ImgTop />
      <About />
      <Customer />
    </div>
  );
}
