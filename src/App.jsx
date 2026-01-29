import React, { useMemo, useState } from "react";
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
      title: "Student",
      year: "Junior",
      major: "Web Development & Design + German",
      email: "nmursch@purdue.brightspace.com",
      imageSrc: `${import.meta.env.BASE_URL}assets/nmursch.jpg`,
      isFeatured: true,
    },
    {
      id: 2,
      name: "Grant Aaron Mursch",
      title: "Student",
      year: "Freshman",
      major: "Student @ Purdue University",
      email: "gmursch@purdue.brightspace.com",
      imageSrc: `${import.meta.env.BASE_URL}assets/gmursch.png`,
      isFeatured: false,
    },
  ];

  const [selectedTitle, setSelectedTitle] = useState("All");
  const [searchText, setSearchText] = useState("");

  const titleOptions = useMemo(() => {
    const unique = Array.from(new Set(cards.map((c) => c.title))).sort();
    return ["All", ...unique];
  }, [cards]);

  const filteredCards = useMemo(() => {
    const q = searchText.trim().toLowerCase();

    return cards.filter((c) => {
      const matchesTitle = selectedTitle === "All" || c.title === selectedTitle;
      const matchesSearch = q === "" || c.name.toLowerCase().includes(q);
      return matchesTitle && matchesSearch;
    });
  }, [cards, selectedTitle, searchText]);

  function handleReset() {
    setSelectedTitle("All");
    setSearchText("");
  }

  return (
    <div className="app">
      <Header />
      <main className="main">
        <Introduction />

        <Section title="Profiles">
          <div className="controls">
            <label className="control">
              <span className="control__label">Filter by title</span>
              <select
                className="control__input"
                value={selectedTitle}
                onChange={(e) => setSelectedTitle(e.target.value)}
              >
                {titleOptions.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </label>

            <label className="control">
              <span className="control__label">Search by name</span>
              <input
                className="control__input"
                type="text"
                placeholder="Type a name..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </label>

            <button className="reset" type="button" onClick={handleReset}>
              Reset
            </button>
          </div>

          <p className="results">
            Showing {filteredCards.length} of {cards.length}
          </p>

          <div className="cards">
            {filteredCards.map((card) => (
              <Card
                key={card.id}
                name={card.name}
                title={card.title}
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
