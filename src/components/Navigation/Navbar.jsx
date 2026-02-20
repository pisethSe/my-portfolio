// src/components/Navigation/Navbar.jsx
"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import clsx from "clsx";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Memoize navItems to prevent unnecessary re-renders
  const navItems = useMemo(
    () => [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Work", href: "#work" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "Contact", href: "#contact" },
    ],
    [],
  );

  // Handle scroll detection
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);

    // Update active section
    const sections = navItems.map((item) => item.href.replace("#", ""));
    const current = sections.find((section) => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      }
      return false;
    });
    if (current) setActiveSection(current);
  }, [navItems]);

  useEffect(() => {
    // Set initial active section
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Smooth scroll handler
  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);

    const targetId = href.replace("#", "");
    setActiveSection(targetId); // Immediately set active section

    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        "backdrop-blur-md supports-[backdrop-filter]:bg-white/95",
        isScrolled ? "shadow-md py-2" : "py-4",
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="text-2xl font-display font-bold tracking-tight group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Portfolio
            </span>
            <span className="inline-block w-1.5 h-1.5 bg-gray-900 rounded-full ml-1 group-hover:scale-125 transition-transform" />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <motion.div key={item.label} className="relative">
                  <motion.button
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={clsx(
                      "relative px-4 py-2 text-sm font-medium transition-all duration-200",
                      isActive
                        ? "text-gray-900"
                        : "text-gray-600 hover:text-gray-900",
                    )}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                  </motion.button>

                  {/* Animated underline - each has its own layoutId */}
                  {isActive && (
                    <motion.div
                      layoutId={`underline-${item.href}`}
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.div>
              );
            })}

            <motion.button
              onClick={(e) => handleNavClick(e, "#contact")}
              className="ml-4 px-6 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-all duration-300 flex items-center gap-2 shadow-md"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Start Project
              <ChevronRight size={16} />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 overflow-hidden shadow-lg"
          >
            <div className="container-custom py-4">
              <div className="space-y-1">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.href.replace("#", "");
                  return (
                    <motion.button
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={clsx(
                        "w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 flex items-center justify-between",
                        isActive
                          ? "bg-gray-100 text-gray-900"
                          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                      )}
                    >
                      {item.label}
                      {isActive && (
                        <motion.div
                          layoutId={`mobile-underline-${item.href}`}
                          className="w-1 h-6 bg-gray-900 rounded-full"
                          initial={false}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 30,
                          }}
                        />
                      )}
                    </motion.button>
                  );
                })}
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.05 }}
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="w-full mt-4 px-4 py-3 bg-gray-900 text-white text-base font-medium rounded-lg hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center gap-2 shadow-md"
                >
                  Start Project
                  <ChevronRight size={20} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
