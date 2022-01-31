import React from "react";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import "../../styles/Main.css";

const Main = () => {
  return (
    <>
      <section id="main">
        <Heading lvl={1} styles={"slogan-main-1"}>
          Nasza firma oferuje najwyzszej jakości produkty
        </Heading>
        <Heading lvl={2} styles={"slogan-main-2"}>
          Nie wierz nam na słowo - sprawdź
        </Heading>
        <a href="#offer">
          <button className="button">
            <Paragraph text={"oferta"} styles={"text-bolder"} />
          </button>
        </a>
      </section>
    </>
  );
};

export default Main;
