import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "../layout/Layout";
import Main from "../components/Main";
import About from "../Pages/About/About";
import Shop from "../Pages/Shop/Shop";
import Pages from "../Pages/Pages/Pages";
import Projects from "../Pages/Projects/Projects";
import News from "../Pages/News/News";
import ShopPage from "../Pages/Shop/ShopPage";
export default function MainRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/news" element={<News />} />
          <Route />
        </Route>
        <Route path="/shop" element={<Shop />}>
          <Route path="/shop/:idCategory" component={ShopPage} />
        </Route>
      </Routes>
    </div>
  );
}
