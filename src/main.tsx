import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import { GlobalProvider } from './contexts/GlobalContext';
import { BASE_URL } from './scripts/constants';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <GlobalProvider>
          <Routes>
            <Route path={`${BASE_URL}*`} element={<App />} />
          </Routes>
        </GlobalProvider>
      </HelmetProvider>
    </BrowserRouter>
  </StrictMode>
);
