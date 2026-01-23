import React from "react";
import "./Card.css";

const Card2 = () => {
  const name = "Grant Aaron Mursch";
  const title = "Student @ Purdue University";
  const bio =
    "I'm Nathan's Brother!";

  return (
    <div className="card">
      <div className="card-body">
        <img src="src/assets/gmursch.png" alt="Profile" className="profile-image" />
        <h2 className="name">{name}</h2>
        <p className="title">{title}</p>
        <p className="bio">{bio}</p>
        <p className="contact">gmursch@purdue.brightspace.com</p>
      </div>
    </div>
  );
};

export default Card2;
