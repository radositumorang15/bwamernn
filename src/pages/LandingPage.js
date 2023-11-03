import { Route } from 'react-router-dom';
import Header from '../parts/Header';

import landingPage from '../json/landingPage.json';
import Hero from "parts/Hero"
export default function LandingPage() {
  return (
    <div>
      <Route path="/" element={<Header />} />
      <Route path="/" data={landingPage.hero} />
      {/* Other content of the LandingPage */}
    </div>
  );
}