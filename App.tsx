
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
        <div className="aged-paper-bg text-gray-800 h-screen flex flex-col font-serif-en relative overflow-hidden">
            {/* Ornamental background elements */}
            <div className="absolute inset-0 ornamental-border opacity-20 pointer-events-none"></div>
            <div className="absolute top-4 left-4 ornamental-corner opacity-30"></div>
            <div className="absolute top-4 right-4 ornamental-corner opacity-30" style={{transform: 'scaleX(-1)'}}></div>
            <div className="absolute bottom-4 left-4 ornamental-corner opacity-30" style={{transform: 'scaleY(-1)'}}></div>
            <div className="absolute bottom-4 right-4 ornamental-corner opacity-30" style={{transform: 'scale(-1)'}}></div>
            
            {!isLandingPage && <Header />}
            <main className={`container mx-auto px-4 relative z-10 ${isLandingPage ? 'h-screen' : 'flex-grow overflow-y-auto'}`}>
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