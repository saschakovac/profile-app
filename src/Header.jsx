import React from "react";
import "./Header.css";

const Header = () => {
  const appName = "Profile App";
  const tagline = "Lab 2 Assignment - JSX Components";

  return (
    <header className="header">
      <h1 className="header__title">{appName}</h1>
      <p className="header__tagline">{tagline}</p>
    </header>
  );
};

export default Header;
