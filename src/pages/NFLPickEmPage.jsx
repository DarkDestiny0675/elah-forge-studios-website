import { Link } from "react-router-dom";
import nflPickEmCard from "../assets/nfl-pickem-card.png";
import "../css/GamePage.css";

const features = [
  "Weekly NFL Submission",
  "Live Pick Distribution",
  "Weekly Results Tracking",
  "Season Leaderboard",
  "Historical Week Review",
  "Game of the Week",
  "Commissioner Management Center",
  "Simulation & Testing Suite",
  "Secure League Membership",
  "Complete Audit History",
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
          <h2>Compete. Predict. Win.</h2>
          <p>
            Pick every NFL game, climb the leaderboard, track league trends, and
            battle friends all season long. Every game counts. Every pick
            matters. 🏈🏆
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
