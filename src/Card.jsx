import React from "react";
import "./Card.css";

export default function Card({
  name,
  title,
  year,
  major,
  email,
  imageSrc,
  isFeatured,
}) {
  return (
    <div className="card">
      <div className={`card-body ${isFeatured ? "card-body--featured" : ""}`}>
        <img className="profile-image" src={imageSrc} alt={name} />
        {isFeatured && <span className="badge">Featured</span>}
        <h2 className="name">{name}</h2>
        <p className="role">{title}</p>
        <p className="title">
          {year} • {major}
        </p>
        <p className="contact">{email}</p>
      </div>
    </div>
  );
}