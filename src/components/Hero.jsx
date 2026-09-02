import "./Hero.css";

function Hero() {
  const embers = Array.from({ length: 24 });

  return (
    <section className="hero">
      <div className="ember-field" aria-hidden="true">
        {embers.map((_, index) => (
          <span className="ember" key={index}></span>
        ))}
      </div>

      <div className="hero-content">
        <h1>ELAH FORGE STUDIOS</h1>

        <p>Crafting Worlds. Forging Legends.</p>

        <button className="hero-button" type="button">
          Explore Our Games
        </button>
      </div>
    </section>
  );
}

export default Hero;
