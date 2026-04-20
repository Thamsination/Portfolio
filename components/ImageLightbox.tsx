'use client';

import { useCallback, useEffect } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

export interface LightboxImage {
  src: string;
  caption?: string;
  bgColor?: string;
}

interface ImageLightboxProps {
  images: LightboxImage[];
  index: number | null;
  onClose: () => void;
  onIndexChange: (index: number) => void;
}

export default function ImageLightbox({
  images,
  index,
  onClose,
  onIndexChange,
}: ImageLightboxProps) {
  const isOpen = index !== null && index >= 0 && index < images.length;

  const goPrev = useCallback(() => {
    if (index === null) return;
    onIndexChange((index - 1 + images.length) % images.length);
  }, [index, images.length, onIndexChange]);

  const goNext = useCallback(() => {
    if (index === null) return;
    onIndexChange((index + 1) % images.length);
  }, [index, images.length, onIndexChange]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowLeft') goPrev();
      else if (e.key === 'ArrowRight') goNext();
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose, goPrev, goNext]);

  // Lock body scroll while open
  useEffect(() => {
    if (!isOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = original;
    };
  }, [isOpen]);

  const currentImage = isOpen ? images[index!] : null;
  const showNav = images.length > 1;

  return (
    <AnimatePresence>
      {isOpen && currentImage && (
        <motion.div
          key="lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            aria-label="Close image viewer"
            className="absolute top-4 right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
            </svg>
          </button>

          {/* Previous button */}
          {showNav && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              aria-label="Previous image"
              className="absolute left-2 sm:left-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Next button */}
          {showNav && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              aria-label="Next image"
              className="absolute right-2 sm:right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Image + caption container */}
          <motion.div
            key={currentImage.src}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="relative flex max-h-[90vh] max-w-[92vw] flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex max-h-[85vh] max-w-[92vw] items-center justify-center">
              <Image
                src={currentImage.src}
                alt={currentImage.caption || 'Enlarged image'}
                width={1920}
                height={1080}
                className="h-auto max-h-[85vh] w-auto max-w-[92vw] object-contain"
                style={{ backgroundColor: currentImage.bgColor }}
                priority
                unoptimized
              />
            </div>

            {currentImage.caption && (
              <p className="mt-4 max-w-3xl text-center text-sm text-white/90 sm:text-base">
                {currentImage.caption}
              </p>
            )}

            {showNav && (
              <p className="mt-2 text-xs text-white/60">
                {index! + 1} / {images.length}
              </p>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
