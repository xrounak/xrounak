import React from 'react';

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = "", hoverEffect = true }) => (
    <div className={`
    relative overflow-hidden
    bg-slate-900/40 
    backdrop-blur-md 
    border border-white/10 
    rounded-2xl 
    p-6 
    shadow-xl
    ${hoverEffect ? 'hover:border-cyan-500/30 hover:shadow-cyan-500/10 hover:-translate-y-1 transition-all duration-300' : ''}
    ${className}
  `}>
        {children}
    </div>
);
