/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn, ZoomOut, ArrowLeft, ArrowRight, RotateCw, Move } from 'lucide-react';

interface ImageLightboxProps {
  isOpen: boolean;
  src: string;
  alt?: string;
  title?: string;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  hasPrev?: boolean;
  hasNext?: boolean;
}

export default function ImageLightbox({
  isOpen,
  src,
  alt = '',
  title = '',
  onClose,
  onPrev,
  onNext,
  hasPrev = false,
  hasNext = false,
}: ImageLightboxProps) {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Reset position on image source change
      setScale(1);
      setPosition({ x: 0, y: 0 });
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, src]);

  // Handle keyboard listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft' && onPrev && hasPrev) {
        onPrev();
      } else if (e.key === 'ArrowRight' && onNext && hasNext) {
        onNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, src, onPrev, onNext, hasPrev, hasNext, onClose]);

  if (!isOpen) return null;

  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + 0.3, 3));
  };

  const handleZoomOut = () => {
    setScale((prev) => {
      const nextScale = Math.max(prev - 0.3, 0.7);
      if (nextScale === 0.7 || nextScale === 1) {
        setPosition({ x: 0, y: 0 });
      }
      return nextScale;
    });
  };

  const handleReset = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale <= 1) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || scale <= 1) return;
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 bg-neutral-950/98 backdrop-blur-lg z-[100] flex flex-col justify-between select-none font-sans"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            onClose();
          }
        }}
      >
        {/* Top Control Bar */}
        <div className="p-4 sm:p-5 flex items-center justify-between text-white border-b border-white/5 bg-neutral-950/80 backdrop-blur-md w-full shrink-0">
          <div className="space-y-0.5 text-left">
            <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-400">HIGH-RESOLUTION EXPLORER</p>
            <h4 className="text-sm font-bold tracking-tight text-white line-clamp-1">{title || alt || "Style Frame Portfolio Asset"}</h4>
          </div>

          {/* Interactive Zoom Indicators */}
          <div className="flex items-center gap-3 bg-neutral-900/90 border border-white/5 px-4 py-1.5 rounded-full shrink-0">
            <button
              onClick={handleZoomDownClick}
              className="p-1 text-neutral-400 hover:text-white rounded-full transition-colors cursor-pointer"
              title="Zoom Out"
            >
              <ZoomOut className="w-4 h-4 cursor-pointer" onClick={(e) => { e.stopPropagation(); handleZoomOut(); }} />
            </button>
            <span className="text-[10px] font-mono font-semibold text-neutral-300 w-11 text-center">{Math.round(scale * 100)}%</span>
            <button
              className="p-1 text-neutral-400 hover:text-white rounded-full transition-colors cursor-pointer"
              title="Zoom In"
            >
              <ZoomIn className="w-4 h-4 cursor-pointer" onClick={(e) => { e.stopPropagation(); handleZoomIn(); }} />
            </button>
            {scale !== 1 && (
              <button
                className="p-1 text-[#6E8FEA] hover:text-white rounded-full transition-colors cursor-pointer"
                title="Reset Size"
              >
                <RotateCw className="w-3.5 h-3.5 cursor-pointer" onClick={(e) => { e.stopPropagation(); handleReset(); }} />
              </button>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-2 bg-neutral-900 border border-white/10 hover:border-white/20 text-white rounded-full transition-all cursor-pointer flex items-center justify-center hover:bg-neutral-800"
            title="Close Zoom View"
          >
            <X className="w-4.5 h-4.5" />
          </button>
        </div>

        {/* Central Stage */}
        <div className="relative flex-1 flex items-center justify-center overflow-hidden w-full h-full p-4 sm:p-8">
          {/* Nav Prev */}
          {hasPrev && onPrev && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              className="absolute left-4 sm:left-8 z-30 p-2.5 sm:p-3.5 bg-neutral-900/70 hover:bg-neutral-800 border border-white/5 text-white rounded-full transition-all cursor-pointer hover:scale-105"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          )}

          {/* Nav Next */}
          {hasNext && onNext && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              className="absolute right-4 sm:right-8 z-30 p-2.5 sm:p-3.5 bg-neutral-900/70 hover:bg-neutral-800 border border-white/5 text-white rounded-full transition-all cursor-pointer hover:scale-105"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          )}

          {/* Canvas Wrapper */}
          <div
            className={`transition-all duration-75 select-none relative flex items-center justify-center max-w-full max-h-full ${
              scale > 1 ? 'cursor-grab active:cursor-grabbing' : ''
            }`}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <motion.img
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', damping: 26, stiffness: 170 }}
              key={src}
              src={src}
              alt={alt}
              draggable={false}
              referrerPolicy="no-referrer"
              className="object-contain max-w-full max-h-[72vh] md:max-h-[80vh] transition-transform duration-75 select-none rounded-xl shadow-[0_25px_60px_rgba(0,0,0,0.85)] border border-white/5"
              style={{
                transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`,
              }}
            />
          </div>

          {/* Drag Overlay HUD */}
          {scale > 1 && (
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-neutral-900/90 border border-white/10 px-4 py-1.5 rounded-full flex items-center gap-2 text-[10px] font-mono text-neutral-300 backdrop-blur-md pointer-events-none shadow-lg">
              <Move className="w-3.5 h-3.5" />
              <span>DRAG SCREEN TO DISCOVER DETAILS</span>
            </div>
          )}
        </div>

        {/* Status indicator footer */}
        <div className="p-4 sm:p-5 border-t border-white/5 bg-neutral-950 text-neutral-500 flex flex-col sm:flex-row items-center justify-between text-[10px] font-mono w-full shrink-0 gap-2">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>EXPERIENCE REAL DESIGN ACCURACY</span>
          </div>
          <div className="flex gap-4">
            <span>PRESS ESCAPE KEY TO CLOSE</span>
            <span className="text-neutral-400">ARYAN ABHISHEK PORTFOLIO</span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );

  // Stub function to prevent compile issues if references are tricky
  function handleZoomDownClick(e: React.MouseEvent) {
    e.stopPropagation();
    handleZoomOut();
  }
}
