import React from "react";
import Title from "../Title";
import "./styles.css"

export default function Header() {
  return (
    <div>
      <Title />
      <div className="main-image">
        <img alt="pizza image" src="https://img.taste.com.au/YfX0h9hC/taste/2017/10/mexican-taco-pizza-131640-1.jpg" />
      </div>
    </div>
  );
}
