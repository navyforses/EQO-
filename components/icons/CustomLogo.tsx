import React from 'react';

interface CustomLogoProps {
  className?: string;
  imagePath?: string;
  altText?: string;
}

const CustomLogo: React.FC<CustomLogoProps> = ({ 
  className = 'h-32 w-32', 
  imagePath = '/EQO-/logo.png',
  altText = 'EQO+ Logo'
}) => {
  return (
    <img 
      src={imagePath}
      alt={altText}
      className={`${className} object-contain`}
      style={{
        filter: 'drop-shadow(0 0 10px rgba(255, 215, 0, 0.3))',
      }}
    />
  );
};

export default CustomLogo;
