import { useState } from "react";
import Counter from "./Counter";
import Item from "./Item";
import TotalPrice from "./TotalPrice";
import People from "./People";

type Theme = "blue" | "red";
export default function Day13() {
  const [theme, setTheme] = useState<Theme>("blue");
  const [price, setPrice] = useState(0);

  const toggleTheme = () => {
    setTheme(theme === "red" ? "blue" : "red");
  };

  const increasePrice = () => {
    setPrice(price + 100);
  };

  return (
    <div>
      <h1>Day 13 States</h1>
      <div>Current Price: {price}</div>

      {/* <Counter /> */}
      <button onClick={toggleTheme}>Toggle Theme</button>
      <button disabled={price>5000} onClick={increasePrice}>Increase Price</button>
      <br />
      <br />
      <br />
      <br />
      {/* <Box theme={theme} />
      <Foo />
      <Item price={price} /> */}

      {/* <TotalPrice /> */}
      {/* <ShowAndHide /> */}
      {/* <UpdatingArray /> */}
      <People />
    </div>
  );
}

function Box({ theme }: { theme: Theme }) {
  //  console.log("box re-render");
  return (
    <div
      style={{
        // backgroundColor: theme,
        width: "500px",
        margin: "20px auto",
      }}
    >
      This is a box: <span style={{ color: theme }}>{theme}</span>
    </div>
  );
}
