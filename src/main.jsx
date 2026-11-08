import React from 'react';
import { createRoot } from 'react-dom/client';

// A fictional business so a content review has real-looking copy to judge (orbitr #4313).
function App() {
  return (
    <main>
      <h1>Tidewater Lane Electric</h1>
      <p>Licensed electricians for homes and small shops.</p>
      <ul>
        <li>Panel upgrades</li>
        <li>Indoor and outdoor lighting</li>
        <li>Repairs and safety checks</li>
      </ul>
      <p>Call us to book a visit.</p>
      <p id="fixture-marker">fixture marker: vite-spa-r1</p>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
