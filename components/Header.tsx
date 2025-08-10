
import React from 'react';
import { useLocale } from '../hooks/useLocale';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const { language, setLanguage, t } = useLocale();

  const toggleLanguage = () => {
    setLanguage(language === 'ge' ? 'en' : 'ge');
  };

  const currentFont = language === 'ge' ? 'font-serif-ge' : 'font-serif-en';

  return (
    <header className="bg-brand-aged-paper/90 backdrop-blur-sm sticky top-0 z-50 border-b border-brand-aged-gold/40 relative overflow-hidden">
      {/* Ornamental border */}
      <div className="absolute inset-0 ornamental-border opacity-15 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 py-3 flex justify-between items-center relative z-10">
        <Link to="/library">
            <h1 className={`text-2xl md:text-3xl font-bold text-brand-aged-gold tracking-wider ${currentFont} hover:text-brand-gold transition-colors`}>
            {t('appTitle')}
            </h1>
        </Link>
        <button
          onClick={toggleLanguage}
          className="px-4 py-2 bg-brand-aged-gold text-gray-800 rounded-md hover:bg-brand-gold transition-colors focus:outline-none focus:ring-2 focus:ring-brand-aged-gold border border-brand-aged-gold/50 font-semibold"
        >
          {language === 'ge' ? 'EN' : 'GE'}
        </button>
      </div>
    </header>
  );
};

export default Header;
