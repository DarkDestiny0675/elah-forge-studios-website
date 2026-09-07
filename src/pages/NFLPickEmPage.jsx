import { Link } from "react-router-dom";
import nflPickEmCard from "../assets/nfl-pickem-card.png";
import "../css/GamePage.css";

const features = [
  "Weekly NFL game picks",
  "Game of the Week selections",
  "Leaderboard and weekly results",
  "Tiebreaker scoring",
  "Pick distribution insights",
  "Commissioner schedule and season controls",
  "Player registration and approval workflow",
];

function NFLPickEmPage() {
  return (
    <main className="game-page nfl-pickem-page">
      <section
        className="game-page-hero"
        style={{ backgroundImage: `url(${nflPickEmCard})` }}
      >
        <div className="game-page-overlay" />
        <div className="game-page-hero-content">
          <span className="game-page-status game-page-status-complete">
            Completed Game
          </span>
          <h1>NFL Pick'Em</h1>
          <p className="game-page-tagline">
            Make your picks. Compete with friends. Chase the championship.
          </p>
        </div>
      </section>

      <section className="game-page-content">
        <div className="game-page-container">
          <h2>Built for a Full NFL Season</h2>
          <p>
            NFL Pick'Em is a commissioner-driven competition where players
            predict weekly winners, follow results, and battle for position on
            the leaderboard throughout the season.
          </p>
          <p>
            The game itself is complete. The next step is deploying the React
            application, API, and database so the Elah Forge Studios card can
            open the live NFL Pick'Em landing page.
          </p>

          <div className="game-feature-grid">
            {features.map((feature) => (
              <div className="game-feature" key={feature}>
                <span aria-hidden="true">✓</span>
                <p>{feature}</p>
              </div>
            ))}
          </div>

          <Link className="close-button" to="/">
            Close
          </Link>
        </div>
      </section>
    </main>
  );
}

export default NFLPickEmPage;
