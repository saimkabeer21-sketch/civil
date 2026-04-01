import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';

const mediaItems = [
  { type: 'image', src: '/media/WhatsApp Image 2026-03-13 at 12.17.54 AM.jpeg' },
  { type: 'image', src: '/media/WhatsApp Image 2026-03-13 at 12.17.55 AM.jpeg' },
  { type: 'image', src: '/media/WhatsApp Image 2026-03-13 at 12.17.55 AM (1).jpeg' },
  { type: 'image', src: '/media/WhatsApp Image 2026-03-13 at 12.17.55 AM (2).jpeg' },
  { type: 'image', src: '/media/WhatsApp Image 2026-03-13 at 12.17.55 AM (3).jpeg' },
  { type: 'image', src: '/media/WhatsApp Image 2026-03-13 at 12.17.56 AM.jpeg' },
  { type: 'image', src: '/media/WhatsApp Image 2026-03-13 at 12.17.56 AM (1).jpeg' },
  { type: 'video', src: '/media/WhatsApp Video 2026-03-12 at 11.47.23 PM.mp4' }
];

export default function MediaSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval;
    if (isAutoPlaying && !isLightboxOpen) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % mediaItems.length);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, isLightboxOpen]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % mediaItems.length);
    setIsAutoPlaying(false);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
    setIsAutoPlaying(false);
  };

  const renderMedia = (item, isZoomed = false) => {
    switch (item.type) {
      case 'map':
        return (
          <iframe
            src={item.src}
            className={`w-full ${isZoomed ? 'h-[80vh]' : 'h-full object-cover'} border-0 rounded-[1.4rem] bg-white`}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Project Location"
          ></iframe>
        );
      case 'video':
        return (
          <video
            src={item.src}
            controls={isZoomed}
            autoPlay={!isZoomed}
            muted={!isZoomed}
            loop
            className={`w-full ${isZoomed ? 'h-[80vh] object-contain' : 'h-full object-cover'} rounded-[1.4rem] cursor-pointer bg-black/5`}
            onClick={() => !isZoomed && setIsLightboxOpen(true)}
          />
        );
      case 'image':
      default:
        return (
          <img
            src={item.src}
            alt="Our Project"
            className={`w-full ${isZoomed ? 'h-[80vh] object-contain' : 'h-full object-cover'} rounded-[1.4rem] cursor-zoom-in bg-black/5`}
            onClick={() => !isZoomed && setIsLightboxOpen(true)}
          />
        );
    }
  };

  return (
    <>
      <div 
        className="relative group w-full h-[460px] sm:h-[520px] lg:h-[600px] rounded-[1.8rem] lg:rounded-[2.2rem] overflow-hidden shadow-2xl shadow-slate-400/20 bg-slate-100"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full flex items-center justify-center p-0"
          >
            {renderMedia(mediaItems[currentIndex])}
          </motion.div>
        </AnimatePresence>

        {/* Gradient Overlay for Controls */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />

        {/* Navigation Buttons */}
        <button
          onClick={goToPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/40"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/40"
        >
          <ChevronRight size={24} />
        </button>

        {/* Zoom Button */}
        <button
          onClick={() => setIsLightboxOpen(true)}
          className="absolute top-4 right-4 w-12 h-12 rounded-full bg-slate-900/60 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-slate-900"
        >
          <Maximize2 size={20} />
        </button>

        {/* Dots Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10 overflow-x-auto max-w-[80%] px-4 py-2 hide-scrollbar">
          {mediaItems.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrentIndex(idx);
                setIsAutoPlaying(false);
              }}
              className={`flex-shrink-0 w-2.5 h-2.5 rounded-full transition-all ${
                currentIndex === idx ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/95 backdrop-blur-sm p-4 sm:p-8"
          >
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-[60]"
            >
              <X size={24} />
            </button>
            
            <div className="relative w-full max-w-6xl max-h-screen flex items-center justify-center">
              {renderMedia(mediaItems[currentIndex], true)}
              
              <button
                onClick={goToPrev}
                className="absolute left-0 sm:-left-12 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-[60]"
              >
                <ChevronLeft size={24} />
              </button>
              
              <button
                onClick={goToNext}
                className="absolute right-0 sm:-right-12 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-[60]"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

