import React from "react";
import Header from "./Header.jsx";
import Introduction from "./Introduction.jsx";
import Card from "./Card.jsx";
import Card2 from "./Card2.jsx";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Introduction />
        <section className="cards">
          <Card />
          <Card2 />
        </section>
      </main>
    </div>
  );
}
