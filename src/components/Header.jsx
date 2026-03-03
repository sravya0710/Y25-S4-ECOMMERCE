import React from "react";
import "../App.css";
import Navlinks from "./Navlinks";

function Header() {
  return (
    <header className="header">
      <img
        src="/image/e-commerce.png"
        alt="E-commerce logo"
        className="logo"
      />
      <Navlinks />
    </header>
  );
}

export default Header;