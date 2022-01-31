import React from "react";
import Paragraph from "./Paragraph";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import "../../styles/Footer.css";

const Footer = () => {
  return (
    <>
      <section id="copyright">
        <Paragraph styles={"text-copyright"}>
          Nazwa firmy - wszelkie prawa zastrzeżone, 2019
        </Paragraph>
        <div className="icons">
          <FaInstagram size={28} color="white" />
          <FaFacebookSquare size={28} color="white" />
        </div>
      </section>
    </>
  );
};

export default Footer;
