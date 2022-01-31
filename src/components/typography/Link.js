import React from "react";
import Paragraph from "./Paragraph";
import "../../styles/Link.css";

const Link = ({ reference, txt }) => {
  if (reference === "#contact") {
    return (
      <a href={reference} className="menu-element disabled">
        <Paragraph text={txt} styles={"text-white"} />
      </a>
    );
  }
  return (
    <a href={reference} className="menu-element">
      <Paragraph text={txt} styles={"text-white"} />
    </a>
  );
};

export default Link;
