import React from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  return (
    <main>
      <h1>Vite SPA Fixture</h1>
      <p>Rendered in the browser by React.</p>
      <p id="fixture-marker">fixture marker: vite-spa-r0</p>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
