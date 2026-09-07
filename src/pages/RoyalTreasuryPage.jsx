import { Link } from "react-router-dom";
import royalTreasuryCard from "../assets/royal-treasury-card.png";
import "../css/GamePage.css";

function RoyalTreasuryPage() {
  return (
    <main className="game-page">
      <section
        className="game-page-hero"
        style={{ backgroundImage: `url(${royalTreasuryCard})` }}
      >
        <div className="game-page-overlay" />

        <div className="game-page-hero-content">
          <span className="game-page-status">In Development</span>

          <h1>Royal Treasury</h1>

          <p className="game-page-tagline">
            Build wealth. Grow kingdoms. Shape alliances.
          </p>
        </div>
      </section>

      <section className="game-page-content">
        <div className="game-page-container">
          <h2>A Kingdom Awaits</h2>

          <p>
            Royal Treasury is a kingdom-building and treasury-management
            experience centered around leadership, strategic growth, Lady
            Seraphina, Prince Leopold, and the creation of a prosperous realm.
          </p>

          <p>
            Current Status: In Development. Core systems are being designed and
            expanded. Multiplayer functionality remains under development.
          </p>

          <Link className="close-button" to="/">
            Close
          </Link>
        </div>
      </section>
    </main>
  );
}

export default RoyalTreasuryPage;
