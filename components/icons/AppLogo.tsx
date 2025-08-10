import React from 'react';

const AppLogo: React.FC<{ className?: string }> = ({ className = 'h-32 w-32' }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    {/* Hourglass shape */}
    {/* Top triangle */}
    <path d="M6 2h12l-2 4h-8z" fill="currentColor" opacity="0.9"/>
    
    {/* Bottom triangle */}
    <path d="M6 22h12l-2-4h-8z" fill="currentColor" opacity="0.9"/>
    
    {/* Center connection */}
    <line x1="12" y1="6" x2="12" y2="18" stroke="currentColor" strokeWidth="0.5"/>
    
    {/* Concentric circles around hourglass */}
    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="0.3" opacity="0.6"/>
    <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="0.3" opacity="0.7"/>
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="0.3" opacity="0.8"/>
    
    {/* Sand grains in top chamber */}
    <circle cx="10" cy="4" r="0.3" fill="currentColor" opacity="0.8"/>
    <circle cx="14" cy="4" r="0.3" fill="currentColor" opacity="0.8"/>
    <circle cx="11" cy="5" r="0.2" fill="currentColor" opacity="0.6"/>
    <circle cx="13" cy="5" r="0.2" fill="currentColor" opacity="0.6"/>
    
    {/* Sand grains in bottom chamber */}
    <circle cx="10" cy="20" r="0.3" fill="currentColor" opacity="0.8"/>
    <circle cx="14" cy="20" r="0.3" fill="currentColor" opacity="0.8"/>
    <circle cx="11" cy="19" r="0.2" fill="currentColor" opacity="0.6"/>
    <circle cx="13" cy="19" r="0.2" fill="currentColor" opacity="0.6"/>
  </svg>
);

export default AppLogo;
