
import React from "react"; // Explicitly import React
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Use createRoot API with explicit container check
const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Failed to find the root element");
}
