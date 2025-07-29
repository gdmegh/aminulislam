
"use client"
import React from 'react';

const StarsBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 animate-twinkle" style={{ backgroundImage: 'url(/images/stars.png)', backgroundRepeat: 'repeat', backgroundSize: '800px 800px' }}></div>
      <div className="absolute inset-0 animate-twinkle-slow" style={{ backgroundImage: 'url(/images/stars.png)', backgroundRepeat: 'repeat', backgroundSize: '1200px 1200px' }}></div>
    </div>
  );
};

export default StarsBackground;
