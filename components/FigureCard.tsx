
import React from 'react';
import { Link } from 'react-router-dom';
import { HistoricalFigure } from '../types';
import { useLocale } from '../hooks/useLocale';
import { motion } from 'framer-motion';

interface FigureCardProps {
  figure: HistoricalFigure;
}

const FigureCard: React.FC<FigureCardProps> = ({ figure }) => {
  const { language } = useLocale();
  const content = figure[language];
  const fontClass = language === 'ge' ? 'font-serif-ge' : 'font-serif-en';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      className={`bg-brand-chocolate/10 border border-brand-gold/30 rounded-lg p-6 hover:border-brand-gold/60 transition-all duration-300 ${fontClass}`}
    >
      <Link to={`/figure/${figure.id}`} className="block">
        <div className="space-y-4">
          {/* თქვენი ფოტოს გამოსაყენებლად */}
          <div className="relative h-48 bg-gradient-to-br from-brand-chocolate/20 to-brand-gold/10 rounded-lg overflow-hidden">
            {/* თქვენი ფოტო აქ */}
            <img 
              src={`/EQO-/images/${figure.id}.jpg`} 
              alt={content.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                // თუ ფოტო არ არსებობს, ვაჩენთ ფონს
                e.currentTarget.style.display = 'none';
              }}
            />
            {/* ფონი თუ ფოტო არ არსებობს */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-chocolate/30 to-brand-gold/20"></div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-brand-gold mb-2">{content.name}</h3>
            <p className="text-brand-parchment/80 text-sm mb-2">{content.title}</p>
            <p className="text-brand-parchment/70 text-xs">{content.era}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default FigureCard;
