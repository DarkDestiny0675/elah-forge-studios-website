import "./NewsSection.css";

const updates = [
  {
    date: "September 2026",
    title: "Elah Forge Studios Is Live",
    description:
      "Our official studio website is now online, establishing a home for our games, development news, and future announcements.",
  },
  {
    date: "In Development",
    title: "Divine Resurrection",
    description:
      "A fallen creation awaits restoration. Development continues on the world, its twelve angel guardians, and the journey to confront Macrillus.",
  },
  {
    date: "Post Development",
    title: "Royal Treasury",
    description:
      "A strategy experience centered on wealth, kingdoms, alliances, and shared multiplayer sessions continues to take shape.  Main game has been developed.  Pending the multi-player aspect then it can be published for all to experience.",
  },
  {
    date: "September 2026 - Maintenance",
    title: "NFL Pick-em",
    description:
      "A pick-em style game that covers the entire 2026 season. Winner gets bragging rights for knowing the NFL better than anyone.  Is that you?",
  },
  {
    date: "In Development",
    title: "Poly-Anna Returns",
    description:
      "A Ludo-Sorry style board game that pits brains and roadblocks.  Block your opponents or send them home all the while in a race to get home!  It's a game for all ages and worth all the fun and laughs.",
  },
  {
    date: "In Development",
    title: "DC: Crisis Infinite Heroes",
    description:
      "A competitive engine-building ccard game for 2 to 4 players, inspired by the accessible resource development and progression of Splendor.  A dynamic comic-book event system continually changes the rules, opportunities, and risks on the table, forcing every player to adapt strategy as the crisis unfolds.",
  },
];

function NewsSection() {
  return (
    <section className="news-section" id="news">
      <div className="news-container">
        <span className="news-label">FROM THE FORGE</span>
        <h2>Studio Updates</h2>
        <p className="news-intro">
          Follow the growth of Elah Forge Studios and the worlds currently being
          shaped within it.
        </p>

        <div className="news-grid">
          {updates.map((update) => (
            <article className="news-card" key={update.title}>
              <span className="news-date">{update.date}</span>
              <h3>{update.title}</h3>
              <p>{update.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewsSection;
