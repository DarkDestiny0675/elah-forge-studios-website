import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import DivineResurrectionPage from "./pages/DivineResurrectionPage";
//import RoyalTreasuryPage from "./pages/RoyalTreasuryPage";
import NFLPickEmPage from "./pages/NFLPickEmPage";
import PolyAnnaReturnsPage from "./pages/PolyAnnaReturnsPage";
import DCCrisisOfInfiniteHeroesPage from "./pages/DCCrisisOfInfiniteHeroesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/divine-resurrection"
          element={<DivineResurrectionPage />}
        />
        {/* <Route path="/royal-treasury" element={<RoyalTreasuryPage />} /> */}
        <Route path="/nfl-pickem" element={<NFLPickEmPage />} />
        <Route path="/poly-anna-returns" element={<PolyAnnaReturnsPage />} />
        <Route
          path="/dc-crisis-of-infinite-heroes"
          element={<DCCrisisOfInfiniteHeroesPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
