import Navigation from "./Navigation";
import Hero from "./Hero";
import FeaturedGames from "./FeaturedGames";
import Footer from "./Footer";
import "./HomePage.css";

function HomePage() {
  return (
    <main className="home-page">
      <Navigation />
      <Hero />
      <FeaturedGames />
      <Footer />
    </main>
  );
}

export default HomePage;
