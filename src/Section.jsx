import React from "react";
import "./Section.css";

const Section = ({ title, children }) => {
  return (
    <section className="section">
      <div className="section__header">
        <h2 className="section__title">{title}</h2>
      </div>

      <div className="section__content">{children}</div>
    </section>
  );
};

export default Section;
