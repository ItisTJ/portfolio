"use client";
import './style.css';

export default function Loader() {
  return (
    <div className="loader-overlay">
      <img src="/astro-loader.gif" alt="Loading..." className="loader-gif" />

<div className="loader-wrapper">
  <span className="loader-letter">L</span>
  <span className="loader-letter">O</span>
  <span className="loader-letter">A</span>
  <span className="loader-letter">D</span>
  <span className="loader-letter">I</span>
  <span className="loader-letter">N</span>
  <span className="loader-letter">G</span>

  <div className="loader"></div>
</div>

    </div>
  );
}