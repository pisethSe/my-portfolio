// src/components/Projects/Projects.jsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { smoothScroll } from "../../lib/smooth-scroll";
import { ArrowUpRight, Code, Github, X } from "lucide-react";
import {
  SiReact,
  SiTypescript,
  SiVite,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiNextdotjs,
  SiPrisma,
  SiPostgresql,
  SiSqlalchemy,
  SiSupabase,
  SiRedis,
  SiDocker,
  SiLaravel,
  SiMysql,
  SiFastapi,
  SiSqlite,
  SiGithubactions,
} from "react-icons/si";

// Maps a stack item to its brand icon (falls back to a generic code icon)
const TECH_ICON_CLASS = "w-[16px] h-[16px]";
const getTechIcon = (tech) => {
  const t = tech.toLowerCase();
  const icon = (Icon) => <Icon className={TECH_ICON_CLASS} />;

  if (t.includes("next")) return icon(SiNextdotjs);
  if (t.includes("nest")) return icon(SiNestjs);
  if (t.includes("fastapi")) return icon(SiFastapi);
  if (t.includes("laravel")) return icon(SiLaravel);
  if (t.includes("prisma")) return icon(SiPrisma);
  if (t.includes("supabase")) return icon(SiSupabase);
  if (t.includes("sqlalchemy") || t.includes("alembic"))
    return icon(SiSqlalchemy);
  if (t.includes("github")) return icon(SiGithubactions);
  if (t.includes("react")) return icon(SiReact);
  if (t.includes("vite")) return icon(SiVite);
  if (t.includes("tailwind")) return icon(SiTailwindcss);
  if (t.includes("node")) return icon(SiNodedotjs);
  if (t.includes("express")) return icon(SiExpress);
  if (t.includes("postgres") || t.includes("postgis") || t.includes("neon"))
    return icon(SiPostgresql);
  if (t.includes("mysql")) return icon(SiMysql);
  if (t.includes("sqlite")) return icon(SiSqlite);
  if (t.includes("redis")) return icon(SiRedis);
  if (t.includes("docker")) return icon(SiDocker);
  if (t.includes("typescript")) return icon(SiTypescript);
  return <Code className={TECH_ICON_CLASS} />;
};

// Short label for the compact list rows
const shortTech = (tech) =>
  tech
    .replace(/\s*\([^)]*\)\s*/g, " ")
    .replace(/\s+(frontend|backend)\b/gi, "")
    .replace(/\s+schema$/i, "")
    .replace(/\s+API\b.*$/i, "")
    .split(/\s+with\s+/i)[0]
    .split(" + ")[0]
    .split("/")[0]
    .split(",")[0]
    .trim() || tech;

