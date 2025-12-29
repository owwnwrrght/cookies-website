import React, { useState, Suspense, lazy } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Maintenance from './components/Maintenance';

// Lazy load components for security (code splitting)
const LandingPage = lazy(() => import('./pages/LandingPage'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const AccessPage = lazy(() => import('./pages/AccessPage'));

// Loading fallback
const Loading = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-[#F5F4F0]">
    <div className="w-12 h-12 border-4 border-stone-200 border-t-nobel-gold rounded-full animate-spin"></div>
  </div>
);

const App = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);

  if (!isUnlocked) {
    return <Maintenance onUnlock={() => setIsUnlocked(true)} />;
  }

  return (
    <HashRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/access" element={<AccessPage />} />
          {/* Redirect unknown routes to home */}
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
};

export default App;
