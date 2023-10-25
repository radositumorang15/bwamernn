import { Route } from 'react-router-dom';
import Header from '../parts/Header';

export default function LandingPage() {
  return (
    <div>
      <Route path="/" element={<Header />} />
      {/* Other content of the LandingPage */}
    </div>
  );
}