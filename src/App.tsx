import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import PresaleCard from './components/presale/PresaleCard';
import StakingPage from './pages/StakingPage';
import RoadmapPage from './pages/RoadmapPage';
import DashboardPage from './pages/DashboardPage';
import LeaderboardPage from './pages/LeaderboardPage';
import { FAQ } from './components/common/FAQ';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-white flex flex-col">
        <Header />
        <main className="flex-grow pt-24 pb-12 px-4 container mx-auto">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/presale" element={<div className="mt-12"><PresaleCard /></div>} />
            <Route path="/staking" element={<StakingPage />} />
            <Route path="/faq" element={<div className="mt-12"><FAQ /></div>} />
            <Route path="/roadmap" element={<RoadmapPage />} />
            <Route path="/leaderboard" element={<LeaderboardPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
