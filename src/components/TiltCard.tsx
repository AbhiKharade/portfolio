import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function TiltCard({ children, className = '' }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring physics for the tilt
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  // Map mouse position to rotation (max 10 degrees)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    // Only apply tilt on non-touch devices (coarse pointer usually means touch)
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const rect = ref.current.getBoundingClientRect();
    
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div style={{ perspective: 1000 }} className="w-full h-full">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={`relative w-full h-full group ${className}`}
      >
        {/* Dynamic glow effect that intensifies on hover */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-primary/0 via-accent-purple/0 to-accent-cyan/0 rounded-2xl group-hover:from-primary/20 group-hover:via-accent-purple/20 group-hover:to-accent-cyan/20 transition-all duration-500 blur-xl -z-10 opacity-0 group-hover:opacity-100"
          style={{ transform: "translateZ(-20px)" }}
        />
        
        {/* Content wrapper with translateZ for parallax */}
        <div
          style={{
            transform: "translateZ(30px)",
            transformStyle: "preserve-3d",
          }}
          className="w-full h-full"
        >
          {children}
        </div>
      </motion.div>
    </div>
  );
}
