import React from "react";
import "../../styles/Paragraph.css";

const Paragraph = ({ text, children, idStyles, styles }) => {
  return (
    <p id={idStyles} className={styles}>
      {text ?? children}
    </p>
  );
};

export default Paragraph;
