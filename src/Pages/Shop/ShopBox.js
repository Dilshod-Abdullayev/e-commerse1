import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom"; // React Router'dan Link bileşenini içe aktarın
import "../../styles/style.css";
const { Meta } = Card;
export default function ShopBox({ data }) {
  return (
    <div className="shopboxs">
      {data.categories.map((item) => (
        <Link key={item.idCategory} to={`/shop/${item.idCategory}`}>
          <Card
            className="shop__box"
            hoverable
            style={{
              width: 300,
            }}
            cover={<img alt="example" src={item.strCategoryThumb} />}
          >
            <Meta title={item.strCategory} description="www.instagram.com" />
          </Card>
        </Link>
      ))}
    </div>
  );
}
