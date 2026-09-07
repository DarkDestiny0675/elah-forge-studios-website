import { Link } from "react-router-dom";
import divineResurrectionCard from "../assets/divine-resurrection-card.png";
import "../css/GamePage.css";

function DivineResurrectionPage() {
  return (
    <main className="game-page">
      <section
        className="game-page-hero"
        style={{ backgroundImage: `url(${divineResurrectionCard})` }}
      >
        <div className="game-page-overlay" />

        <div className="game-page-hero-content">
          <span className="game-page-status">Pre-Production</span>

          <h1>Divine Resurrection</h1>

          <p className="game-page-tagline">
            You were sent to destroy evil. You were chosen to restore creation.
          </p>
        </div>
      </section>

      <section className="game-page-content">
        <div className="game-page-container">
          <h2>The Restoration Begins</h2>

          <p>
            Divine Resurrection follows the restoration of a fallen world after
            the corruption of creation. The Twelve Guardians have fallen,
            darkness spreads across the land, and the journey toward renewal
            begins.
          </p>

          <p>
            Current Status: Pre-Production. Story development, guardian
            concepts, world building, gameplay systems, and progression design
            are actively being planned.
          </p>

          <Link className="close-button" to="/">
            Close
          </Link>
        </div>
      </section>
    </main>
  );
}

export default DivineResurrectionPage;
