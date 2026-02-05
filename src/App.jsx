import React, { useMemo, useState } from "react";
import Header from "./Header.jsx";
import Introduction from "./Introduction.jsx";
import Card from "./Card.jsx";
import Section from "./Section.jsx";
import AddProfileForm from "./AddProfileForm.jsx";
import "./App.css";

export default function App() {
  const [mode, setMode] = useState("light");
  const [selectedTitle, setSelectedTitle] = useState("All");
  const [searchText, setSearchText] = useState("");

  const [cards, setCards] = useState([
    {
      id: 1,
      name: "Nathan Eric Mursch",
      title: "Web Developer",
      year: "Junior",
      major: "Web Development & Design + German",
      email: "nmursch@purdue.brightspace.com",
      bio: "Building React apps with reusable components and clean UI.",
      imageSrc: `${import.meta.env.BASE_URL}assets/nmursch.jpg`,
      isFeatured: true,
    },
    {
      id: 2,
      name: "Grant Aaron Mursch",
      title: "Student",
      year: "Freshman",
      major: "Purdue University",
      email: "gmursch@purdue.brightspace.com",
      bio: "Interested in technology, learning, and improving every day.",
      imageSrc: `${import.meta.env.BASE_URL}assets/gmursch.png`,
      isFeatured: false,
    },
  ]);

  function toggleMode() {
    setMode((m) => (m === "light" ? "dark" : "light"));
  }

  function handleReset() {
    setSelectedTitle("All");
    setSearchText("");
  }

  function handleAddProfile(profile) {
    setCards((prev) => [
      ...prev,
      {
        id: Date.now(),
        year: "N/A",
        major: "N/A",
        ...profile,
      },
    ]);
  }

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

  return (
    <div className={`app ${mode === "dark" ? "app--dark" : "app--light"}`}>
      <Header mode={mode} onToggleMode={toggleMode} />

      <main className="main">
        <p className="modeBanner">
          {mode === "dark" ? "Dark mode is on 🌙" : "Light mode is on ☀️"}
        </p>

        <Introduction />

        <Section title="Add Profile" mode={mode}>
          <AddProfileForm mode={mode} onAddProfile={handleAddProfile} />
        </Section>

        <Section title="Profiles" mode={mode}>
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
              <Card key={card.id} {...card} />
            ))}
          </div>
        </Section>
      </main>
    </div>
  );
}
