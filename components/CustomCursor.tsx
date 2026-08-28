import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      
      const isClickable = 
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer');

      setIsHovering(!!isClickable);

      const isDraggable = target.classList.contains('cursor-ew-resize') || target.closest('.cursor-ew-resize');
      setIsDragging(!!isDraggable);
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.body.addEventListener('mouseleave', onMouseLeave);
    document.body.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.body.removeEventListener('mouseleave', onMouseLeave);
      document.body.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      <div 
        className="fixed top-0 left-0 pointer-events-none z-[10000] mix-blend-difference transition-transform duration-300 ease-out flex items-center justify-center"
        style={{ 
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%) scale(${isClicking ? 0.8 : isDragging ? 1.5 : isHovering ? 1.5 : 1})`,
        }}
      >
        <div 
          className={`rounded-full border border-white transition-all duration-300 ease-out flex items-center justify-center ${
            isDragging ? 'w-12 h-12 bg-white text-black' : isHovering ? 'w-10 h-10 bg-transparent' : 'w-6 h-6 bg-transparent opacity-50'
          }`}
        >
          {isDragging && (
            <span className="text-[8px] font-mono font-bold tracking-widest uppercase text-black">Drag</span>
          )}
        </div>
      </div>
      
      <div 
        className="fixed top-0 left-0 pointer-events-none z-[10000] mix-blend-difference transition-transform duration-75 ease-out"
        style={{ 
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        <div className={`w-1.5 h-1.5 bg-white rounded-full transition-opacity duration-300 ${isDragging ? 'opacity-0' : 'opacity-100'}`} />
      </div>
    </>
  );
};

export default CustomCursor;
