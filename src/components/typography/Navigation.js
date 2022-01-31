import React from "react";
import Link from "./Link";
import "../../styles/Navigation.css";

const Navigation = () => {
  return (
    <>
      <nav id={"navigation"}>
        <Link reference={"#about"} txt={"o nas"} />
        <Link reference={"#offer"} txt={"oferta"} />
        <Link reference={"#contact"} txt={"kontakt"} />
      </nav>
    </>
  );
};

export default Navigation;