// Note: In a real application, project data would likely come from an API
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Skincare",
      type: "ecommerce",
      layout: "landing",
      description:
        "Modern skincare e-commerce platform with product catalog, cart, and secure checkout flow",
      tech: [
        "React 18 + TypeScript",
        "Vite",
        "Tailwind CSS",
        "Node.js + Express + TypeScript",
        "Prisma ORM",
        "PostgreSQL (Neon)",
      ],
      year: "2025",
      github: "https://github.com/pisethSe/e-commerce-skincare",
      url: "skincare-ecommerce.demo",
      image: "/projects/e-commerce-skincare.png",
      accent: "from-rose-500 to-pink-600",
    },
    {
      id: 2,
      title: "Sala Management",
      type: "management",
      layout: "dashboard",
      description:
        "Hall and space management system with bookings, rooms, and an admin dashboard",
      tech: [
        "Next.js (App Router) + Tailwind CSS",
        "NestJS (TypeScript) with Redis caching",
        "Supabase PostgreSQL",
        "Docker",
      ],
      year: "2025",
      github: "https://github.com/pisethSe/sala-management",
      url: "sala-management.demo",
      image: "/projects/sala-management.png",
      accent: "from-blue-600 to-cyan-600",
    },
    {
      id: 3,
      title: "E-Learning",
      type: "elearning",
      layout: "landing",
      description:
        "Interactive learning platform with course creation and student progress tracking",
      tech: [
        "React + Vite",
        "FastAPI API with SQLAlchemy, Alembic, and PostgreSQL/SQLite support",
      ],
      year: "2024",
      github: "https://github.com/pisethSe/E-Learning",
      url: "e-learning.demo",
      image: "/projects/e-learning.png",
      accent: "from-emerald-500 to-green-600",
    },
    {
      id: 4,
      title: "Hospital System",
      type: "hospital",
      layout: "dashboard",
      description:
        "Hospital management system for appointments, patients, doctors, and medical records",
      tech: [
        "React 18 + Tailwind CSS",
        "shadcn/ui (Vite)",
        "Laravel 12",
        "MySQL",
      ],
      year: "2024",
      github: "https://github.com/pisethSe/Hospital-System",
      url: "hospital-system.demo",
      image: "/projects/hospital-system.png",
      accent: "from-sky-500 to-indigo-600",
    },
    {
      id: 5,
      title: "Rental House or Room",
      type: "rental",
      layout: "landing",
      description:
        "Property rental platform with listings, advanced search, and booking requests",
      tech: [
        "Next.js frontend",
        "NestJS backend",
        "PostgreSQL/PostGIS",
        "Prisma 7 schema",
        "Docker",
        "Redis",
        "GitHub Actions",
      ],
      year: "2024",
      github: "https://github.com/pisethSe/rentMe",
      url: "rental-house.demo",
      image: "/projects/rental-house.png",
      accent: "from-orange-500 to-amber-600",
    },
  ];

  // Open the full-screen preview and push a history entry so the browser
  // Back button (and Escape / Close) returns to the project list
  const openProject = (project) => {
    if (window.history.state?.projectPreview !== true) {
      window.history.pushState({ projectPreview: true }, "");
    }
    setSelectedProject(project);
  };

  const closeProject = () => {
    if (window.history.state?.projectPreview) {
      window.history.back();
    } else {
      setSelectedProject(null);
    }
  };

  // Clear any stale preview history state left over from a reload
  useEffect(() => {
    if (window.history.state?.projectPreview) {
      window.history.replaceState(null, "");
    }
  }, []);

  // Browser Back / Forward closes the preview
  useEffect(() => {
    const handlePop = () => setSelectedProject(null);
    window.addEventListener("popstate", handlePop);
    return () => window.removeEventListener("popstate", handlePop);
  }, []);

  // Lock page scroll, pause Lenis smooth scrolling and close on Escape
  // while the full-screen preview is open
  useEffect(() => {
    if (!selectedProject) return;

    document.body.style.overflow = "hidden";
    smoothScroll.stop();

    const handleKey = (e) => {
      if (e.key !== "Escape") return;
      if (window.history.state?.projectPreview) {
        window.history.back();
      } else {
        setSelectedProject(null);
      }
    };
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "";
      smoothScroll.start();
      window.removeEventListener("keydown", handleKey);
    };
  }, [selectedProject]);

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
              A selection of projects — click any project to explore the full
              experience
            </p>
          </motion.div>

          {/* Project Index - click a project to open the full-screen preview */}
          <div className="border-t border-gray-200">
            {projects.map((project, index) => (
              <motion.button
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                onClick={() => openProject(project)}
                className="group w-full flex items-center gap-[16px] md:gap-[24px] py-7 md:py-9 px-2 border-b border-gray-200 text-left hover:bg-white transition-colors duration-300"
              >
                <span className="text-sm font-mono text-gray-400 w-[32px] shrink-0">
                  0{index + 1}
                </span>
                <span className="flex-1 min-w-0">
                  <span className="block text-xl sm:text-2xl md:text-4xl font-display font-bold tracking-tight group-hover:translate-x-2 transition-transform duration-300 truncate">
                    {project.title}
                  </span>
                  <span className="block text-sm text-gray-500 mt-1 truncate">
                    {project.description}
                  </span>
                </span>
                <span className="hidden md:flex flex-wrap gap-2 max-w-[240px] justify-end shrink-0">
                  {project.tech.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-gray-100 text-gray-600 text-[11px] font-mono whitespace-nowrap"
                    >
                      {shortTech(tag)}
                    </span>
                  ))}
                </span>
                <span className="shrink-0 w-[40px] h-[40px] rounded-full border border-gray-300 flex items-center justify-center text-gray-500 group-hover:bg-gray-900 group-hover:text-white group-hover:border-gray-900 transition-all duration-300">
                  <ArrowUpRight size={16} />
                </span>
              </motion.button>
            ))}
          </div>

          {/* Infinite Loop Text - Single Row */}
          <div className="py-8 overflow-hidden border-y border-gray-200 mt-16">
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
                ✦ FEATURED PROJECT ✦ FEATURED PROJECT ✦ FEATURED PROJECT ✦
              </span>
              <span className="text-gray-300 text-2xl md:text-8xl lg:text-9xl font-display font-bold tracking-tight opacity-30 ml-8">
                ✦ FEATURED PROJECT ✦ FEATURED PROJECT ✦ FEATURED PROJECT ✦
              </span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Full-Screen Project Showcase */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectShowcase
            project={selectedProject}
            onClose={closeProject}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

