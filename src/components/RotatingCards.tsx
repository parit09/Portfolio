import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CardData {
  id: number;
  company: string;
  role: string;
  description: string;
  tech: string[];
  isSoon?: boolean;
}

interface RotatingCardsProps {
  cards: CardData[];
  type?: 'experience' | 'project';
}

const RotatingCards = ({ cards, type = 'experience' }: RotatingCardsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const rotateCards = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    } else {
      setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
    }
  };

  const getCardPosition = (index: number) => {
    const diff = (index - activeIndex + cards.length) % cards.length;
    if (diff === 0) return 'center';
    if (diff === 1) return 'right';
    return 'left';
  };

  const positionStyles = {
    left: { x: -320, scale: 0.85, opacity: 0.5, zIndex: 1, rotateY: 15 },
    center: { x: 0, scale: 1, opacity: 1, zIndex: 3, rotateY: 0 },
    right: { x: 320, scale: 0.85, opacity: 0.5, zIndex: 1, rotateY: -15 },
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto h-[450px] perspective-1000">
      <div className="relative w-full h-full flex items-center justify-center">
        <AnimatePresence mode="sync">
          {cards.map((card, index) => {
            const position = getCardPosition(index);
            return (
              <motion.div
                key={card.id}
                className="absolute w-[300px] md:w-[350px] cursor-pointer"
                initial={positionStyles[position]}
                animate={{
                  ...positionStyles[position],
                  y: position === 'center' ? [0, -10, 0] : [0, 5, 0],
                }}
                transition={{
                  type: 'spring',
                  stiffness: 100,
                  damping: 20,
                  y: {
                    duration: position === 'center' ? 3 : 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
                }}
                onClick={() => rotateCards('left')}
                style={{ perspective: 1000 }}
              >
                <div className={`card-medieval rounded-xl p-6 h-[380px] flex flex-col transition-all duration-300 ${position === 'center' ? 'glow-gold border-primary/50' : 'hover:border-primary/30'}`}>
                  {/* Decorative Corner */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/50 rounded-tl-xl" />
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/50 rounded-tr-xl" />
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/50 rounded-bl-xl" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/50 rounded-br-xl" />

                  {card.isSoon ? (
                    <div className="flex-1 flex items-center justify-center">
                      <div className="text-center">
                        <h3 className="font-serif text-3xl text-gradient-gold mb-4">Coming Soon</h3>
                        <div className="w-16 h-0.5 bg-primary/30 mx-auto" />
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="mb-4">
                        <h3 className="font-serif text-xl text-gradient-gold mb-1">{card.company}</h3>
                        <p className="text-primary/80 font-medium">{card.role}</p>
                      </div>
                      
                      <p className="text-muted-foreground text-sm flex-1 leading-relaxed">
                        {card.description}
                      </p>
                      
                      <div className="mt-4 pt-4 border-t border-border/50">
                        <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">Technologies</p>
                        <div className="flex flex-wrap gap-2">
                          {card.tech.map((t, i) => (
                            <span 
                              key={i} 
                              className="text-xs px-2 py-1 rounded bg-primary/10 text-primary border border-primary/20"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-3">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === activeIndex 
                ? 'bg-primary w-6' 
                : 'bg-primary/30 hover:bg-primary/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default RotatingCards;
