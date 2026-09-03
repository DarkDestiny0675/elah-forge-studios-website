import Navigation from './Navigation';
import Hero from './Hero';
import FeaturedGames from './FeaturedGames';
import AboutSection from './AboutSection';
import NewsSection from './NewsSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import './HomePage.css';

function HomePage() {
  return (
    <main className="home-page">
      <Navigation />
      <Hero />
      <FeaturedGames />
      <AboutSection />
      <NewsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

export default HomePage;
