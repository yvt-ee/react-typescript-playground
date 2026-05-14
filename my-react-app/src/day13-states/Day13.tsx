import { useState } from "react";
import Counter from "./Counter";
import Item from "./Item";
import TotalPrice from "./TotalPrice";
import People from "./People";

type Theme = "blue" | "red";
export default function Day13() {
  const [price, setPrice] = useState(0);

  const increasePrice = () => {
    setPrice(price + 100);
  };

  return (
    <div>
      <h1>Day 13 States</h1>
      <div>Current Price: {price}</div>

      <button disabled={price>5000} onClick={increasePrice}>Increase Price</button>
      <People />
    </div>
  );
}
