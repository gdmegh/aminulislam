
"use client"
import React, { useRef, useEffect } from 'react';

const BinaryRainBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let drops: number[] = [];
    let columns = 0;
    const fontSize = 16;
    const binary = '01';

    const setup = () => {
        if (!canvas) return;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        columns = Math.floor(canvas.width / fontSize);
        drops = [];
        for (let x = 0; x < columns; x++) {
            drops[x] = 1;
        }
    }

    const draw = () => {
      if (!ctx || !canvas) return;
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = 'hsl(var(--primary))';
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = binary.charAt(Math.floor(Math.random() * binary.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };
    
    let intervalId: number;

    const startAnimation = () => {
        setup();
        intervalId = window.setInterval(draw, 40);
    }

    startAnimation();

    const handleResize = () => {
        clearInterval(intervalId);
        startAnimation();
    }
    
    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full -z-10" />;
};

export default BinaryRainBackground;
