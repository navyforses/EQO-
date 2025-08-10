import React from 'react';
import { Link } from 'react-router-dom';
import { useLocale } from '../hooks/useLocale';
import AppLogo from './icons/AppLogo';
import CustomLogo from './icons/CustomLogo';

const Landing: React.FC = () => {
  const { language, t } = useLocale();
  const fontClass = language === 'ge' ? 'font-serif-ge' : 'font-serif-en';

  return (
    <div className={`flex items-center justify-center h-full w-full bg-transparent text-center p-4 ${fontClass} relative`}>
      <style>{`
        .decorative-border {
          position: relative;
          padding: 2.5rem 2rem;
          border: 2px solid rgba(212, 175, 55, 0.4);
          background-color: rgba(244, 228, 188, 0.9);
          backdrop-filter: blur(4px);
          box-shadow: 0 8px 32px rgba(139, 115, 85, 0.2);
        }
        .decorative-border::before,
        .decorative-border::after {
          content: '';
          position: absolute;
          width: 2.5rem;
          height: 2.5rem;
          border-color: #D4AF37;
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
        .ornamental-pattern {
          background-image: 
            radial-gradient(circle at 25% 25%, rgba(212, 175, 55, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(184, 134, 11, 0.1) 0%, transparent 50%);
        }
      `}</style>
      
      <div className="decorative-border max-w-2xl w-full ornamental-pattern relative overflow-hidden">
        {/* Ornamental corners */}
        <div className="absolute top-4 left-4 w-8 h-8 opacity-30">
          <div className="w-full h-full bg-brand-aged-gold rounded-full"></div>
        </div>
        <div className="absolute top-4 right-4 w-8 h-8 opacity-30">
          <div className="w-full h-full bg-brand-aged-gold rounded-full"></div>
        </div>
        <div className="absolute bottom-4 left-4 w-8 h-8 opacity-30">
          <div className="w-full h-full bg-brand-aged-gold rounded-full"></div>
        </div>
        <div className="absolute bottom-4 right-4 w-8 h-8 opacity-30">
          <div className="w-full h-full bg-brand-aged-gold rounded-full"></div>
        </div>
        
        <div className="animate-fade-in-up space-y-6 relative z-10">
          {/* თქვენი ფოტოს გამოსაყენებლად გაუშვით CustomLogo კომპონენტი */}
          {/* <AppLogo className="h-32 w-32 mx-auto text-brand-gold" /> */}
          <CustomLogo className="h-32 w-32 mx-auto" imagePath="/EQO-/logo.png" altText="EQO+ Custom Logo" />
          <h1 className="text-5xl md:text-7xl font-bold text-brand-aged-gold tracking-wider" style={{ textShadow: '2px 2px 8px rgba(212, 175, 55, 0.3)' }}>
            {t('appTitle')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 italic tracking-wide">
            {t('slogan')}
          </p>
          <div className="pt-8">
            <Link
              to="/library"
              className="inline-block px-10 py-4 text-lg font-semibold text-gray-800 border-2 border-brand-aged-gold/60 rounded-none bg-brand-aged-paper/80 hover:bg-brand-aged-gold hover:text-gray-800 transition-all duration-300 ease-in-out shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transform hover:scale-105"
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