import React from "react";
import "../../styles/Heading.css";

const Heading = ({ lvl, children, styles }) => {
  let HeadingType;
  switch (lvl) {
    case 1:
      HeadingType = "h1";
      break;
    case 2:
      HeadingType = "h2";
      break;
    case 3:
      HeadingType = "h3";
      break;
    default:
      HeadingType = "h1";
  }
  return <HeadingType className={styles}>{children}</HeadingType>;
};

export default Heading;
