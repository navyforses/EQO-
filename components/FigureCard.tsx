
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
      className={`bg-brand-obsidian/60 rounded-lg p-6 transition-all duration-300 border border-brand-gold/20 hover:border-brand-gold/40 ${fontClass} relative overflow-hidden`}
    >
      {/* Ornamental corner */}
      <div className="absolute top-2 right-2 w-6 h-6 opacity-20">
        <div className="w-full h-full bg-brand-gold rounded-full"></div>
      </div>
      
      <Link to={`/figure/${figure.id}`} className="block relative z-10">
        <div className="space-y-4">
          {/* თქვენი ფოტოს გამოსაყენებლად */}
          <div className="relative h-48 bg-gradient-to-br from-brand-ink/40 to-brand-obsidian/60 rounded-lg overflow-hidden border border-brand-gold/20">
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
            <div className="absolute inset-0 bg-gradient-to-br from-brand-aged-gold/30 to-brand-gold/20"></div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-brand-parchment mb-2 hover:text-brand-gold transition-colors">{content.name}</h3>
            <p className="text-brand-gold/80 text-sm mb-2 font-semibold">{content.title}</p>
            <p className="text-brand-parchment/70 text-xs">{content.era}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default FigureCard;
