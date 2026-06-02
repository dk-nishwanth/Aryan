/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  onAboutClick: () => void;
  onExperienceClick: () => void;
}

export default function Header({ onAboutClick, onExperienceClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative bg-[#8CA5F4] text-black pt-6 pb-20 md:pt-8 md:pb-24 px-6 sm:px-12 md:px-20 lg:px-24">
      {/* Top Navigation Menu Bar */}
      <nav className="max-w-6xl mx-auto flex justify-between items-center gap-4 py-4 sm:py-6 mb-12 sm:mb-16 md:mb-24 text-neutral-900 font-medium">
        <div 
          className="cursor-pointer font-semibold tracking-tight text-[16px] sm:text-[17px] hover:opacity-80 transition-opacity"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Aryan Abhishek
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden sm:flex flex-wrap justify-center gap-x-4 gap-y-1 items-center text-[12px] sm:text-[14px] md:text-[15px] font-normal text-neutral-800">
          <button
            onClick={() => document.getElementById('projects-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="hover:text-black/70 cursor-pointer transition-colors duration-200"
          >
            Work
          </button>
          <button
            onClick={onExperienceClick}
            className="hover:text-black/70 cursor-pointer transition-colors duration-200"
          >
            Experience
          </button>
          <button
            onClick={onAboutClick}
            className="hover:text-black/70 cursor-pointer transition-colors duration-200"
          >
            About
          </button>
          <button
            onClick={() => document.getElementById('footer-contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="hover:text-black/70 cursor-pointer transition-colors duration-200"
          >
            Contact
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <button
          className="sm:hidden flex items-center justify-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-neutral-900" /> : <Menu className="w-6 h-6 text-neutral-900" />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="sm:hidden max-w-6xl mx-auto mb-8 overflow-hidden"
          >
            <div className="flex flex-col items-start gap-4 py-4 bg-[#8CA5F4] border-t border-neutral-800/10 pt-6">
              <button
                onClick={() => {
                  document.getElementById('projects-section')?.scrollIntoView({ behavior: 'smooth' });
                  setMobileMenuOpen(false);
                }}
                className="text-lg font-medium text-neutral-900 hover:text-black/70 cursor-pointer transition-colors duration-200"
              >
                Work
              </button>
              <button
                onClick={() => {
                  onExperienceClick();
                  setMobileMenuOpen(false);
                }}
                className="text-lg font-medium text-neutral-900 hover:text-black/70 cursor-pointer transition-colors duration-200"
              >
                Experience
              </button>
              <button
                onClick={() => {
                  onAboutClick();
                  setMobileMenuOpen(false);
                }}
                className="text-lg font-medium text-neutral-900 hover:text-black/70 cursor-pointer transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() => {
                  document.getElementById('footer-contact')?.scrollIntoView({ behavior: 'smooth' });
                  setMobileMenuOpen(false);
                }}
                className="text-lg font-medium text-neutral-900 hover:text-black/70 cursor-pointer transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Container for Intro Text, Image and Description in order of the screenshot */}
      <div className="max-w-4xl mx-auto flex flex-col gap-6 sm:gap-10">
        {/* Intro Layout Flow */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-[26px] sm:text-3xl md:text-[40px] lg:text-[48px] font-medium leading-[1.18] tracking-tight text-[#0F1E4A] text-left"
        >
          Hi, I'm Aryan — Visual Designer specialising in bringing brands and interfaces to life through character and delight.
        </motion.h1>

        {/* Hero Product Showcase (Mockup Card) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="w-full"
        >
          <div className="relative overflow-hidden rounded-[20px] bg-[#ECE7DC] p-3 sm:p-8 flex items-center justify-center border border-black/[0.04] aspect-[16/10] sm:aspect-[16/9]">
            {/* The Generated Mockup Frame */}
            <img
              src="/src/assets/images/farewill_hero_phone_1780154988405.png"
              alt="Farewill Smartphone Mockup"
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>

        {/* Passion and Read More */}
        <div className="space-y-6 max-w-2xl text-left">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-[17px] sm:text-[21px] md:text-[24px] font-medium leading-[1.3] text-[#0F1E4A]/90"
          >
            My passion is to develop rich and memorable experiences that create impact whilst bringing a sense of joy through design and storytelling.
          </motion.p>

          {/* Read More Pill Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            <button
              onClick={onAboutClick}
              className="group inline-flex items-center justify-center gap-1.5 px-5 py-2 hover:bg-neutral-900 border border-neutral-900/20 hover:border-neutral-900 rounded-full text-xs font-semibold text-[#0F1E4A] hover:text-white transition-all duration-300 ease-out cursor-pointer"
            >
              <span>Read more</span>
              <span className="text-[11px] transform transition-transform duration-300 group-hover:translate-x-0.5">→</span>
            </button>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
