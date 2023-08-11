import React, { useEffect, useState } from "react";
import { ShopBanner } from "./ShopBanner";
import Loader from "../../components/Loader";
import ShopBox from "./ShopBox";

export default function Shop() {
  const [data, setData] = useState();
  const [load, setLoad] = useState(true);
  useEffect(() => {
    fetch("http://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((call) => {
        setData(call);
        setLoad(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoad(false); // Set load to false even if there was an error
      });
  }, []);
  return (
    <div>
      <ShopBanner />
      {load ? <Loader /> : <ShopBox data={data} />}
    </div>
  );
}
