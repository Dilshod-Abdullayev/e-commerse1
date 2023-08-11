import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom"; // useParams hook'unu içe aktarın
import '../../styles/style.css';
export default function ShopPage() {
  const [count, setCount] = useState(0);
  const handleIncr = () => {
    if (count < 1) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };
  let sum = count * 10000;

  // useParams hook'unu kullanarak URL'den parametreleri alın
  const { idCategory } = useParams();
  console.log(idCategory);
  return (
    <div className="shopbox__page">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuS8AimFv-GUOXPAeo6uz-2YIl9btD5P2xzA&usqp=CAU" />
      <div className="shopbox__info">
        <h1>Health Pistachios</h1>
        <p>
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley.
        </p>
        <div className="counter__product">
          <div className="counter__btns">
            <button onClick={handleIncr}>-</button>
            <span>{count}</span>
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
          <h1>Narx{sum}</h1>
        </div>
      </div>
    </div>
  );
}
