import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Bet365DataFetcher from './component/home';
import Odds from './component/Odds';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Salam</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/odds">Odds</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Bet365DataFetcher />} />
          <Route path="/odds" element={<Odds logEvents={true} />} /> {/* Pass logEvents prop to Odds */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
