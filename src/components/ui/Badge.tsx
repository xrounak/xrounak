import React from 'react';

interface BadgeProps {
    children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({ children }) => (
    <span className="
    px-3 py-1 
    rounded-full 
    bg-cyan-500/10 
    border border-cyan-500/20 
    text-cyan-300 
    text-xs font-medium 
    tracking-wide
    hover:bg-cyan-500/20 
    transition-colors
  ">
        {children}
    </span>
);
