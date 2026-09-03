import './AboutSection.css';

function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <span className="about-label">ABOUT THE STUDIO</span>
        <h2>Forging Worlds Worth Exploring</h2>

        <p className="about-intro">
          Elah Forge Studios was founded with a simple belief: great games
          should leave players with stories worth remembering.
        </p>

        <p>
          We create immersive worlds where strategy, progression, exploration,
          and storytelling work together to deliver meaningful experiences.
          Whether rebuilding a fallen creation in Divine Resurrection or
          building a thriving kingdom in Royal Treasury, our goal is the same:
          create worlds that players want to return to again and again.
        </p>

        <div className="vision-grid">
          <article className="vision-card">
            <h3>Our Mission</h3>
            <p>
              Create memorable game experiences that reward curiosity,
              mastery, and long-term progression.
            </p>
          </article>

          <article className="vision-card">
            <h3>Our Vision</h3>
            <p>
              Build worlds that inspire players to explore, grow, and create
              stories of their own.
            </p>
          </article>

          <article className="vision-card">
            <h3>Our Philosophy</h3>
            <p>
              Mechanics matter. Story matters. Player experience matters.
              Great games are built when all three work together.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
