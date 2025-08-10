
import React from 'react';
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Library from './components/Library';
import FigureDetail from './components/FigureDetail';
import Landing from './components/Landing';
import { AnimatePresence } from 'framer-motion';

// This component can use router hooks because it's inside HashRouter
const AppContent: React.FC = () => {
    const location = useLocation();
    const isLandingPage = location.pathname === '/';

    return (
        <div className="bg-black text-white h-screen flex flex-col font-serif-en">
            {!isLandingPage && <Header />}
            <main className={`container mx-auto px-4 ${isLandingPage ? 'h-screen' : 'flex-grow overflow-y-auto'}`}>
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<Landing />} />
                        <Route path="/library" element={<Library />} />
                        <Route path="/figure/:id" element={<FigureDetail />} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </AnimatePresence>
            </main>
        </div>
    );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
};

export default App;