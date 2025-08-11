
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { historicalFigures } from '../data/historicalFigures';
import { useLocale } from '../hooks/useLocale';
import Chat from './Chat';
import ArrowLeftIcon from './icons/ArrowLeftIcon';
import ArrowRightIcon from './icons/ArrowRightIcon';
import { motion, AnimatePresence } from 'framer-motion';

const pageVariants = {
  initial: (direction: number) => ({
    opacity: 0,
    rotateY: 180 * direction,
    transition: { duration: 0.5 },
  }),
  animate: {
    opacity: 1,
    rotateY: 0,
    transition: { duration: 0.5 },
  },
  exit: (direction: number) => ({
    opacity: 0,
    rotateY: -180 * direction,
    transition: { duration: 0.5 },
  }),
};

const FigureDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { language, t } = useLocale();
  const [activePageIndex, setActivePageIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const figure = historicalFigures.find(f => f.id === id);

  if (!figure) {
    return <div>Figure not found.</div>;
  }

  const content = figure[language];
  const fontClass = language === 'ge' ? 'font-serif-ge' : 'font-serif-en';
  const totalPages = 1 + (content.videoUrls?.length || 0);

  const handlePageChange = (newIndex: number) => {
    if (newIndex === activePageIndex || newIndex < 0 || newIndex >= totalPages) return;
    setDirection(newIndex > activePageIndex ? 1 : -1);
    setActivePageIndex(newIndex);
    
    // Debug: Log video URL when changing to video page
    if (newIndex > 0 && content.videoUrls?.[newIndex - 1]) {
      console.log(`Video ${newIndex} URL:`, content.videoUrls[newIndex - 1]);
    }
  };
  
  const buttonBaseClass = `flex items-center gap-2 px-3 py-1.5 rounded-md transition-all duration-300 border border-brand-aged-gold/50 text-brand-aged-gold hover:bg-brand-aged-gold/10 bg-brand-aged-paper/30`;
  const disabledClass = `disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent`;

  return (
    <div className="max-w-6xl mx-auto h-full flex flex-col py-8">
      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
      `}</style>
        <motion.div initial={{opacity:0, y:-20}} animate={{opacity:1, y:0}} transition={{delay: 0.5}}>
            <Link to="/library" className="inline-flex items-center gap-2 text-brand-gold mb-6 hover:underline hover:text-brand-gold/90 transition-colors">
                <ArrowLeftIcon />
                <span className={fontClass}>{t('backToLibrary')}</span>
            </Link>
        </motion.div>

      <motion.div 
        layoutId={`book-wrapper-${figure.id}`}
        transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
        className="bg-brand-obsidian/70 rounded-lg shadow-2xl p-4 md:p-8 flex flex-col lg:flex-row gap-8 relative overflow-hidden flex-grow border border-brand-gold/20"
      >
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="w-full h-full flex flex-col lg:flex-row gap-8 relative z-10"
        >
            {/* Spine effect */}
            <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-brand-aged-gold/30 hidden lg:block -ml-0.5 z-10"></div>
            
            {/* Left Page: Bio */}
            <div className={`lg:w-1/2 space-y-4 text-brand-parchment ${fontClass} overflow-y-auto pr-4`}>
              <div className="flex items-start gap-4">
                  <motion.img 
                      layoutId={`book-image-${figure.id}`}
                      src={`/EQO-/images/${figure.id}.jpg`} 
                      alt={content.name} 
                      className="w-24 h-32 object-cover bg-brand-aged-gold/20 rounded-md flex-shrink-0 border border-brand-aged-gold/30" 
                      onError={(e) => {
                        // თუ ფოტო არ არსებობს, ვაჩენთ ფონს
                        e.currentTarget.style.display = 'none';
                      }}
                  />
                  {/* ფონი თუ ფოტო არ არსებობს */}
                  <div className="w-24 h-32 bg-gradient-to-br from-brand-aged-gold/30 to-brand-gold/20 rounded-md flex-shrink-0 border border-brand-aged-gold/30"></div>
                  <div>
                    <h2 className="text-3xl font-bold text-brand-parchment">{content.name}</h2>
                    <p className="text-brand-gold font-semibold">{content.title}</p>
                    <p className="text-brand-parchment/70 text-sm">{content.era}</p>
                  </div>
              </div>
              <h3 className="text-2xl font-bold text-brand-parchment pb-2 border-b border-brand-gold/20">{t('bioTitle')}</h3>
              <p className="leading-relaxed text-brand-parchment/90">{content.bio}</p>
            </div>

            {/* Right Page: Flippable Content */}
            <div className="lg:w-1/2 flex flex-col">
              <div className="relative flex-1 w-full h-full perspective-1000">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.div
                    key={activePageIndex}
                    custom={direction}
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="absolute top-0 left-0 w-full h-full backface-hidden transform-style-3d"
                    style={{ transformOrigin: 'left center' }}
                  >
                    {activePageIndex === 0 && <Chat figure={figure} />}
                    {activePageIndex > 0 && content.videoUrls?.[activePageIndex - 1] && (
                      <div className="w-full h-full bg-brand-aged-paper/50 rounded-lg p-4 flex flex-col border border-brand-aged-gold/30">
                        <h3 className={`text-xl font-bold text-gray-800 mb-4 ${fontClass}`}>{t('watchVideo')} #{activePageIndex}</h3>
                        <div className="text-xs text-gray-600 mb-2">Debug: {content.videoUrls[activePageIndex - 1]}</div>
                        <div className="w-full h-full rounded-lg overflow-hidden border border-brand-aged-gold/20">
                          <iframe
                            className="w-full h-full"
                            src={content.videoUrls[activePageIndex - 1]}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Page turn controls */}
              <div className="flex justify-between items-center gap-2 mt-4 pt-2 border-t border-brand-gold/20">
                  <button
                      onClick={() => handlePageChange(activePageIndex - 1)}
                      disabled={activePageIndex === 0}
                       className={`${buttonBaseClass} ${disabledClass} ${fontClass}`}
                  >
                      <ArrowLeftIcon />
                      <span>{t('previousPage')}</span>
                  </button>
                  
                  <span className={`text-sm text-gray-600 ${fontClass}`}>
                    {t('page')} {activePageIndex + 1} {t('of')} {totalPages}
                  </span>

                  <button
                      onClick={() => handlePageChange(activePageIndex + 1)}
                      disabled={activePageIndex === totalPages - 1}
                      className={`${buttonBaseClass} ${disabledClass} ${fontClass}`}
                  >
                      <span>{t('nextPage')}</span>
                      <ArrowRightIcon />
                  </button>
              </div>
            </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FigureDetail;
