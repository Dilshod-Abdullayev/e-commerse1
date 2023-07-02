import React from "react";
import Nav from "./Navbar/Nav";
import { Wrapper } from "./Header/Wrapper";
export default function Main() {
  return (
    <div className="main">
      <Nav />
      <Wrapper/>
    </div>
  );
}
