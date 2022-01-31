import React from "react";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import employeesList from "../../employeesList";
import "../../styles/Employees.css";

const Employees = () => {
  return (
    <>
      {employeesList.map((item, key) => {
        return (
          <article key={key} className="employees">
            <div
              className={key === 0 ? "portrait img1" : "portrait img2"}></div>
            <div className="description">
              <Heading
                lvl={2}
                children={`${item.firstName} ${item.lastName} ${item.position}`}
                styles={"credentials"}
              />
              <Paragraph>{item.cv}</Paragraph>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default Employees;
