
import React, { useState, useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  end: number;
  duration: number;
  className?: string;
  suffix?: string;
}

const AnimatedCounter = ({ end, duration, className = "", suffix = "" }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<number>(0);
  const startTimeRef = useRef<number | null>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    // Reset counter when end value changes
    countRef.current = 0;
    setCount(0);
    startTimeRef.current = null;
    
    // Start animation when element is in view
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const currentElement = document.getElementById(`counter-${end}`);
    if (currentElement) {
      observer.observe(currentElement);
    }
    
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      observer.disconnect();
    };
  }, [end, duration]);

  const startAnimation = () => {
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }
      
      const progress = timestamp - startTimeRef.current;
      const percentage = Math.min(progress / duration, 1);
      
      // Use easeOutQuad easing function for smoother animation
      const easePercentage = 1 - (1 - percentage) * (1 - percentage);
      
      countRef.current = Math.floor(easePercentage * end);
      setCount(countRef.current);
      
      if (percentage < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };
    
    frameRef.current = requestAnimationFrame(animate);
  };

  return (
    <span id={`counter-${end}`} className={className}>
      {count}{suffix}
    </span>
  );
};

export default AnimatedCounter;
