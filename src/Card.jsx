import React from "react";
import "./Card.css";

const Card = () => {
  const name = "Nathan Eric Mursch";
  const title = "Student @ Purdue University";
  const bio =
    "I'm Aaron's Brother!";

  return (
    <div className="card">
      <div className="card-body">
        <img alt="Profile" className="profile-image" src={`${import.meta.env.BASE_URL}assets/nmursch.jpg`}/>
        <h2 className="name">{name}</h2>
        <p className="title">{title}</p>
        <p className="bio">{bio}</p>
        <p className="contact">nmursch@purdue.brightspace.com</p>
      </div>
    </div>
  );
};

export default Card;
