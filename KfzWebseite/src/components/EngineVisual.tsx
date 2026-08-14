'use client';

import React from 'react';
import Image from 'next/image';

interface EngineVisualProps {
  /** Bildpfad – fehlt er, wird eine typografische Platzhalter-Kachel gezeigt. */
  src?: string;
  alt: string;
  /** Text der Platzhalter-Kachel, z.B. der Motorcode. */
  label: string;
  sizes?: string;
  priority?: boolean;
  quality?: number;
  /** Zusätzliche Klassen für das Bild selbst (z.B. Hover-Zoom). */
  imageClassName?: string;
  className?: string;
}

/**
 * Zeigt ein Motorbild – oder, solange keins hinterlegt ist, eine dunkle
 * Platzhalter-Kachel mit großem Schriftzug statt eines kaputten Bildes.
 */
const EngineVisual = ({
  src,
  alt,
  label,
  sizes = '(max-width: 1024px) 100vw, 50vw',
  priority = false,
  quality = 85,
  imageClassName = '',
  className = '',
}: EngineVisualProps) => {
  if (src) {
    return (
      <div className={`absolute inset-0 ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          quality={quality}
          className={`object-cover ${imageClassName}`}
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={`absolute inset-0 bg-anthracite-light overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-anthracite-light via-anthracite to-anthracite-dark" />
      <div className="absolute -top-1/4 -right-1/4 w-2/3 h-2/3 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white/[0.04] font-black tracking-tighter text-[22vw] lg:text-[9rem] leading-none select-none whitespace-nowrap">
          {label}
        </span>
      </div>
    </div>
  );
};

export default EngineVisual;
