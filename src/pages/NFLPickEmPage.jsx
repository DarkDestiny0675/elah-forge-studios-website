import { Link } from "react-router-dom";
import nflPickEmCard from "../assets/nfl-pickem-card.png";
import "../css/GamePage.css";

function NFLPickEmPage() {
  return (
    <main className="game-page">
      <section
        className="game-page-hero"
        style={{ backgroundImage: `url(${nflPickEmCard})` }}
      >
        <div className="game-page-overlay" />

        <div className="game-page-hero-content">
          <span className="game-page-status">Under Maintenance</span>
          <h1>NFL Pick'Em</h1>
          <p className="game-page-tagline">
            Make your picks. Compete with friends. Chase the championship.
          </p>
        </div>
      </section>

      <section className="game-page-content">
        <div className="game-page-container">
          <h2>Updates Are Underway</h2>

          <p>
            NFL Pick'Em is temporarily unavailable while improvements are
            made following issues identified during live-game use.
          </p>

          <p>
            Reliability, live-game processing, league management, and the
            overall player experience are being reviewed and updated before
            the application returns to active play.
          </p>

          <Link className="close-button" to="/">
            Close
          </Link>
        </div>
      </section>
    </main>
  );
}

export default NFLPickEmPage;
