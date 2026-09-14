import { Link } from "react-router-dom";
import dcCrisisCard from "../assets/dc-crisis-of-infinite-heroes-card.png";
import "../css/GamePage.css";

function DCCrisisOfInfiniteHeroesPage() {
  return (
    <main className="game-page">
      <section
        className="game-page-hero"
        style={{ backgroundImage: `url(${dcCrisisCard})` }}
      >
        <div className="game-page-overlay" />

        <div className="game-page-hero-content">
          <span className="game-page-status">In Development</span>
          <h1>DC: Crisis of Infinite Heroes</h1>
          <p className="game-page-tagline">
            Build your engine. Adapt to the crisis. Outplay every rival.
          </p>
        </div>
      </section>

      <section className="game-page-content">
        <div className="game-page-container">
          <h2>Every Event Changes the Battle</h2>

          <p>
            DC: Crisis of Infinite Heroes is a competitive engine-building
            board game for 2 to 5 players, inspired by the accessible resource
            development and progression of Splendor.
          </p>

          <p>
            A dynamic comic-book event system continually changes the rules,
            opportunities, and risks on the table, forcing every player to
            adapt strategy as the crisis unfolds.
          </p>

          <Link className="close-button" to="/">
            Close
          </Link>
        </div>
      </section>
    </main>
  );
}

export default DCCrisisOfInfiniteHeroesPage;
