import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

type Book = { id: string; name: string; period: string };

const BookCard: React.FC<{ book: Book }> = ({ book }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  return (
    <motion.div
      className="relative preserve-3d cursor-pointer"
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' as const }}
      onMouseMove={(e) => {
        const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      whileHover={{ scale: 1.05, z: 50, transition: { type: 'spring', stiffness: 300 } }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="book-spine bg-gradient-to-b from-brand-ink to-black p-4 rounded-lg shadow-book backdrop-blur-sm border border-brand-gold/20">
        <div className="absolute inset-0 overflow-hidden rounded-lg">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-brand-gold/30 rounded-full"
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, -100],
                opacity: [0, 1, 0],
              }}
              transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 5 }}
              style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            />
          ))}
        </div>
        <motion.div className="text-brand-gold font-serif-en text-lg font-bold text-center mb-2" animate={{
          textShadow: [
            '0 0 10px rgba(212, 175, 55, 0.5)',
            '0 0 20px rgba(212, 175, 55, 0.8)',
            '0 0 10px rgba(212, 175, 55, 0.5)'
          ]
        }} transition={{ duration: 2, repeat: Infinity }}>
          {book.name}
        </motion.div>
        <div className="bg-brand-copper/20 backdrop-blur px-2 py-1 rounded text-xs text-brand-parchment">{book.period}</div>
      </div>
    </motion.div>
  );
};

const LivingLibrary: React.FC<{ books: Book[] }> = ({ books }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {books.map((b) => (
        <BookCard key={b.id} book={b} />
      ))}
    </div>
  );
};

export default LivingLibrary;


