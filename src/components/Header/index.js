import React from "react";
import Title from "../Title";
import "./styles.css"

export default function Header() {
  return (
    <div>
      <section>
        <Title />
        <div className="main-image">
          <img alt="pizza" src="https://img.taste.com.au/YfX0h9hC/taste/2017/10/mexican-taco-pizza-131640-1.jpg" />
        </div>
      </section>
    </div>
  );
}
