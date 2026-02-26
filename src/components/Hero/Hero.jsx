// src/components/Hero/Hero.jsx
"use client";

import { motion, useAnimation } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

const CircularText = ({
  text = "✦ Creative Designer ✦ Frontend Developer ✦ UI/UX Expert ✦",
  spinDuration = 30,
  onHover = "speedUp",
  className = "",
}) => {
  const letters = Array.from(text);
  const controls = useAnimation();
  const containerRef = useRef(null);

  // Start infinite rotation
  useEffect(() => {
    controls.start({
      rotate: 360,
      transition: {
        ease: "linear",
        duration: spinDuration,
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  }, [controls, spinDuration]);

  const handleHoverStart = () => {
    if (!onHover) return;

    let newDuration = spinDuration;

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
        break;
      default:
        newDuration = spinDuration;
    }

    // Restart with new duration
    controls.stop();
    controls.start({
      rotate: 360,
      transition: {
        ease: "linear",
        duration: newDuration,
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  };

  const handleHoverEnd = () => {
    // Restart with original duration
    controls.stop();
    controls.start({
      rotate: 360,
      transition: {
        ease: "linear",
        duration: spinDuration,
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  };

  return (
    <motion.div
      ref={containerRef}
      className={`relative ${className}`}
      animate={controls}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
      style={{
        width: "400px",
        height: "400px",
      }}
    >
      {letters.map((letter, i) => {
        const rotationDeg = (360 / letters.length) * i;
        const radius = 180;

        // Convert polar coordinates to cartesian
        const angle = (rotationDeg * Math.PI) / 180;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);

        return (
          <span
            key={i}
            className="absolute text-gray-400/80 font-light text-sm uppercase tracking-wider transition-all duration-300 hover:text-blue-500 hover:scale-110"
            style={{
              left: "50%",
              top: "50%",
              transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${rotationDeg + 90}deg)`,
              transformOrigin: "center",
              whiteSpace: "nowrap",
            }}
          >
            {letter}
          </span>
        );
      })}
    </motion.div>
  );
};

const Hero = () => {
  const scrollToSection = (targetId, attempt = 0) => {
    const element = document.getElementById(targetId);

    if (element) {
      const offset = 88;
      const targetY =
        element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({
        top: Math.max(0, targetY),
        behavior: "smooth",
      });
      return;
    }

    if (attempt < 10) {
      window.setTimeout(() => scrollToSection(targetId, attempt + 1), 80);
    }
  };

  const handleAnchorScroll = (e, targetId) => {
    e.preventDefault();
    scrollToSection(targetId);
  };

  const scrollToNextSection = () => {
    // Find the next section after Hero (likely Skills section)
    const nextSection =
      document.getElementById("skills") ||
      document.querySelector("section:nth-of-type(2)");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    } else {
      // Fallback: scroll down by viewport height
      window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
    }
  };

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 w-full overflow-hidden relative">
      <div className="container-custom">
        <div className="content-wrapper">
          {/* Hero Content with Image */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2  mb-8  "
              >
                {/* <Sparkles size={16} className="text-gray-600" /> */}
                <span className="text-sm font-medium text-gray-600">
                  {/* Premium Digital Studio */}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] tracking-[-0.02em] font-display font-bold"
              >
                Crafting digital
                <br />
                experiences with{" "}
                <span className="text-gray-400 relative inline-block">
                  SE PISETH
                  <span className="absolute bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-gray-900 to-transparent" />
                </span>
                .
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-gray-600 max-w-xl"
              >
                We partner with ambitious startups and scaleups to build brands
                and interfaces that drive measurable growth and user engagement.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <motion.a
                  href="#contact"
                  onClick={(e) => handleAnchorScroll(e, "contact")}
                  className="px-8 py-4 bg-gray-900 text-white font-medium hover:bg-gray-800 transition-all duration-300 inline-flex items-center gap-2 border border-gray-900 rounded-lg shadow-sm hover:shadow-md"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Start a Project
                  <ArrowRight size={20} />
                </motion.a>
                <motion.a
                  href="#work"
                  onClick={(e) => handleAnchorScroll(e, "work")}
                  className="px-8 py-4 bg-transparent text-gray-900 font-medium border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 inline-flex items-center gap-2 rounded-lg shadow-sm hover:shadow-md"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View my Work
                </motion.a>
                {/* ADD THE SCROLL INDICATOR HERE */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="absolute bottom-20 left-1/2 transform -translate-x-1/2 -mx-14"
                >
                  <button
                    onClick={scrollToNextSection}
                    className="flex flex-col items-center gap-1"
                    aria-label="Scroll down"
                  >
                    <span className="text-xs text-gray-500 font-medium">
                      Scroll
                    </span>
                    <motion.div
                      animate={{
                        y: [0, 4, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "loop",
                      }}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-gray-400"
                      >
                        <path
                          d="M7.5 2C7.77614 2 8 2.22386 8 2.5L8 11.2929L11.1464 8.14645C11.3417 7.95118 11.6583 7.95118 11.8536 8.14645C12.0488 8.34171 12.0488 8.65829 11.8536 8.85355L7.85355 12.8536C7.75979 12.9473 7.63261 13 7.5 13C7.36739 13 7.24021 12.9473 7.14645 12.8536L3.14645 8.85355C2.95118 8.65829 2.95118 8.34171 3.14645 8.14645C3.34171 7.95118 3.65829 7.95118 3.85355 8.14645L7 11.2929L7 2.5C7 2.22386 7.22386 2 7.5 2Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        />
                      </svg>
                    </motion.div>
                  </button>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Column - Image with Circular Text */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full max-w-2xl mx-auto">
                {/* Circular Text Behind Image */}
                <div className="absolute inset-0 flex items-center justify-center z-0">
                  <CircularText
                    text="✦ Creative Designer ✦✦Full Stack Developer ✦✦  flexibility ✦"
                    spinDuration={30}
                    onHover="speedUp"
                    className=""
                  />
                </div>

                {/* Main Image Container */}
                <div className="relative z-10">
                  <div className="aspect-[4/5] w-full">
                    <img
                      src="/image-me.png"
                      alt="Profile"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>

                {/* Floating Badge */}
                {/* <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -bottom-4 -right-4 bg-gray-900 text-white p-4 rounded-xl shadow-xl z-20"
                >
                  <div className="text-2xl font-bold">7+</div>
                  <div className="text-xs font-medium">Years Exp</div>
                </motion.div> */}

                {/* Decorative Background Elements */}
                <div className="absolute -z-10 -top-6 -right-6 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-3xl blur-2xl" />
                <div className="absolute -z-10 -bottom-6 -left-6 w-48 h-48 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl blur-2xl" />
              </div>
            </motion.div>
          </div>

          {/* Stats Bar - Full width below hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-20 pt-12 border-t border-gray-200 w-full"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {[
                { value: "^", label: "consistency" },
                { value: "5+", label: "Projects Delivered" },
                { value: "+", label: "HOBBY" },
                { value: "-", label: "EXPLORE" },
              ].map((stat, index) => (
                <div key={index} className="text-center md:text-left">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Arrow Indicator */}
      {/* <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <button
          onClick={scrollToNextSection}
          className="group flex flex-col items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors duration-300"
          aria-label="Scroll down to see more"
        >
          <span className="text-sm font-medium mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Explore more
          </span>
          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="p-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm group-hover:shadow-md transition-all duration-300"
          >
            <ChevronDown
              size={24}
              className="group-hover:scale-110 transition-transform duration-300"
            />
          </motion.div>
        </button>
      </motion.div> */}

      {/* Optional: Add fade gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