// Clean mock UI shown inside a browser frame in the full-screen preview
// (uses explicit pixel values because the site's Tailwind spacing scale is doubled)
const MockLanding = ({ project }) => (
  <div className="bg-white">
    {/* Mini navbar */}
    <div className="flex items-center justify-between px-[24px] md:px-[40px] py-[14px] border-b border-gray-100">
      <div className="flex items-center gap-[10px]">
        <span
          className={`w-[20px] h-[20px] rounded bg-gradient-to-br ${project.accent}`}
        />
        <span className="h-[10px] w-[80px] bg-gray-300 rounded-full" />
      </div>
      <div className="hidden sm:flex items-center gap-[16px]">
        <span className="h-[8px] w-[40px] bg-gray-200 rounded-full" />
        <span className="h-[8px] w-[40px] bg-gray-200 rounded-full" />
        <span className="h-[8px] w-[40px] bg-gray-200 rounded-full" />
      </div>
      <span
        className={`h-[28px] w-[80px] rounded-lg bg-gradient-to-r ${project.accent}`}
      />
    </div>

    {/* Hero */}
    <div className="px-[24px] md:px-[40px] py-[40px] md:py-[56px] grid sm:grid-cols-2 gap-[24px] items-center">
      <div>
        <span
          className={`inline-block h-[8px] w-[64px] bg-gradient-to-r ${project.accent} rounded-full mb-[16px]`}
        />
        <div className="space-y-[10px] mb-[24px]">
          <div className="h-[18px] w-4/5 bg-gray-800 rounded-full" />
          <div className="h-[18px] w-3/5 bg-gray-800 rounded-full" />
        </div>
        <div className="space-y-[8px] mb-[24px]">
          <div className="h-[8px] w-full bg-gray-200 rounded-full" />
          <div className="h-[8px] w-5/6 bg-gray-200 rounded-full" />
          <div className="h-[8px] w-2/3 bg-gray-200 rounded-full" />
        </div>
        <div className="flex gap-[12px]">
          <span
            className={`h-[36px] w-[112px] rounded-lg bg-gradient-to-r ${project.accent}`}
          />
          <span className="h-[36px] w-[112px] rounded-lg border-2 border-gray-800" />
        </div>
      </div>
      <div
        className={`aspect-[4/3] rounded-2xl bg-gradient-to-br ${project.accent}`}
      />
    </div>

    {/* Feature / product cards */}
    <div className="px-[24px] md:px-[40px] pb-[48px] grid grid-cols-1 sm:grid-cols-3 gap-[24px]">
      {["opacity-90", "opacity-70", "opacity-50"].map((opacity, i) => (
        <div
          key={i}
          className="border border-gray-100 rounded-xl p-[16px] shadow-sm"
        >
          <div
            className={`aspect-[4/3] rounded-lg bg-gradient-to-br ${project.accent} ${opacity} mb-[16px]`}
          />
          <span className="block h-[10px] w-3/4 bg-gray-300 rounded-full mb-[8px]" />
          <span className="block h-[8px] w-1/2 bg-gray-200 rounded-full" />
        </div>
      ))}
    </div>
  </div>
);

