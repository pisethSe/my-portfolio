// src/components/Skills/Skills.jsx
"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Palette,
  Server,
  ChevronRight,
  CheckCircle,
  Database,
  Cpu,
  FileCode,
} from "lucide-react";
// If you installed react-icons, use these:

// Keep only available imports
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiMicrosoftsqlserver,
} from "react-icons/si";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  // Tech logo data with colors AND real icons
  // Updated techLogos array with all technologies

  const techLogos = useMemo(
    () => [
      // Frontend Basics
      {
        name: "HTML",
        color: "from-orange-500 to-orange-600",
        icon: <SiHtml5 className="w-6 h-6 text-[#E34F26]" />,
      },
      {
        name: "CSS",
        color: "from-blue-500 to-blue-600",
        icon: <SiCss3 className="w-6 h-6 text-[#1572B6]" />,
      },
      {
        name: "JavaScript",
        color: "from-yellow-400 to-yellow-500",
        icon: <SiJavascript className="w-6 h-6 text-[#F7DF1E]" />,
      },

      // Frontend Development
      {
        name: "React.js",
        color: "from-cyan-400 to-blue-500",
        icon: <SiReact className="w-6 h-6 text-[#61DAFB]" />,
      },
      {
        name: "TypeScript",
        color: "from-blue-500 to-blue-700",
        icon: <SiTypescript className="w-6 h-6 text-[#007ACC]" />,
      },
      {
        name: "Tailwind CSS",
        color: "from-teal-400 to-cyan-500",
        icon: <SiTailwindcss className="w-6 h-6 text-[#06B6D4]" />,
      },
      {
        name: "Framer Motion",
        color: "from-purple-500 to-pink-500",
        icon: <Cpu className="w-6 h-6 text-[#ec4899]" />,
      },
      {
        name: "GSAP",
        color: "from-green-500 to-lime-500",
        icon: <Cpu className="w-6 h-6 text-[#84cc16]" />,
      },

      // Backend & APIs
      {
        name: "Node.js",
        color: "from-green-500 to-green-700",
        icon: <SiNodedotjs className="w-6 h-6 text-[#339933]" />,
      },
      {
        name: "Express",
        color: "from-gray-400 to-gray-600",
        icon: <SiExpress className="w-6 h-6 text-black" />,
      },
      {
        name: "JWT",
        color: "from-orange-500 to-amber-500",
        icon: <FileCode className="w-6 h-6 text-[#f97316]" />,
      },
      {
        name: "OAuth2",
        color: "from-indigo-500 to-purple-500",
        icon: <Server className="w-6 h-6 text-[#6366f1]" />,
      },
      {
        name: "REST API",
        color: "from-sky-500 to-cyan-500",
        icon: <Server className="w-6 h-6 text-[#0ea5e9]" />,
      },

      // Databases
      {
        name: "PostgreSQL",
        color: "from-blue-400 to-blue-600",
        icon: <SiPostgresql className="w-6 h-6 text-[#336791]" />,
      },
      {
        name: "MySQL",
        color: "from-blue-500 to-blue-700",
        icon: <SiMysql className="w-6 h-6 text-[#4479A1]" />,
      },
      {
        name: "SQL Server",
        color: "from-red-500 to-red-700",
        icon: <SiMicrosoftsqlserver className="w-6 h-6 text-[#CC2927]" />,
      },
      {
        name: "SQLite",
        color: "from-slate-500 to-gray-700",
        icon: <Database className="w-6 h-6 text-[#64748b]" />,
      },
    ],
    [],
  );

  // State for auto-flipping cards
  const [flippedCards, setFlippedCards] = useState({});

  // Auto-flip cards with different intervals
  useEffect(() => {
    const intervals = techLogos.map((tech, index) => {
      // Random interval between 3-8 seconds for variety
      const interval = 3000 + Math.random() * 5000 + index * 300;

      return setInterval(() => {
        setFlippedCards((prev) => ({
          ...prev,
          [tech.name]: !prev[tech.name],
        }));
      }, interval);
    });

    // Cleanup intervals on component unmount
    return () => intervals.forEach((interval) => clearInterval(interval));
  }, [techLogos]);

  // Updated getTechCategory with all technologies
  const getTechCategory = (techName) => {
    const categories = {
      // Frontend Basics
      HTML: { name: "Markup", icon: <Code className="w-3 h-3" /> },
      CSS: { name: "Styling", icon: <Palette className="w-3 h-3" /> },
      JavaScript: { name: "Language", icon: <FileCode className="w-3 h-3" /> },

      // Frontend Frameworks
      "React.js": { name: "Frontend", icon: <Code className="w-3 h-3" /> },
      TypeScript: { name: "Language", icon: <FileCode className="w-3 h-3" /> },
      "Tailwind CSS": {
        name: "CSS Framework",
        icon: <Palette className="w-3 h-3" />,
      },
      "Framer Motion": {
        name: "Animation",
        icon: <Cpu className="w-3 h-3" />,
      },
      GSAP: { name: "Animation", icon: <Cpu className="w-3 h-3" /> },

      // Backend & APIs
      "Node.js": { name: "Backend", icon: <Server className="w-3 h-3" /> },
      Express: { name: "Backend", icon: <Server className="w-3 h-3" /> },
      JWT: { name: "Authentication", icon: <FileCode className="w-3 h-3" /> },
      OAuth2: { name: "Authentication", icon: <Server className="w-3 h-3" /> },
      "REST API": { name: "API", icon: <Server className="w-3 h-3" /> },

      // Databases
      PostgreSQL: { name: "Database", icon: <Database className="w-3 h-3" /> },
      MySQL: { name: "Database", icon: <Database className="w-3 h-3" /> },
      "SQL Server": {
        name: "Database",
        icon: <Database className="w-3 h-3" />,
      },
      SQLite: { name: "Database", icon: <Database className="w-3 h-3" /> },
    };

    return (
      categories[techName] || {
        name: "Technology",
        icon: <Cpu className="w-3 h-3" />,
      }
    );
  };

  const getTechLevel = (techName) => {
    const levels = {
      // Frontend Basics
      HTML: 98,
      CSS: 95,
      JavaScript: 96,

      // Frontend Frameworks
      "React.js": 96,
      TypeScript: 92,
      "Tailwind CSS": 95,
      "Framer Motion": 88,
      GSAP: 86,

      // Backend & APIs
      "Node.js": 92,
      Express: 90,
      JWT: 90,
      OAuth2: 88,
      "REST API": 91,

      // Databases
      PostgreSQL: 88,
      MySQL: 90,
      "SQL Server": 88,
      SQLite: 86,
    };

    return levels[techName] || 85;
  };

  const skillCategories = [
    {
      id: "frontend",
      icon: <Code className="w-5 h-5" />,
      title: "Frontend Development",
      description: "Building modern interactive UIs",
      skills: [
        {
          name: "React.js",
          level: 96,
          color: "from-blue-500 to-cyan-500",
        },
        {
          name: "JavaScript",
          level: 95,
          color: "from-yellow-400 to-amber-500",
        },
        {
          name: "TypeScript",
          level: 92,
          color: "from-blue-600 to-indigo-500",
        },
        {
          name: "Tailwind CSS",
          level: 95,
          color: "from-teal-500 to-emerald-500",
        },
        {
          name: "Framer Motion",
          level: 88,
          color: "from-purple-500 to-pink-500",
        },
        {
          name: "GSAP",
          level: 86,
          color: "from-green-500 to-lime-500",
        },
      ],
      features: [
        "Component Architecture",
        "JavaScript & TypeScript",
        "Performance Optimization",
        "Interactive Animations",
      ],
    },
    {
      id: "backend",
      icon: <Server className="w-5 h-5" />,
      title: "Backend & APIs",
      description: "Building scalable server-side solutions",
      skills: [
        {
          name: "Node.js/Express",
          level: 92,
          color: "from-green-500 to-emerald-500",
        },
        {
          name: "JWT",
          level: 90,
          color: "from-orange-500 to-amber-500",
        },
        {
          name: "OAuth2",
          level: 88,
          color: "from-indigo-500 to-violet-500",
        },
        {
          name: "REST API",
          level: 91,
          color: "from-sky-500 to-cyan-500",
        },
      ],
      features: [
        "Node.js/Express",
        "JWT Authentication",
        "OAuth2 Authorization",
        "REST API Development",
      ],
    },
    {
      id: "design",
      icon: <Palette className="w-5 h-5" />,
      title: "UI/UX Design",
      description: "Creating beautiful and functional user experiences",
      skills: [
        { name: "Figma", level: 94, color: "from-purple-500 to-pink-500" },
        {
          name: "User Research",
          level: 88,
          color: "from-orange-500 to-amber-500",
        },
        {
          name: "Prototyping",
          level: 92,
          color: "from-cyan-500 to-blue-500",
        },
        {
          name: "Design Systems",
          level: 90,
          color: "from-violet-500 to-purple-500",
        },
      ],
      features: [
        "User Flows",
        "Wireframing",
        "Design Systems",
        "Usability Testing",
      ],
    },
    {
      id: "database",
      icon: <Database className="w-5 h-5" />,
      title: "Database",
      description: "Designing and managing relational databases",
      skills: [
        {
          name: "MySQL",
          level: 90,
          color: "from-blue-500 to-indigo-500",
        },
        {
          name: "SQL Server",
          level: 88,
          color: "from-red-500 to-rose-500",
        },
        {
          name: "PostgreSQL",
          level: 89,
          color: "from-cyan-500 to-blue-500",
        },
        { name: "SQLite", level: 86, color: "from-slate-500 to-gray-600" },
      ],
      features: [
        "Schema Design",
        "Query Optimization",
        "Data Modeling",
        "Migrations",
      ],
    },
  ];

  return (
    <section className="py-20 w-full">
      <div className="container-custom">
        <div className="content-wrapper">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium text-gray-700">
                TECHNICAL EXPERTISE
              </span>
            </div> */}
            <span className="text-sm font-medium text-gray-500 uppercase tracking-[0.2em] mb-4 block">
              TECHNICAL EXPERTISE
            </span>

            <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">
              Skills &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">
                Capabilities
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, scalable applications
              with exceptional user experiences
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-4 gap-6">
            {/* Category Selector */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-2">
                {skillCategories.map((category, index) => (
                  <motion.button
                    key={category.id}
                    onClick={() => setActiveCategory(index)}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-300 flex items-center gap-3 ${
                      activeCategory === index
                        ? "bg-gray-900 text-white shadow-md"
                        : "bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-200"
                    }`}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div
                      className={`p-2 rounded ${
                        activeCategory === index ? "bg-white/20" : "bg-white"
                      }`}
                    >
                      <div
                        className={
                          activeCategory === index
                            ? "text-white"
                            : "text-gray-700"
                        }
                      >
                        {category.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-sm">
                        {category.title}
                      </div>
                    </div>
                    {activeCategory === index && (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Skills Display */}
            <div className="lg:col-span-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white border border-gray-200 rounded-xl p-6"
                >
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-gradient-to-br from-gray-900 to-gray-700 rounded-lg text-white">
                        {skillCategories[activeCategory].icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-display font-semibold">
                          {skillCategories[activeCategory].title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {skillCategories[activeCategory].description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Progress Bars */}
                  <div className="space-y-6 mb-8">
                    {skillCategories[activeCategory].skills.map(
                      (skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, width: 0 }}
                          animate={{ opacity: 1, width: "100%" }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-medium text-gray-900">
                              {skill.name}
                            </span>
                            <span className="font-bold text-gray-900">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: index * 0.2 }}
                              className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                            />
                          </div>
                        </motion.div>
                      ),
                    )}
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-lg font-display font-semibold mb-4">
                      Key Features
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {skillCategories[activeCategory].features.map(
                        (feature, index) => (
                          <motion.div
                            key={feature}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center gap-2 text-gray-700 text-sm"
                          >
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>{feature}</span>
                          </motion.div>
                        ),
                      )}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Technologies Grid with Styled Horizontal Scroll */}

              {/* Technologies Grid - Single Grid with 2 Rows */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-10"
              >
                <div className="mb-6 px-6 sm:px-6 lg:px-8">
                  <h4 className="text-lg font-display font-semibold text-gray-900 mb-3">
                    Technologies & Tools
                  </h4>
                  <p className="text-sm text-gray-600">
                    Cards flip automatically to show details
                  </p>
                </div>

                {/* Single Grid - 2 Rows worth of cards */}
                <div className="px-4 sm:px-6 lg:px-8 ">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-8 xl:grid-cols-6 gap-5 w-full mx-36 max-w-full gap-x-9 ">
                    {techLogos.map((tech, index) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.03 }}
                        className="relative h-32 w-44 cursor-pointer perspective"
                      >
                        <div className="flip-vertical-container w-full h-full">
                          <div
                            className={`flip-vertical-inner w-full h-full transition-transform duration-500 ${
                              flippedCards[tech.name] ? "rotate-x-180" : ""
                            }`}
                            style={{ transformStyle: "preserve-3d" }}
                          >
                            {/* Front Side with ONLY ICON (no text) */}
                            <div className="flip-vertical-front absolute inset-0 bg-white rounded-lg border border-gray-200 flex flex-col items-center justify-center p-3 shadow-sm">
                              <div className="w-16 h-16 flex items-center justify-center">
                                {tech.icon} {/* ONLY THE ICON */}
                              </div>
                              {/* REMOVED: The tech.name text span */}
                            </div>

                            {/* Back */}
                            <div
                              className={`flip-vertical-back absolute inset-0 rounded-2xl flex flex-col items-center justify-center p-6 bg-gradient-to-br ${tech.color} shadow-2xl`}
                              style={{ transform: "rotateX(180deg)" }}
                            >
                              <span className="font-bold text-white text-xs text-center mb-1">
                                {tech.name}
                              </span>
                              <span className="text-white/90 text-[10px] text-center mb-2">
                                {getTechCategory(tech.name).name}{" "}
                                {/* FIXED: Changed .icon to .name */}
                              </span>
                              <div className="w-full px-2">
                                <div className="flex justify-between text-[10px] text-white/90 mb-0.5">
                                  <span>Skill</span>
                                  <span className="font-bold">
                                    {getTechLevel(tech.name)}%
                                  </span>
                                </div>
                                <div className="w-full h-1 bg-white/30 rounded-full overflow-hidden">
                                  <div
                                    className="h-full bg-white rounded-full transition-all duration-300"
                                    style={{
                                      width: `${getTechLevel(tech.name)}%`,
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Vertical Flip CSS */}
      <style>{`
        .flip-vertical-container {
          perspective: 1000px;
        }

        .flip-vertical-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          transform-style: preserve-3d;
        }

        .rotate-x-180 {
          transform: rotateX(180deg);
        }

        .flip-vertical-front,
        .flip-vertical-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 0.75rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .flip-vertical-back {
          transform: rotateX(180deg);
        }

        .line-clamp-1 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
        }
      `}</style>
    </section>
  );
};

export default Skills;
