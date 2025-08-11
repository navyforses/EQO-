
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { historicalFigures } from '../data/historicalFigures';
import FigureCard from './FigureCard';
import { useLocale } from '../hooks/useLocale';
import SearchIcon from './icons/SearchIcon';
import ArrowLeftIcon from './icons/ArrowLeftIcon';
import { motion } from 'framer-motion';

const Library: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCentury, setSelectedCentury] = useState<string>('all');
  const { language, t } = useLocale();

  const centuries = useMemo(() => {
    const allCenturies = historicalFigures.flatMap(f => f.century);
    return [...new Set(allCenturies)].sort((a, b) => a - b);
  }, []);

  const filteredFigures = useMemo(() => {
    return historicalFigures.filter(figure => {
      const content = figure[language];
      const matchesSearch =
        content.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        content.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        content.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCentury =
        selectedCentury === 'all' || figure.century.includes(parseInt(selectedCentury));

      return matchesSearch && matchesCentury;
    });
  }, [searchTerm, selectedCentury, language]);

  const fontClass = language === 'ge' ? 'font-serif-ge' : 'font-serif-en';

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`space-y-8 ${fontClass} py-8`}
    >
        <div>
            <Link to="/" className="inline-flex items-center gap-2 text-brand-gold hover:text-brand-gold/90 hover:underline transition-colors">
                <ArrowLeftIcon />
                <span>{t('backToHome')}</span>
            </Link>
        </div>

      <div className="bg-brand-obsidian/60 p-4 rounded-lg border border-brand-gold/20 flex flex-col md:flex-row gap-4 items-center relative overflow-hidden">
        {/* Ornamental border */}
        <div className="absolute inset-0 ornamental-border opacity-10 pointer-events-none"></div>
        
        <div className="relative flex-grow w-full z-10">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-parchment/50">
                <SearchIcon />
            </span>
            <input
                type="text"
                placeholder={t('searchPlaceholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-brand-obsidian/50 border border-brand-gold/30 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-brand-gold transition-all text-brand-parchment placeholder-brand-parchment/50"
            />
        </div>
        <div className="flex-shrink-0 w-full md:w-auto z-10">
            <select
                value={selectedCentury}
                onChange={(e) => setSelectedCentury(e.target.value)}
                className="w-full bg-brand-obsidian/50 border border-brand-gold/30 rounded-md py-2 px-4 appearance-none focus:outline-none focus:ring-2 focus:ring-brand-gold transition-all text-brand-parchment"
                aria-label={t('filterByEpoch')}
            >
                <option value="all">{t('allEras')}</option>
                {centuries.map(century => (
                    <option key={century} value={century}>
                        {century} {t('centuryLabel')}
                    </option>
                ))}
            </select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {filteredFigures.map(figure => (
          <FigureCard key={figure.id} figure={figure} />
        ))}
      </div>
    </motion.div>
  );
};

export default Library;