const MockDashboard = ({ project }) => (
  <div className="flex bg-gray-50 min-h-[420px]">
    {/* Sidebar */}
    <div className="hidden sm:flex w-44 shrink-0 flex-col gap-[12px] border-r border-gray-200 bg-white p-[16px]">
      <div className="flex items-center gap-[10px] mb-[12px]">
        <span
          className={`w-[20px] h-[20px] rounded bg-gradient-to-br ${project.accent}`}
        />
        <span className="h-[10px] w-[64px] bg-gray-300 rounded-full" />
      </div>
      {["w-[96px]", "w-[80px]", "w-[112px]", "w-[80px]", "w-[96px]"].map(
        (w, i) => (
          <div
            key={i}
            className={`flex items-center gap-[8px] rounded-lg px-[8px] py-[8px] ${
              i === 0 ? `bg-gradient-to-r ${project.accent}` : ""
            }`}
          >
            <span
              className={`w-[12px] h-[12px] rounded ${
                i === 0 ? "bg-white/70" : "bg-gray-300"
              }`}
            />
            <span
              className={`h-[8px] ${w} rounded-full ${
                i === 0 ? "bg-white/80" : "bg-gray-200"
              }`}
            />
          </div>
        ),
      )}
    </div>

    {/* Main panel */}
    <div className="flex-1 p-[16px] md:p-[24px] space-y-[24px]">
      {/* Stat cards */}
      <div className="grid grid-cols-3 gap-[12px] md:gap-[16px]">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="bg-white border border-gray-100 rounded-xl p-[12px] md:p-[16px] shadow-sm"
          >
            <span className="block h-[8px] w-[48px] bg-gray-200 rounded-full mb-[8px]" />
            <span className="block h-[16px] w-[64px] bg-gray-800 rounded-full mb-[8px]" />
            <span
              className={`block h-[6px] w-[40px] rounded-full bg-gradient-to-r ${project.accent}`}
            />
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="bg-white border border-gray-100 rounded-xl p-[16px] md:p-[24px] shadow-sm">
        <span className="block h-[10px] w-[96px] bg-gray-300 rounded-full mb-[16px]" />
        <div className="flex items-end gap-[8px] md:gap-[12px] h-28">
          {[40, 65, 50, 85, 75, 95, 60].map((h, i) => (
            <div
              key={i}
              className={`flex-1 rounded-t-md bg-gradient-to-t ${project.accent} ${
                i === 5 ? "" : "opacity-70"
              }`}
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>

      {/* Table rows */}
      <div className="bg-white border border-gray-100 rounded-xl p-[16px] md:p-[24px] shadow-sm space-y-[12px]">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="flex items-center gap-[12px]">
            <span
              className={`w-[28px] h-[28px] rounded-full bg-gradient-to-br ${project.accent} ${
                i % 2 ? "opacity-60" : ""
              }`}
            />
            <span className="h-[8px] flex-1 max-w-[180px] bg-gray-200 rounded-full" />
            <span className="h-[8px] w-[56px] bg-gray-100 rounded-full hidden sm:block" />
            <span
              className={`h-[20px] w-[64px] rounded-full bg-gradient-to-r ${project.accent} opacity-80`}
            />
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Full-screen showcase — like a clean landing page / dashboard preview for HR or clients
const ProjectShowcase = ({ project, onClose }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 40 }}
    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    className="fixed inset-0 z-50 bg-white overflow-y-auto overscroll-contain"
    data-lenis-prevent
  >
    {/* Top bar */}
    <div className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-[12px] min-w-0">
          <span
            className={`w-[12px] h-[12px] rounded-sm bg-gradient-to-br ${project.accent} shrink-0`}
          />
          <span className="font-display font-bold truncate">
            {project.title}
          </span>
        </div>
        <button
          onClick={onClose}
          className="inline-flex items-center gap-[8px] px-[16px] py-[8px] text-sm font-medium border border-gray-300 rounded-lg hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300 shrink-0"
        >
          Close
          <X size={16} />
        </button>
      </div>
    </div>

    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-[64px]">
      {/* Intro */}
      <span className="text-sm font-mono text-gray-500">{project.year}</span>
      <h3 className="text-4xl md:text-6xl font-display font-bold mt-2 mb-6 tracking-tight">
        {project.title}
      </h3>
      <p className="text-gray-600 text-lg max-w-2xl mb-[32px] leading-relaxed">
        {project.description}
      </p>
      <div className="mb-[48px]">
        <h4 className="text-xs font-mono uppercase tracking-[0.15em] text-gray-500 mb-[16px]">
          Technology Stack
        </h4>
        <div className="flex flex-wrap gap-[10px]">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center gap-[8px] px-[14px] py-[8px] bg-white border border-gray-200 rounded-lg text-sm text-gray-700 shadow-sm"
            >
              <span className="text-gray-900">{getTechIcon(tech)}</span>
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Browser frame with project UI preview */}
      <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-xl bg-white">
        {/* Browser chrome */}
        <div className="h-[44px] bg-gray-100 border-b border-gray-200 flex items-center gap-[8px] px-[16px]">
          <span className="flex gap-[6px]">
            <span className="w-[12px] h-[12px] rounded-full bg-red-400" />
            <span className="w-[12px] h-[12px] rounded-full bg-yellow-400" />
            <span className="w-[12px] h-[12px] rounded-full bg-green-400" />
          </span>
          <span className="ml-[16px] flex-1 max-w-md h-[24px] bg-white border border-gray-200 rounded-md flex items-center px-[10px] text-xs text-gray-500 font-mono truncate">
            {project.url}
          </span>
        </div>

        {/* Real screenshot preview (falls back to the generated mock UI) */}
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} website preview`}
            className="w-full h-auto block"
            loading="lazy"
          />
        ) : project.layout === "dashboard" ? (
          <MockDashboard project={project} />
        ) : (
          <MockLanding project={project} />
        )}
      </div>

      {/* Actions */}
      {project.github && project.github !== "#" && (
        <div className="mt-[48px] flex items-center gap-[16px]">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-[8px] px-[24px] py-[12px] bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors duration-300"
          >
            <Github size={18} />
            View Code
          </a>
        </div>
      )}
    </div>
  </motion.div>
);

export default Projects;
