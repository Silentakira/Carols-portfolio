'use client';

import { useEffect, useRef } from 'react';

export default function Cursor() {
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || window.matchMedia('(hover: none)').matches) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('.hover-target, a, button')) {
        document.body.classList.add('cursor-hover');
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('.hover-target, a, button')) {
        document.body.classList.remove('cursor-hover');
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    const animateCursor = () => {
      const ring = ringRef.current;
      if (!ring) {
        animationFrameId = requestAnimationFrame(animateCursor);
        return;
      }

      const dx = mouseX - ringX;
      const dy = mouseY - ringY;
      
      ringX += dx * 0.15;
      ringY += dy * 0.15;
      
      const speed = Math.sqrt(dx * dx + dy * dy);
      const angle = Math.atan2(dy, dx) * 180 / Math.PI;
      const stretch = 1 + Math.min(speed * 0.015, 1.5); 
      const squash = 1 / stretch; 
      
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) rotate(${angle}deg) scale(${stretch}, ${squash})`;
      
      animationFrameId = requestAnimationFrame(animateCursor);
    };
    
    animationFrameId = requestAnimationFrame(animateCursor);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(animationFrameId);
      document.body.classList.remove('cursor-hover');
    };
  }, []);

  return (
    <div
      className="cursor-ring"
      id="cursor-ring"
      ref={ringRef}
      style={{
        transition: 'none',
        willChange: 'transform',
      }}
    ></div>
  );
}
