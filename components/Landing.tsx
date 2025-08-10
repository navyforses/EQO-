import React from 'react';
import { Link } from 'react-router-dom';
import { useLocale } from '../hooks/useLocale';
import AppLogo from './icons/AppLogo';
import CustomLogo from './icons/CustomLogo';

const Landing: React.FC = () => {
  const { language, t } = useLocale();
  const fontClass = language === 'ge' ? 'font-serif-ge' : 'font-serif-en';

  return (
    <div className={`flex items-center justify-center h-full w-full bg-transparent text-center p-4 ${fontClass}`}>
      <style>{`
        body {
          background-color: #000;
          background-image: 
            radial-gradient(rgba(139, 69, 19, 0.1) 1px, transparent 1px),
            radial-gradient(rgba(139, 69, 19, 0.1) 1px, #000 1px);
          background-size: 40px 40px, 40px 40px;
          background-position: 0 0, 20px 20px;
          transition: background-image 0.5s ease-in-out;
        }
        .decorative-border {
          position: relative;
          padding: 2.5rem 2rem;
          border: 1px solid rgba(255, 215, 0, 0.25);
          background-color: rgba(0,0,0,0.7);
          backdrop-filter: blur(4px);
        }
        .decorative-border::before,
        .decorative-border::after {
          content: '';
          position: absolute;
          width: 2.5rem;
          height: 2.5rem;
          border-color: #FFD700;
          border-style: solid;
        }
        .decorative-border::before {
          top: -6px;
          left: -6px;
          border-width: 3px 0 0 3px;
        }
        .decorative-border::after {
          bottom: -6px;
          right: -6px;
          border-width: 0 3px 3px 0;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1.2s ease-out forwards;
        }
      `}</style>
      
      <div className="decorative-border max-w-2xl w-full">
        <div className="animate-fade-in-up space-y-6">
          {/* თქვენი ფოტოს გამოსაყენებლად გაუშვით CustomLogo კომპონენტი */}
          {/* <AppLogo className="h-32 w-32 mx-auto text-brand-gold" /> */}
          <CustomLogo className="h-32 w-32 mx-auto" imagePath="/logo.png" altText="EQO+ Custom Logo" />
          <h1 className="text-5xl md:text-7xl font-bold text-brand-gold tracking-wider" style={{ textShadow: '2px 2px 8px rgba(255, 215, 0, 0.4)' }}>
            {t('appTitle')}
          </h1>
          <p className="text-xl md:text-2xl text-brand-parchment/90 italic tracking-wide">
            {t('slogan')}
          </p>
          <div className="pt-8">
            <Link
              to="/library"
              className="inline-block px-10 py-4 text-lg font-semibold text-brand-parchment border-2 border-brand-gold/60 rounded-none bg-transparent hover:bg-brand-chocolate hover:border-brand-gold transition-all duration-300 ease-in-out shadow-[0_0_15px_rgba(255,215,0,0.2)] hover:shadow-[0_0_25px_rgba(255,215,0,0.5)] transform hover:scale-105"
            >
              {t('enterLibrary')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;