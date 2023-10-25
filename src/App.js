import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './parts/Header'; // Update the path to Header.js
import LandingPage from './pages/LandingPage'; // Update the path to LandingPage.js
import "./assets/scss/style.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Header />} // Make sure to pass the location prop here
          />
          <Route path="/landing" element={<LandingPage />} />
          {/* Define other routes as needed */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;