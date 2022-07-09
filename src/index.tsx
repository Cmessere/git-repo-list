
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';
import * as React from 'react';

const element = document.getElementById('root');
const root = createRoot(element!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);