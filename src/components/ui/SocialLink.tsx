import React from 'react';

interface SocialLinkProps {
    href: string;
    icon: React.ReactNode;
    label: string;
}

export const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => (
    <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="
      p-3.5 
      rounded-full 
      bg-white/5 
      border border-white/10 
      text-slate-300
      hover:bg-cyan-500/20 
      hover:border-cyan-400/50 
      hover:text-cyan-400 
      hover:scale-110
      transition-all duration-300 
      group
    "
        aria-label={label}
    >
        {React.cloneElement(icon as React.ReactElement<any>, { size: 22 })}
    </a>
);
