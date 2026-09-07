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
    date: "September 2026",
    title: "NFL Pick-em",
    description:
      "A pick-em style game that covers the entire 2026 season. Winner gets bragging rights for knowing the NFL better than anyone.  Is that you?",
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
