import './Hero.css';

function Hero() {
  const embers = Array.from({ length: 24 });

  return (
    <section className="hero" id="home">
      <div className="ember-field" aria-hidden="true">
        {embers.map((_, index) => (
          <span className="ember" key={index} />
        ))}
      </div>

      <div className="hero-content">
        <h1>ELAH FORGE STUDIOS</h1>
        <p>Crafting Worlds. Forging Legends.</p>
        <a className="hero-button" href="#games">
          Explore Our Games
        </a>
      </div>
    </section>
  );
}

export default Hero;
