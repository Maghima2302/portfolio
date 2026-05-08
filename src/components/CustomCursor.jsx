import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    let mouseX = 0, mouseY = 0;
    let curX = 0, curY = 0;

    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = `${mouseX - 3}px`;
      dot.style.top = `${mouseY - 3}px`;
    };

    const lerp = (a, b, t) => a + (b - a) * t;

    const animate = () => {
      curX = lerp(curX, mouseX, 0.12);
      curY = lerp(curY, mouseY, 0.12);
      cursor.style.left = `${curX - 10}px`;
      cursor.style.top = `${curY - 10}px`;
      requestAnimationFrame(animate);
    };
    animate();

    const grow = () => { cursor.style.transform = 'scale(2)'; cursor.style.borderColor = '#9B59B6'; };
    const shrink = () => { cursor.style.transform = 'scale(1)'; cursor.style.borderColor = '#FF6B9D'; };

    document.addEventListener('mousemove', move);
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', grow);
      el.addEventListener('mouseleave', shrink);
    });

    return () => {
      document.removeEventListener('mousemove', move);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" data-testid="custom-cursor" />
      <div ref={dotRef} className="cursor-dot" data-testid="cursor-dot" />
    </>
  );
};

export default CustomCursor;
