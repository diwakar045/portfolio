import React from 'react';
import { playBeep } from '../utils/audio';

export default function GridCell({ children, className = '', interactive = true, onHoverProps = {} }) {
  const handleMouseEnter = () => {
    if (interactive) {
      playBeep();
    }
  };

  return (
    <div 
      className={`relative border-b border-dashed border-[#313334] ${interactive ? 'group' : ''} ${className}`}
      onMouseEnter={handleMouseEnter}
      {...onHoverProps}
    >
      {interactive && (
        <div className="absolute inset-0 border border-transparent group-hover:border-[#455283] group-hover:border-solid group-hover:bg-[#455283]/[0.02] group-hover:z-10 transition-colors duration-150 pointer-events-none" />
      )}
      
      <div className="relative z-0 h-full w-full flex flex-col justify-center">
        {children}
      </div>
    </div>
  );
}
