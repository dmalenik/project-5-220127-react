import React from "react";
import Heading from "./Heading";
import Service from "./Service";
import "../../styles/Offer.css";

const Offer = () => {
  return (
    <>
      <section id="offer">
        <Heading lvl={1} styles={"slogan-offer"}>
          Czym zajmuje się nasza firma?
        </Heading>
        <Service />
      </section>
    </>
  );
};

export default Offer;
