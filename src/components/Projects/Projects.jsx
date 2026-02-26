// src/components/Projects/Projects.jsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Filter, ChevronRight } from "lucide-react";

// Note: In a real application, project data would likely come from an API
const Projects = () => {
  const [filter, setFilter] = useState("all");
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

  const projects = [
    {
      id: 1,
      title: "E-Commerce Keychain Store",
      category: "fullstack",
      description:
        "Modern e-commerce platform for selling custom keychains with real-time inventory management",
      tags: ["React", "Node.js", "Express", "PostgreSQL", "Prisma", "NEON"],
      year: "2025",
      link: "#",
      github: "https://github.com/moni-rem/KeychainHub",
      image: "bg-gradient-to-br from-blue-600 to-cyan-600",
      award: "Site of the day",
      awardDate: "MARCH 14, 2024",
      awardOrg: "Awwwards",
    },
    {
      id: 2,
      title: "SaaS House Rentals",
      category: "fullstack",
      description:
        "Property rental platform with advanced search, booking system, and payment integration",
      tags: ["React/javascript", "pyhton", "fastAPI", "sqlite"],
      year: "2024",
      link: "#",
      github: "https://github.com/pisethSe/autorent",
      image: "bg-gradient-to-br from-orange-600 to-red-600",
      award: "Site of the year",
      awardDate: "MARCH 14, 2024",
      awardOrg: "CSS Awards",
    },
    {
      id: 3,
      title: "E-Learning Platform",
      category: "fullstack",
      description:
        "Interactive learning management system with course creation and student progress tracking",
      tags: ["React", "PHP", "Laravel", "MySQL", "Tailwind CSS"],
      year: "2024",
      link: "#",
      github: "#",
      image: "bg-gradient-to-br from-green-600 to-emerald-600",
      award: "Site of the day",
      awardDate: "MARCH 14, 2024",
      awardOrg: "Dribbble",
    },
    {
      id: 4,
      title: "SaaS House Rentals",
      category: "fullstack",
      description:
        "Property rental platform with advanced search, booking system, and payment integration",
      tags: [
        "React/TypeScript",
        "Node.js",
        "Express",
        "PostgreSQL",
        "Prisma",
        "Docker",
      ],
      year: "2024",
      link: "#",
      github: "#",
      image: "bg-gradient-to-br from-orange-600 to-red-600",
      award: "Site of the day",
      awardDate: "MARCH 14, 2024",
      awardOrg: "FWA Awards",
    },
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "fullstack", label: "Full Stack" },
    { id: "ecommerce", label: "E-Commerce" },
    { id: "saas", label: "SaaS" },
  ];

  const filteredProjects =
    filter === "all" // Show all projects if "all" is selected
      ? projects
      : filter === "ecommerce"
        ? projects.filter((p) => p.title.includes("Keychain"))
        : filter === "saas"
          ? projects.filter((p) => p.title.includes("Rentals"))
          : projects.filter((project) => project.category === filter);

  return (
    <section id="work" className="py-24 w-full bg-gray-50">
      <div className="container-custom max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="content-wrapper">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-gray-500 uppercase tracking-[0.2em] mb-4 block">
              PORTFOLIO
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Featured Work
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Award-winning digital experiences crafted with cutting-edge
              technology
            </p>
          </motion.div>

          {/* Filter Bar - Minimal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center items-center gap-2 mb-16"
          >
            <Filter size={16} className="text-gray-400" />
            {filters.map((filterItem) => (
              <button
                key={filterItem.id}
                onClick={() => setFilter(filterItem.id)}
                className={`px-5 py-2 text-sm font-medium transition-all duration-300 ${
                  filter === filterItem.id
                    ? "text-gray-900 border-b-2 border-gray-900"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {filterItem.label}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid - Award Style Cards */}
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => {
              const resolvedLink =
                project.link && project.link !== "#"
                  ? project.link
                  : project.github;
              const hasLink = !!resolvedLink && resolvedLink !== "#";

              return (
                <motion.article
                  key={project.id}
                  initial={false}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: index * 0.05 }}
                  onClick={() => {
                    if (hasLink) {
                      window.open(
                        resolvedLink,
                        "_blank",
                        "noopener,noreferrer",
                      );
                    }
                  }}
                  onKeyDown={(e) => {
                    if (!hasLink) return;
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      window.open(
                        resolvedLink,
                        "_blank",
                        "noopener,noreferrer",
                      );
                    }
                  }}
                  role={hasLink ? "link" : undefined}
                  tabIndex={hasLink ? 0 : -1}
                  className={`group relative overflow-hidden bg-white border border-gray-300 shadow-sm hover:border-gray-400 hover:shadow-xl transition-all duration-500 ${
                    hasLink ? "cursor-pointer" : "cursor-default"
                  }`}
                >
                  {/* Accent color bar */}
                  <div className={`h-2 w-full ${project.image}`} />

                  {/* Award Badge - Top Left */}
                  <div className="absolute -top-3 -left-3 z-10">
                    <div className="bg-white/95 border border-gray-200 px-4 py-2 shadow-sm backdrop-blur-sm">
                      <span className="text-xs font-medium text-gray-900 uppercase tracking-wider">
                        {project.awardOrg}
                      </span>
                    </div>
                  </div>

                  {/* Award Date - Top Right */}
                  <div className="absolute -top-3 -right-3 z-10">
                    <div className="bg-white/95 border border-gray-200 px-4 py-2 shadow-sm backdrop-blur-sm">
                      <span className="text-xs text-gray-600">
                        {project.awardDate}
                      </span>
                    </div>
                  </div>

                  {/* Award Title */}
                  <div className="pt-12 px-8 pb-4 border-b border-gray-200 bg-white">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-bold text-gray-900 uppercase tracking-wider">
                        {project.award}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-8 bg-white">
                    {/* Title & Year */}
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-3xl font-display font-bold tracking-tight group-hover:text-gray-600 transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-sm text-gray-500 font-mono">
                        {project.year}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2 mb-10">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 bg-gray-100 text-gray-700 text-xs font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-4">
                        {hasLink ? (
                          <a
                            href={resolvedLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-gray-400 hover:text-gray-900 transition-colors p-2"
                            aria-label="View project"
                          >
                            <ExternalLink size={18} />
                          </a>
                        ) : (
                          <span
                            className="text-gray-300 p-2"
                            aria-hidden="true"
                          >
                            <ExternalLink size={18} />
                          </span>
                        )}
                        <a
                          href={project.github}
                          target={project.github !== "#" ? "_blank" : undefined}
                          rel={
                            project.github !== "#"
                              ? "noopener noreferrer"
                              : undefined
                          }
                          onClick={(e) => e.stopPropagation()}
                          className="text-gray-400 hover:text-gray-900 transition-colors p-2"
                          aria-label="View code"
                        >
                          <Github size={18} />
                        </a>
                      </div>

                      {hasLink ? (
                        <motion.a
                          href={resolvedLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 group-hover:gap-3 transition-all"
                          whileHover={{ x: 4 }}
                        >
                          View Case Study
                          <ChevronRight size={16} />
                        </motion.a>
                      ) : (
                        <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-400">
                          Coming Soon
                          <ChevronRight size={16} />
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Color hover overlay */}
                  <div
                    className={`absolute inset-0 ${project.image} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
                  />
                </motion.article>
              );
            })}
          </div>
          {/* Infinite Loop Text - Single Row */}
          <div className="col-span-1 lg:col-span-2 py-8 overflow-hidden border-y border-gray-200">
            <motion.div
              className="flex flex-nowrap whitespace-nowrap"
              animate={{
                x: [0, -800],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40, // 40 is equal to 20 seconds for one full loop, so adjust accordingly
                  ease: "linear",
                },
              }}
            >
              <span className="text-gray-300 text-2xl md:text-8xl lg:text-9xl font-display font-bold tracking-tight opacity-30">
                ✦ AWARD WINNING PROJECT ✦ AWARD WINNING PROJECT ✦ AWARD WINNING
                PROJECT ✦
              </span>
              <span className="text-gray-300 text-2xl md:text-8xl lg:text-9xl font-display font-bold tracking-tight opacity-30 ml-8">
                ✦ AWARD WINNING PROJECT ✦ AWARD WINNING PROJECT ✦ AWARD WINNING
                PROJECT ✦
              </span>
            </motion.div>
          </div>

          {/* CTA Section - Minimal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-32 text-center"
          >
            <div className="max-w-2xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Have an interesting project?
              </h3>
              <p className="text-gray-600 text-lg mb-10">
                Let's collaborate to create something exceptional together
              </p>
              <motion.a
                href="#contact"
                onClick={(e) => handleAnchorScroll(e, "contact")}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white font-medium hover:bg-gray-800 transition-all duration-300 border border-gray-900 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Start a Conversation
                <ChevronRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
