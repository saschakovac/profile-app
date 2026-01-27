import React from "react";
import "./Introduction.css";

const Introduction = () => {
  const name = "Nathan Mursch";
  const bio =
    "Hi! I'm Nathan, a student at Purdue University studying Web Development and Design and German.";

  return (
    <section className="intro">
      <h2 className="intro__title">Welcome!</h2>
      <p className="intro__text">{bio}</p>
      <p className="intro__email">Contact: nmursch@purdue.brightspace.com</p>
    </section>
  );
};

export default Introduction;
