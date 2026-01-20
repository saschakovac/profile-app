import React from 'react'; 
import './Card.css';

const Card = () => {
    const name = "Ava";
    const title = "UX Designer";

    return (
        <div class = "card-body">
            <img src="/profile-app/public/vite.svg" alt="Profile Image" className="profile-image"/>
            <h2 class="name">{name}</h2>
            <p class="title">{title}</p>
        </div>
    )
}

export default Card;
