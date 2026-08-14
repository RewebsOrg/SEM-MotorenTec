'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageSlideshowProps {
  images: string[];
  /** Basis für den Alt-Text, wird pro Bild durchnummeriert. */
  alt: string;
  /** Optionales Ziel – macht die Bildfläche klickbar. */
  href?: string;
  /** Autoplay-Intervall in ms. */
  interval?: number;
  sizes?: string;
  quality?: number;
  priority?: boolean;
  /** Klassen für den Bildrahmen (Höhe, Rundung, Rahmen …). */
  className?: string;
  /** Anhalten, solange die Maus darüber steht. Bei großen Bannern besser aus. */
  pauseOnHover?: boolean;
  /** Overlays wie Badges – liegen über dem Bild. */
  children?: React.ReactNode;
}

const ImageSlideshow = ({
  images,
  alt,
  href,
  interval = 5000,
  sizes = '(max-width: 1024px) 100vw, 50vw',
  quality = 85,
  priority = false,
  className = '',
  pauseOnHover = true,
  children,
}: ImageSlideshowProps) => {
  const count = images.length;
  const reduceMotion = useReducedMotion();
  const [[index, direction], setSlide] = useState<[number, number]>([0, 1]);
  const [paused, setPaused] = useState(false);
  const draggedRef = useRef(false);

  const paginate = useCallback(
    (dir: number) => setSlide(([i]) => [(i + dir + count) % count, dir]),
    [count]
  );

  const goTo = (next: number) =>
    setSlide(([i]) => [next, next === i ? 0 : next > i ? 1 : -1]);

  // Autoplay – der Timer startet bei jedem Slide-Wechsel neu
  useEffect(() => {
    if (count < 2 || paused) return;
    const timer = setTimeout(() => paginate(1), interval);
    return () => clearTimeout(timer);
  }, [index, paused, count, interval, paginate]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: reduceMotion ? 0 : dir >= 0 ? '100%' : '-100%',
      opacity: reduceMotion ? 0 : 1,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: reduceMotion ? 0 : dir >= 0 ? '-35%' : '35%',
      opacity: reduceMotion ? 0 : 0.4,
    }),
  };

  const stopEvent = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const frame = (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { duration: 0.7, ease: [0.32, 0.72, 0, 1] },
            opacity: { duration: reduceMotion ? 0.5 : 0.7 },
          }}
          className="absolute inset-0"
        >
          {/* Langsamer Ken-Burns-Zoom auf dem aktiven Bild */}
          <motion.div
            className="relative w-full h-full"
            initial={reduceMotion ? false : { scale: 1 }}
            animate={reduceMotion ? undefined : { scale: 1.08 }}
            transition={{ duration: interval / 1000 + 1, ease: 'linear' }}
          >
            <Image
              src={images[index]}
              alt={count > 1 ? `${alt} – Bild ${index + 1} von ${count}` : alt}
              fill
              sizes={sizes}
              quality={quality}
              priority={priority && index === 0}
              draggable={false}
              className="object-cover select-none"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Verlauf für Lesbarkeit von Badge & Steuerung */}
      <div className="absolute inset-0 bg-gradient-to-t from-anthracite/80 via-transparent to-transparent pointer-events-none" />

      {children}

      {count > 1 && (
        <>
          {/* Pfeile */}
          <button
            type="button"
            aria-label="Vorheriges Bild"
            onClick={(e) => {
              stopEvent(e);
              paginate(-1);
            }}
            className="absolute left-2 md:left-3 top-1/2 -translate-y-1/2 z-20 grid place-items-center w-9 h-9 md:w-11 md:h-11 rounded-full bg-anthracite/60 hover:bg-accent border border-white/15 text-white backdrop-blur-sm transition-all duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100 md:-translate-x-2 md:group-hover:translate-x-0 hover:scale-110"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            aria-label="Nächstes Bild"
            onClick={(e) => {
              stopEvent(e);
              paginate(1);
            }}
            className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 z-20 grid place-items-center w-9 h-9 md:w-11 md:h-11 rounded-full bg-anthracite/60 hover:bg-accent border border-white/15 text-white backdrop-blur-sm transition-all duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100 md:translate-x-2 md:group-hover:translate-x-0 hover:scale-110"
          >
            <ChevronRight size={20} />
          </button>

          {/* Fortschritts-Punkte */}
          <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 z-20 flex items-center gap-1.5">
            {images.map((img, i) => (
              <button
                key={img}
                type="button"
                aria-label={`Bild ${i + 1} anzeigen`}
                aria-current={i === index}
                onClick={(e) => {
                  stopEvent(e);
                  goTo(i);
                }}
                className={`h-1.5 rounded-full overflow-hidden transition-all duration-500 ${
                  i === index ? 'w-8 bg-white/25' : 'w-1.5 bg-white/40 hover:bg-white/70'
                }`}
              >
                {i === index && (
                  <motion.span
                    className="block h-full bg-accent rounded-full"
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: interval / 1000, ease: 'linear' }}
                  />
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </>
  );

  return (
    <motion.div
      role="group"
      aria-roledescription={count > 1 ? 'Bildergalerie' : undefined}
      aria-label={alt}
      onMouseEnter={() => pauseOnHover && setPaused(true)}
      onMouseLeave={() => pauseOnHover && setPaused(false)}
      drag={count > 1 ? 'x' : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.08}
      onDragStart={() => {
        draggedRef.current = true;
      }}
      onDragEnd={(_, info) => {
        if (info.offset.x < -60 || info.velocity.x < -400) paginate(1);
        else if (info.offset.x > 60 || info.velocity.x > 400) paginate(-1);
        setTimeout(() => {
          draggedRef.current = false;
        }, 0);
      }}
      className={`group relative overflow-hidden ${count > 1 ? 'cursor-grab active:cursor-grabbing' : ''} ${className}`}
    >
      {href ? (
        <Link
          href={href}
          aria-label={alt}
          draggable={false}
          onClick={(e) => {
            if (draggedRef.current) e.preventDefault();
          }}
          className="absolute inset-0 z-10"
        >
          <span className="sr-only">{alt}</span>
        </Link>
      ) : null}
      {frame}
    </motion.div>
  );
};

export default ImageSlideshow;
