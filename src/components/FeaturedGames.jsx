import { Link } from "react-router-dom";
import divineResurrectionCard from "../assets/divine-resurrection-card.png";
import royalTreasuryCard from "../assets/royal-treasury-card.png";
import nflPickEmCard from "../assets/nfl-pickem-card.png";
import polyAnnaReturnsCard from "../assets/poly-anna-returns-card.png";
import dcCrisisCard from "../assets/dc-crisis-of-infinite-heroes-card.png";
import "./FeaturedGames.css";

const games = [
  {
    title: "Divine Resurrection",
    description:
      "You were sent to destroy evil. You were chosen to restore creation.",
    image: divineResurrectionCard,
    imageAlt: "Divine Resurrection game artwork",
    route: "/divine-resurrection",
    status: "Pre-Production",
  },
  {
    title: "Royal Treasury",
    description: "Build wealth. Grow kingdoms. Shape alliances.",
    image: royalTreasuryCard,
    imageAlt: "Royal Treasury game artwork",
    route: "/royal-treasury",
    status: "Post Development",
  },
  {
    title: "NFL Pick'Em",
    description:
      "Weekly football picks and competition, currently undergoing reliability updates.",
    image: nflPickEmCard,
    imageAlt: "NFL Pick'Em game artwork",
    route: "/nfl-pickem",
    status: "Under Maintenance",
  },
  {
    title: "Poly-Anna Returns",
    description:
      "Race home through safe zones, strategic blocks, and a modern twist on classic board-game competition.",
    image: polyAnnaReturnsCard,
    imageAlt: "Poly-Anna Returns game artwork",
    route: "/poly-anna-returns",
    status: "In Development",
  },
  {
    title: "DC: Crisis of Infinite Heroes",
    description:
      "A competitive 2 to 5-player engine-building board game with a strategy-shifting comic-book event system.",
    image: dcCrisisCard,
    imageAlt: "DC: Crisis of Infinite Heroes game artwork",
    route: "/dc-crisis-of-infinite-heroes",
    status: "In Development",
  },
];

function FeaturedGames() {
  return (
    <section className="featured-games" id="games">
      <h2>Featured Games</h2>

      <div className="games-grid">
        {games.map((game, index) => (
          <Link
            className={`game-card${index === 4 ? " game-card-centered" : ""}`}
            key={game.title}
            to={game.route}
            aria-label={`Learn more about ${game.title}`}
          >
            <div className="game-artwork">
              <img
                className="game-image"
                src={game.image}
                alt={game.imageAlt}
              />
              <span className="game-status">{game.status}</span>
            </div>

            <div className="game-copy">
              <h3>{game.title}</h3>
              <p>{game.description}</p>
              <span className="game-link-text">Explore Game</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default FeaturedGames;
