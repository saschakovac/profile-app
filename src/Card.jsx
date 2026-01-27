import React from "react";
import "./Card.css";

const Card = ({ name, year, major, email, imageSrc, isFeatured }) => {
  const cardClass = isFeatured ? "card-body card-body--featured" : "card-body";

  return (
    <div className="card">
      <div className={cardClass}>
        <img alt={`${name} profile`} className="profile-image" src={imageSrc} />

        {isFeatured && <span className="badge">Featured</span>}

        <h2 className="name">{name}</h2>
        <p className="title">
          {year} • {major}
        </p>

        <p className="contact">{email}</p>
      </div>
    </div>
  );
};

export default Card;
