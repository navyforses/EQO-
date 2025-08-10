
import React from 'react';
import { Link } from 'react-router-dom';
import type { HistoricalFigure } from '../types';
import { useLocale } from '../hooks/useLocale';
import BookOpenIcon from './icons/BookOpenIcon';
import { motion } from 'framer-motion';

interface FigureCardProps {
  figure: HistoricalFigure;
}

const FigureCard: React.FC<FigureCardProps> = ({ figure }) => {
  const { language } = useLocale();
  const content = figure[language];
  const fontClass = language === 'ge' ? 'font-serif-ge' : 'font-serif-en';

  return (
    <Link to={`/figure/${figure.id}`} className="group perspective-1000 block">
      <motion.div
        layoutId={`book-wrapper-${figure.id}`}
        transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
        className="relative w-full aspect-[3/4] transform-style-3d group-hover:rotate-y-10"
      >
        <div className="absolute inset-0 bg-brand-chocolate rounded-lg shadow-lg transform rotate-y-5 -translate-x-2"></div>
        <motion.div 
            layoutId={`book-image-${figure.id}`}
            className="absolute inset-0 bg-contain bg-no-repeat bg-center bg-black/30 rounded-lg shadow-2xl overflow-hidden" 
            style={{ backgroundImage: `url(${figure.image})` }}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4">
            <h3 className={`text-xl font-bold text-white drop-shadow-md ${fontClass}`}>{content.name}</h3>
            <p className={`text-sm text-brand-gold ${fontClass}`}>{content.title}</p>
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <BookOpenIcon />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default FigureCard;
