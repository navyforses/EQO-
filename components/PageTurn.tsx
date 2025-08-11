import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PageTurnEffect: React.FC<{ children: React.ReactNode[]; currentPage: number; onPageChange?: (i: number) => void }>
  = ({ children, currentPage, onPageChange }) => {
  const [isFlipping, setIsFlipping] = useState(false);

  return (
    <div className="book-container perspective-1000">
      <motion.div
        className="book-page"
        animate={{ rotateY: isFlipping ? -180 : 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        style={{ transformStyle: 'preserve-3d' as const }}
      >
        <div className="page-face page-front">{children[currentPage]}</div>
        <div className="page-face page-back">{children[currentPage + 1]}</div>
      </motion.div>
    </div>
  );
};

export default PageTurnEffect;


