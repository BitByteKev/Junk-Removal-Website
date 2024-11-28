import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './src/styles/index.css';
import Main from './src/components/Main.jsx'; // Ensure this path and file name match your project

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Main />
  </ StrictMode>
);
