/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

export default function Marquee() {
  const marqueeText = "BASED IN GURUGRAM ☻ WORKING GLOBALLY ☻ ";
  const fullRow = marqueeText.repeat(8);

  return (
    <div className="w-full bg-[#6E8FEA] py-4.5 border-y border-black/5 overflow-hidden select-none relative group cursor-pointer z-10 shadow-sm">
      <div className="flex whitespace-nowrap overflow-hidden">
        {/* Repeating text tracks to enable seamless loop */}
        <div className="flex animate-ticker whitespace-nowrap text-sm sm:text-base md:text-lg font-bold tracking-widest text-[#0E1528] uppercase">
          <span className="inline-block px-4">{fullRow}</span>
          <span className="inline-block px-4">{fullRow}</span>
          <span className="inline-block px-4">{fullRow}</span>
        </div>
      </div>
    </div>
  );
}
