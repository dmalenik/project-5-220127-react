import React from "react";
import Heading from "./Heading";
import Employees from "./Employees";
import "../../styles/About.css";

const About = () => {
  return (
    <>
      <section id="about">
        <Heading
          lvl={1}
          children={"Nasi specjaliści"}
          styles={"about-slogan"}
        />
        <Employees />
      </section>
    </>
  );
};

export default About;
