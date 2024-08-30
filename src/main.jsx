import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.jsx';
import { LoadingScreen } from './modules/Loading.jsx';
const helmetContext={};
createRoot(document.getElementById('root')).render(<StrictMode>
  <HelmetProvider context={helmetContext}>
    <LoadingScreen>
      <App />
    </LoadingScreen>
  </HelmetProvider>
</StrictMode>);
