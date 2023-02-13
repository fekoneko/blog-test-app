import './styles/index.css';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';

const rootElement = document.getElementById('root');
if (rootElement)
{
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <Router>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
    </StrictMode>
  );
}