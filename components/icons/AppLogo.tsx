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
    {/* Book shape */}
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
    
    {/* Echo / Soundwave inside book */}
    <path d="M6 8.5c.5.5 1.5.5 2 0"></path>
    <path d="M5 11.5c1.5 1.5 3.5 1.5 5 0"></path>
    <path d="M4 14.5c2.5 2.5 5.5 2.5 8 0"></path>
    
    {/* Mirrored echo */}
    <path d="M18 8.5c-.5.5-1.5.5-2 0"></path>
    <path d="M19 11.5c-1.5 1.5-3.5 1.5-5 0"></path>
    <path d="M20 14.5c-2.5 2.5-5.5 2.5-8 0"></path>
  </svg>
);

export default AppLogo;
