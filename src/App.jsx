// src/App.jsx
"use client";

import { useEffect, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { smoothScroll } from "./lib/smooth-scroll";

// Lazy load components
const Navbar = lazy(() => import("./components/Navigation/Navbar"));
const Hero = lazy(() => import("./components/Hero/Hero"));
const About = lazy(() => import("./components/About/About"));
const Skills = lazy(() => import("./components/Skills/Skills"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Testimonials = lazy(
  () => import("./components/Testimonials/ClientTestimonials"),
);
const Contact = lazy(() => import("./components/Contact/ContactForm"));
const Footer = lazy(() => import("./components/Footer"));

const SectionLoader = () => (
  <div className="h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-2 border-gray-900 border-t-transparent"></div>
  </div>
);

export default function Home() {
  useEffect(() => {
    smoothScroll.init();
    return () => {
      smoothScroll.destroy();
    };
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  //  bg-color: bg-[#e9e9e9
  return (
    <AnimatePresence mode="wait">
      <div className="min-h-screen bg-white  w-full overflow-x-hidden">
        <Suspense fallback={<SectionLoader />}>
          <Navbar />
        </Suspense>

        <main className="w-full">
          {/* Hero Section */}
          <motion.section
            id="home"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            className="w-full"
          >
            <Suspense fallback={<div className="h-screen" />}>
              <Hero />
            </Suspense>
          </motion.section>

          {/* About Section */}
          <motion.section
            id="about"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <Suspense fallback={null}>
              <About />
            </Suspense>
          </motion.section>

          {/* Skills Section */}
          <motion.section
            id="skills"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="w-full"
          >
            <Suspense fallback={null}>
              <Skills />
            </Suspense>
          </motion.section>

          {/* Projects Section */}
          <motion.section
            variants={sectionVariants}
            initial={false}
            animate="visible"
            className="w-full"
          >
            <Suspense
              fallback={
                <div className="py-24 text-center text-gray-500">
                  Loading projects...
                </div>
              }
            >
              <Projects />
            </Suspense>
          </motion.section>

          {/* Testimonials */}
          <motion.section
            id="testimonials"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="w-full"
          >
            <Suspense fallback={null}>
              <Testimonials />
            </Suspense>
          </motion.section>

          {/* Contact */}
          <motion.section
            id="contact"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="w-full"
          >
            <Suspense fallback={null}>
              <Contact />
            </Suspense>
          </motion.section>
        </main>

        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </AnimatePresence>
  );
}
