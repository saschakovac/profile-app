import React from "react";
import styles from "./Header.module.css";

export default function Header({ mode, onToggleMode }) {
  const isDark = mode === "dark";

  return (
    <header className={`${styles.header} ${isDark ? styles.headerDark : ""}`}>
      <div className={styles.left}>
        <h1 className={`${styles.title} ${isDark ? styles.titleDark : ""}`}>
          Profile App
        </h1>
        <p className={`${styles.tagline} ${isDark ? styles.taglineDark : ""}`}>
          Lab 6 - Conditional Rendering and Styling
        </p>
      </div>
      <button className={styles.toggle} type="button" onClick={onToggleMode}>
        {isDark ? "Switch to Light" : "Switch to Dark"}
      </button>
    </header>
  );
}