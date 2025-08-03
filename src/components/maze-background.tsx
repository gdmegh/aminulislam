"use client"
import React, { useRef, useEffect } from 'react';

const MazeBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim();
    const [h, s, l] = primaryColor.split(' ').map(parseFloat);


    const cols = Math.floor(canvas.width / 20);
    const rows = Math.floor(canvas.height / 20);
    const grid: boolean[][] = Array(rows).fill(null).map(() => Array(cols).fill(false));
    let x = Math.floor(cols / 2);
    let y = Math.floor(rows / 2);
    let lastX = x;
    let lastY = y;

    const draw = () => {
      if (!ctx) return;

      const goldenColor = `hsla(${h}, ${s}%, ${l}%, 0.7)`;
      ctx.strokeStyle = goldenColor;
      ctx.lineWidth = 2;
      ctx.lineCap = 'round';
      
      // Fade out effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.03)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);


      // Move
      const direction = Math.floor(Math.random() * 4);
      switch(direction) {
        case 0: if (x > 0) x--; break; // left
        case 1: if (x < cols - 1) x++; break; // right
        case 2: if (y > 0) y--; break; // up
        case 3: if (y < rows - 1) y++; break; // down
      }

      // Draw line
      ctx.beginPath();
      ctx.moveTo(lastX * 20 + 10, lastY * 20 + 10);
      ctx.lineTo(x * 20 + 10, y * 20 + 10);
      ctx.stroke();

      lastX = x;
      lastY = y;
      
      // Reset if stuck
      if (Math.random() > 0.99) {
          x = Math.floor(Math.random() * cols);
          y = Math.floor(Math.random() * rows);
          lastX = x;
          lastY = y;
      }

      animationFrameId = window.requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full -z-10" />;
};

export default MazeBackground;
