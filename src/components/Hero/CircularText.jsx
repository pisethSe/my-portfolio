// src/components/Hero/CircularText.jsx
"use client";

import { useEffect } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";

const CircularText = ({
  text,
  spinDuration = 25,
  onHover = "speedUp",
  className = "",
}) => {
  const letters = Array.from(text);
  const controls = useAnimation();
  const rotation = useMotionValue(0);

  useEffect(() => {
    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      scale: 1,
      transition: {
        rotate: {
          from: start,
          to: start + 360,
          ease: "linear",
          duration: spinDuration,
          repeat: Infinity,
          type: "tween",
        },
        scale: {
          type: "spring",
          damping: 20,
          stiffness: 300,
        },
      },
    });
  }, [spinDuration, controls, rotation]);

  const handleHoverStart = () => {
    const start = rotation.get();
    if (!onHover) return;

    let newDuration = spinDuration;
    let scaleVal = 1;

    switch (onHover) {
      case "slowDown":
        newDuration = spinDuration * 2;
        break;
      case "speedUp":
        newDuration = spinDuration / 3;
        break;
      case "pause":
        controls.stop();
        return;
      case "goBonkers":
        newDuration = spinDuration / 10;
        scaleVal = 0.8;
        break;
      default:
        newDuration = spinDuration;
    }

    controls.start({
      rotate: start + 360,
      scale: scaleVal,
      transition: {
        rotate: {
          from: start,
          to: start + 360,
          ease: "linear",
          duration: newDuration,
          repeat: Infinity,
          type: "tween",
        },
        scale: {
          type: "spring",
          damping: 20,
          stiffness: 300,
        },
      },
    });
  };

  const handleHoverEnd = () => {
    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      scale: 1,
      transition: {
        rotate: {
          from: start,
          to: start + 360,
          ease: "linear",
          duration: spinDuration,
          repeat: Infinity,
          type: "tween",
        },
        scale: {
          type: "spring",
          damping: 20,
          stiffness: 300,
        },
      },
    });
  };

  return (
    <motion.div
      className={`relative ${className}`}
      style={{ rotate: rotation }}
      initial={{ rotate: 0 }}
      animate={controls}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      {letters.map((letter, i) => {
        const rotationDeg = (360 / letters.length) * i;
        const radius = 140;

        return (
          <span
            key={i}
            className="absolute text-gray-400/80 font-light text-xs uppercase tracking-wider transition-all duration-300 hover:text-blue-400/80"
            style={{
              left: "50%",
              top: "50%",
              transform: `translate(-50%, -50%) rotate(${rotationDeg}deg) translate(${radius}px) rotate(-${rotationDeg}deg)`,
              transformOrigin: "0 0",
            }}
          >
            {letter}
          </span>
        );
      })}
    </motion.div>
  );
};

export default CircularText;
