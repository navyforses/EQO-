
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
    <header className="bg-black/50 backdrop-blur-sm sticky top-0 z-50 border-b border-brand-gold/20">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/library">
            <h1 className={`text-2xl md:text-3xl font-bold text-brand-gold tracking-wider ${currentFont}`}>
            {t('appTitle')}
            </h1>
        </Link>
        <button
          onClick={toggleLanguage}
          className="px-4 py-2 bg-brand-chocolate text-white rounded-md hover:bg-opacity-80 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold"
        >
          {language === 'ge' ? 'EN' : 'GE'}
        </button>
      </div>
    </header>
  );
};

export default Header;
