import { Link } from "react-router-dom";
import pollyAnnaReturnsCard from "../assets/polly-anna-returns-card.png";
import "../css/GamePage.css";

function PollyAnnaReturnsPage() {
  return (
    <main className="game-page">
      <section
        className="game-page-hero"
        style={{ backgroundImage: `url(${polyAnnaReturnsCard})` }}
      >
        <div className="game-page-overlay" />

        <div className="game-page-hero-content">
          <span className="game-page-status">In Development</span>
          <h1>Polly-Anna Returns</h1>
          <p className="game-page-tagline">
            Race home. Block the way. Protect your path.
          </p>
        </div>
      </section>

      <section className="game-page-content">
        <div className="game-page-container">
          <h2>A Classic Race with a Strategic Twist</h2>

          <p>
            Polly-Anna Returns is a competitive race-home board game inspired by
            classic family favorites. Players move pieces around the board while
            attempting to reach their home location before every rival.
          </p>

          <p>
            Blocking opponents and using safe zones add new tactical choices to
            every turn, creating a familiar experience with greater player
            interaction and strategic depth.
          </p>

          <Link className="close-button" to="/">
            Close
          </Link>
        </div>
      </section>
    </main>
  );
}

export default PollyAnnaReturnsPage;
