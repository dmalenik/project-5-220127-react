import React from "react";
import Paragraph from "./Paragraph";
import servicesList from "../../servicesList";
import "../../styles/Service.css";

const Service = () => {
  let isNew = "(nowość)";
  let servicesBox = servicesList.map((item, key) => {
    if (item.id === 1) {
      return (
        <div className={"service"} key={item.id}>
          <Paragraph
            text={`${item.name} ${item.id} ${isNew}`}
            styles={"text"}
          />
          <div className="shape-design"></div>
        </div>
      );
    }
    return (
      <div className={"service"} key={item.id}>
        <Paragraph text={`${item.name} ${item.id}`} styles={"text"} />
      </div>
    );
  });
  return (
    <>
      <div className="box-services">{servicesBox}</div>
    </>
  );
};

export default Service;
