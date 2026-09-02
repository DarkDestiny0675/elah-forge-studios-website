import "./FeaturedGames.css";
import divineResurrectionCard from "../assets/divine-resurrection-card.png";
import royalTreasuryCard from "../assets/royal-treasury-card.png";

function FeaturedGames() {
  return (
    <section className="featured-games" id="games">
      <h2>Featured Games</h2>

      <div className="games-grid">
        <article className="game-card">
          <div className="game-artwork">
            <img
              className="game-image"
              src={divineResurrectionCard}
              alt="Divine Resurrection game artwork"
            />
          </div>

          <h3>Divine Resurrection</h3>
          <p>
            You were sent to destroy evil. You were chosen to restore creation.
          </p>
        </article>

        <article className="game-card">
          <div className="game-artwork">
            <img
              className="game-image"
              src={royalTreasuryCard}
              alt="Royal Treasure game artwork"
            />
          </div>

          <h3>Royal Treasury</h3>
          <p>Build wealth. Grow kingdoms. Shape alliances.</p>
        </article>
      </div>
    </section>
  );
}

export default FeaturedGames;
