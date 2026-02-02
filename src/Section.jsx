import React from "react";

export default function Section({ title, mode, children }) {
  return (
    <section className={`section ${mode === "dark" ? "section--dark" : ""}`}>
      <h2 className="section__title">{title}</h2>
      <div className="section__content">{children}</div>
    </section>
  );
}