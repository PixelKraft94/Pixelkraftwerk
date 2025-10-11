import React from 'react';

const Logo: React.FC = () => {
  return (
    <a href="/" className="flex items-center space-x-2 group">
      <img
        src="/>_PK_black_circle.png"
        alt="PIXEL_KRAFTWERK Logo"
        className="logo h-10 w-10 transition-colors duration-300"
      />
      <div className="font-heading font-bold text-light-100">
        <span>PIXEL_KRAFTWERK</span>
      </div>
    </a>
  );
};

export default Logo;