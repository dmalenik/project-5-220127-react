import React from "react";
import Paragraph from "./Paragraph";
import Navigation from "./Navigation";
import "../../styles/Header.css";

const Header = () => {
  return (
    <>
      <header id="start">
        <Paragraph text={"moja firma"} idStyles={"logo"} />
        <Navigation />
      </header>
    </>
  );
};

export default Header;
