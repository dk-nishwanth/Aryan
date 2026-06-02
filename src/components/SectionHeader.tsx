/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowUpRight } from 'lucide-react';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  onActionClick?: () => void;
  actionText?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  onActionClick,
  actionText = 'View more'
}: SectionHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-8 sm:mb-12 w-full text-left">
      {/* Title block with main and secondary metadata stacked vertically */}
      <h2 className="text-[34px] sm:text-[44px] md:text-[48px] leading-[1.15] font-medium tracking-tight text-black max-w-3xl">
        <span className="block font-medium mb-0.5">{title}</span>
        <span className="block text-neutral-500 font-light text-[22px] sm:text-[30px] md:text-[34px] leading-tight-ish">{subtitle}</span>
      </h2>

      {/* Linked Capsule Action Button */}
      {onActionClick && (
        <button
          onClick={onActionClick}
          className="group flex items-center self-start sm:self-auto gap-1.5 px-4 py-1.5 bg-transparent hover:bg-neutral-900 border border-neutral-300 hover:border-neutral-900 rounded-full text-xs font-medium tracking-normal text-neutral-800 hover:text-white transition-all duration-300 ease-out shrink-0 cursor-pointer"
        >
          <span>{actionText}</span>
          <span className="text-[10px] transform transition-transform duration-300 group-hover:translate-x-0.5">→</span>
        </button>
      )}
    </div>
  );
}
