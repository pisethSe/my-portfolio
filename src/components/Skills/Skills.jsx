// src/components/Skills/Skills.jsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Palette,
  Server,
  ChevronRight,
  CheckCircle,
  Database,
  Cpu,
  Rocket,
} from "lucide-react";

// Real technology brand icons
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiLaravel,
  SiFastapi,
  SiAdobephotoshop,
  SiMysql,
  SiMicrosoftsqlserver,
  SiPostgresql,
  SiSqlite,
  SiRedis,
  SiDocker,
  SiGithubactions,
} from "react-icons/si";

// Tech logo data with colors AND real icons
// Follows the Skills & Capabilities categories above
const techLogos = [
  // Frontend Development
    {
      name: "TypeScript",
      color: "from-blue-500 to-blue-700",
      icon: <SiTypescript className="w-[28px] h-[28px] text-[#3178C6]" />,
    },
    {
      name: "React.js",
      color: "from-cyan-400 to-blue-500",
      icon: <SiReact className="w-[28px] h-[28px] text-[#61DAFB]" />,
    },
    {
      name: "Next.js",
      color: "from-gray-700 to-gray-900",
      icon: <SiNextdotjs className="w-[28px] h-[28px] text-black" />,
    },
    {
      name: "Tailwind CSS",
      color: "from-teal-400 to-cyan-500",
      icon: <SiTailwindcss className="w-[28px] h-[28px] text-[#06B6D4]" />,
    },

    // Backend & APIs
    {
      name: "Node.js",
      color: "from-green-500 to-green-700",
      icon: <SiNodedotjs className="w-[28px] h-[28px] text-[#339933]" />,
    },
    {
      name: "Express",
      color: "from-gray-400 to-gray-600",
      icon: <SiExpress className="w-[28px] h-[28px] text-black" />,
    },
    {
      name: "NestJS",
      color: "from-red-500 to-rose-600",
      icon: <SiNestjs className="w-[28px] h-[28px] text-[#E0234E]" />,
    },
    {
      name: "Laravel",
      color: "from-orange-500 to-red-500",
      icon: <SiLaravel className="w-[28px] h-[28px] text-[#FF2D20]" />,
    },
    {
      name: "FastAPI",
      color: "from-teal-500 to-emerald-600",
      icon: <SiFastapi className="w-[28px] h-[28px] text-[#009688]" />,
    },

    // Graphic Design
    {
      name: "Photoshop",
      color: "from-blue-400 to-blue-600",
      icon: <SiAdobephotoshop className="w-[28px] h-[28px] text-[#31A8FF]" />,
    },

    // Databases
    {
      name: "MySQL",
      color: "from-blue-500 to-blue-700",
      icon: <SiMysql className="w-[28px] h-[28px] text-[#4479A1]" />,
    },
    {
      name: "SQL Server",
      color: "from-red-500 to-red-700",
      icon: <SiMicrosoftsqlserver className="w-[28px] h-[28px] text-[#CC2927]" />,
    },
    {
      name: "PostgreSQL",
      color: "from-blue-400 to-blue-600",
      icon: <SiPostgresql className="w-[28px] h-[28px] text-[#4169E1]" />,
    },
    {
      name: "SQLite",
      color: "from-slate-500 to-gray-700",
      icon: <SiSqlite className="w-[28px] h-[28px] text-[#003B57]" />,
    },
    {
      name: "Redis",
      color: "from-rose-500 to-red-600",
      icon: <SiRedis className="w-[28px] h-[28px] text-[#DC382D]" />,
    },

    // Deployment
    {
      name: "Docker",
      color: "from-sky-500 to-blue-600",
      icon: <SiDocker className="w-[28px] h-[28px] text-[#2496ED]" />,
    },
    {
      name: "GitHub Actions",
      color: "from-gray-700 to-gray-900",
      icon: <SiGithubactions className="w-[28px] h-[28px] text-[#2088FF]" />,
    },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

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
  }, []);

  // Category info for each technology
  const getTechCategory = (techName) => {
    const categories = {
      // Frontend Development
      TypeScript: { name: "Frontend", icon: <Code className="w-3 h-3" /> },
      "React.js": { name: "Frontend", icon: <Code className="w-3 h-3" /> },
      "Next.js": { name: "Frontend", icon: <Code className="w-3 h-3" /> },
      "Tailwind CSS": { name: "Frontend", icon: <Palette className="w-3 h-3" /> },

      // Backend & APIs
      "Node.js": { name: "Backend", icon: <Server className="w-3 h-3" /> },
      Express: { name: "Backend", icon: <Server className="w-3 h-3" /> },
      NestJS: { name: "Backend", icon: <Server className="w-3 h-3" /> },
      Laravel: { name: "Backend", icon: <Server className="w-3 h-3" /> },
      FastAPI: { name: "API", icon: <Server className="w-3 h-3" /> },

      // Graphic Design
      Photoshop: { name: "Design", icon: <Palette className="w-3 h-3" /> },

      // Databases
      MySQL: { name: "Database", icon: <Database className="w-3 h-3" /> },
      "SQL Server": { name: "Database", icon: <Database className="w-3 h-3" /> },
      PostgreSQL: { name: "Database", icon: <Database className="w-3 h-3" /> },
      SQLite: { name: "Database", icon: <Database className="w-3 h-3" /> },
      Redis: { name: "Database", icon: <Database className="w-3 h-3" /> },

      // Deployment
      Docker: { name: "DevOps", icon: <Rocket className="w-3 h-3" /> },
      "GitHub Actions": { name: "DevOps", icon: <Rocket className="w-3 h-3" /> },
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
      // Frontend Development
      TypeScript: 92,
      "React.js": 95,
      "Next.js": 90,
      "Tailwind CSS": 95,

      // Backend & APIs
      "Node.js": 92,
      Express: 90,
      NestJS: 88,
      Laravel: 86,
      FastAPI: 89,

      // Graphic Design
      Photoshop: 90,

      // Databases
      MySQL: 90,
      "SQL Server": 88,
      PostgreSQL: 89,
      SQLite: 86,
      Redis: 85,

      // Deployment
      Docker: 88,
      "GitHub Actions": 87,
    };

    return levels[techName] || 85;
  };

  const skillCategories = [
    {
      id: "frontend",
      icon: <Code className="w-[18px] h-[18px]" />,
      title: "Frontend Development",
      description: "Building modern interactive UIs",
      skills: [
        {
          name: "TypeScript",
          level: 92,
          color: "from-blue-600 to-indigo-500",
        },
        {
          name: "React.js",
          level: 95,
          color: "from-blue-500 to-cyan-500",
        },
        {
          name: "Next.js",
          level: 90,
          color: "from-gray-700 to-gray-900",
        },
        {
          name: "Tailwind CSS",
          level: 95,
          color: "from-teal-500 to-emerald-500",
        },
      ],
      features: [
        "Component Architecture",
        "TypeScript",
        "Performance Optimization",
        "Responsive Design",
      ],
    },
    {
      id: "backend",
      icon: <Server className="w-[18px] h-[18px]" />,
      title: "Backend & APIs",
      description: "Building scalable server-side solutions",
      skills: [
        {
          name: "Node.js/Express",
          level: 92,
          color: "from-green-500 to-emerald-500",
        },
        {
          name: "NestJS",
          level: 88,
          color: "from-red-500 to-rose-500",
        },
        {
          name: "Laravel",
          level: 86,
          color: "from-orange-500 to-red-500",
        },
        {
          name: "FastAPI",
          level: 89,
          color: "from-teal-500 to-cyan-500",
        },
      ],
      features: [
        "REST API Development",
        "JWT Authentication",
        "System Integration",
        "Scalable Architecture",
      ],
    },
    {
      id: "design",
      icon: <Palette className="w-[18px] h-[18px]" />,
      title: "Graphic Design",
      description: "Creating clean visual content with Photoshop",
      skills: [
        {
          name: "Photoshop",
          level: 90,
          color: "from-blue-400 to-blue-600",
        },
      ],
      features: [
        "Photo Editing",
        "Visual Content",
        "Layout Design",
        "Retouching",
      ],
    },
    {
      id: "database",
      icon: <Database className="w-[18px] h-[18px]" />,
      title: "Database",
      description: "Designing and managing databases",
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
        {
          name: "Redis",
          level: 85,
          color: "from-rose-500 to-red-500",
        },
      ],
      features: [
        "Schema Design",
        "Query Optimization",
        "Data Modeling",
        "Caching with Redis",
      ],
    },
    {
      id: "deployment",
      icon: <Rocket className="w-[18px] h-[18px]" />,
      title: "Deployment",
      description: "Shipping and automating releases",
      skills: [
        {
          name: "Docker",
          level: 88,
          color: "from-sky-500 to-blue-600",
        },
        {
          name: "GitHub Actions",
          level: 87,
          color: "from-gray-700 to-gray-900",
        },
      ],
      features: [
        "Containerization",
        "CI/CD Pipelines",
        "Automation",
        "Cloud Deployment",
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
              <div className="lg:sticky lg:top-24">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
                {skillCategories.map((category, index) => (
                  <motion.button
                    key={category.id}
                    onClick={() => setActiveCategory(index)}
                    className={`w-full text-left p-[12px] rounded-lg transition-all duration-300 flex items-center gap-[10px] ${
                      activeCategory === index
                        ? "bg-gray-900 text-white shadow-md"
                        : "bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-200"
                    }`}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div
                      className={`p-[6px] rounded ${
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
                      <ChevronRight className="w-[16px] h-[16px]" />
                    )}
                  </motion.button>
                ))}
                </div>
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
                  className="bg-white border border-gray-200 rounded-xl p-3 sm:p-6"
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
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

            </div>
          </div>

          {/* Technologies & Tools - full width, centered on screen */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="max-w-5xl mx-auto text-center mb-[40px]">
              <h4 className="text-lg font-display font-semibold text-gray-900 mb-3">
                Technologies & Tools
              </h4>
              <p className="text-sm text-gray-600">
                Cards flip automatically to show details
              </p>
            </div>

            {/* Responsive flex-wrap grid, centered */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
              {techLogos.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03 }}
                  className="relative h-28 w-28 sm:h-32 sm:w-40 md:w-44 cursor-pointer perspective"
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
                          {getTechCategory(tech.name).name}
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
          </motion.div>
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
