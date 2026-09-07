import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import DivineResurrectionPage from "./pages/DivineResurrectionPage";
import RoyalTreasuryPage from "./pages/RoyalTreasuryPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/divine-resurrection"
          element={<DivineResurrectionPage />}
        />
        <Route path="/royal-treasury" element={<RoyalTreasuryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
