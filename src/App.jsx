import React from "react";
import Header from "./Header.jsx";
import Introduction from "./Introduction.jsx";
import Card from "./Card.jsx";
import Section from "./Section.jsx";
import "./App.css";

export default function App() {
  const cards = [
    {
      id: 1,
      name: "Nathan Eric Mursch",
      year: "Junior",
      major: "Web Development & Design + German",
      email: "nmursch@purdue.brightspace.com",
      imageSrc: `${import.meta.env.BASE_URL}assets/nmursch.jpg`,
      isFeatured: true,
    },
    {
      id: 2,
      name: "Grant Aaron Mursch",
      year: "Freshman",
      major: "Student @ Purdue University",
      email: "gmursch@purdue.brightspace.com",
      imageSrc: `${import.meta.env.BASE_URL}assets/gmursch.png`,
      isFeatured: false,
    },
  ];

  return (
    <div className="app">
      <Header />
      <main className="main">
        <Introduction />
        <Section title="Profiles">
          <div className="cards">
            {cards.map((card) => (
              <Card
                key={card.id}
                name={card.name}
                year={card.year}
                major={card.major}
                email={card.email}
                imageSrc={card.imageSrc}
                isFeatured={card.isFeatured}
              />
            ))}
          </div>
        </Section>
      </main>
    </div>
  );
}
