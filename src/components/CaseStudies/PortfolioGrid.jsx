// src/components/CaseStudies/PortfolioGrid.jsx
"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Eye,
  Filter,
  ChevronRight,
  Calendar,
  Tag,
  Users,
  ArrowUpRight,
  X,
  Globe,
  Smartphone,
  Database,
  Palette,
  Zap,
} from "lucide-react";
import Image from "next/image";

const PortfolioGrid = () => {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const modalRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "fullstack",
      description:
        "A modern e-commerce platform with real-time inventory management, payment processing, and admin dashboard.",
      longDescription:
        "Built a complete e-commerce solution serving 10,000+ daily users. Features include real-time inventory tracking, secure payment processing with Stripe, and an intuitive admin dashboard for order management.",
      tags: ["React", "Node.js", "MongoDB", "Stripe", "Redis", "Docker"],
      year: "2023",
      duration: "4 months",
      team: "5 members",
      link: "https://example.com",
      github: "https://github.com",
      image: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
      icon: <Globe className="w-6 h-6" />,
      results: [
        { label: "Revenue Growth", value: "+300%" },
        { label: "Conversion Rate", value: "+45%" },
        { label: "Page Load Speed", value: "0.8s" },
      ],
      features: [
        "Real-time inventory tracking",
        "Secure payment processing",
        "Admin dashboard",
        "User analytics",
        "Mobile responsive",
      ],
      color: "blue",
    },
    {
      id: 2,
      title: "Task Management App",
      category: "frontend",
      description:
        "Collaborative task management application with drag & drop functionality and real-time updates.",
      longDescription:
        "Developed a productivity application used by teams to manage projects efficiently. Features include drag & drop task management, real-time collaboration, and advanced filtering.",
      tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion", "Supabase"],
      year: "2023",
      duration: "3 months",
      team: "3 members",
      link: "https://example.com",
      github: "https://github.com",
      image: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
      icon: <Smartphone className="w-6 h-6" />,
      results: [
        { label: "User Adoption", value: "+200%" },
        { label: "Task Completion", value: "+60%" },
        { label: "Team Productivity", value: "+40%" },
      ],
      features: [
        "Drag & drop interface",
        "Real-time collaboration",
        "Advanced filtering",
        "Customizable workflows",
        "Progress tracking",
      ],
      color: "purple",
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      category: "fullstack",
      description:
        "Real-time analytics dashboard with data visualization and custom reporting features.",
      longDescription:
        "Created a comprehensive analytics platform for businesses to track KPIs and generate insights. Features include real-time data visualization, custom reporting, and predictive analytics.",
      tags: ["React", "D3.js", "Express", "PostgreSQL", "Chart.js"],
      year: "2022",
      duration: "5 months",
      team: "4 members",
      link: "https://example.com",
      github: "https://github.com",
      image: "bg-gradient-to-br from-green-500/20 to-emerald-500/20",
      icon: <Database className="w-6 h-6" />,
      results: [
        { label: "Data Accuracy", value: "99.9%" },
        { label: "Report Generation", value: "-70% time" },
        { label: "User Satisfaction", value: "4.8/5" },
      ],
      features: [
        "Real-time data visualization",
        "Custom reporting",
        "Predictive analytics",
        "Export functionality",
        "Role-based access",
      ],
      color: "green",
    },
    {
      id: 4,
      title: "AI Chat Assistant",
      category: "ai",
      description:
        "Intelligent chatbot with natural language processing and contextual understanding.",
      longDescription:
        "Built an AI-powered chatbot that handles customer inquiries with 95% accuracy. Integrated with OpenAI API for natural language understanding and context retention.",
      tags: ["Python", "FastAPI", "OpenAI", "React", "Redis"],
      year: "2023",
      duration: "6 months",
      team: "6 members",
      link: "https://example.com",
      github: "https://github.com",
      image: "bg-gradient-to-br from-orange-500/20 to-red-500/20",
      icon: <Zap className="w-6 h-6" />,
      results: [
        { label: "Response Accuracy", value: "95%" },
        { label: "Resolution Time", value: "-80%" },
        { label: "Customer Satisfaction", value: "+50%" },
      ],
      features: [
        "Natural language processing",
        "Context retention",
        "Multi-language support",
        "Sentiment analysis",
        "Learning capability",
      ],
      color: "orange",
    },
    {
      id: 5,
      title: "Portfolio Builder",
      category: "frontend",
      description:
        "Drag & drop portfolio website generator with customizable templates.",
      longDescription:
        "Developed a SaaS platform allowing creatives to build professional portfolios without coding. Features drag & drop interface, template customization, and hosting.",
      tags: ["Vue.js", "Firebase", "Tailwind", "Vite", "Cloud Functions"],
      year: "2022",
      duration: "4 months",
      team: "3 members",
      link: "https://example.com",
      github: "https://github.com",
      image: "bg-gradient-to-br from-indigo-500/20 to-blue-500/20",
      icon: <Palette className="w-6 h-6" />,
      results: [
        { label: "User Growth", value: "+500%" },
        { label: "Template Downloads", value: "10K+" },
        { label: "Average Rating", value: "4.9/5" },
      ],
      features: [
        "Drag & drop editor",
        "Template library",
        "Custom domain support",
        "SEO optimization",
        "Analytics integration",
      ],
      color: "indigo",
    },
    {
      id: 6,
      title: "Health Tracker",
      category: "mobile",
      description:
        "Mobile app for health and fitness tracking with personalized recommendations.",
      longDescription:
        "Created a health monitoring app that tracks fitness metrics and provides personalized recommendations. Integrates with wearables and health devices.",
      tags: ["React Native", "GraphQL", "AWS", "Redux", "HealthKit"],
      year: "2023",
      duration: "5 months",
      team: "5 members",
      link: "https://example.com",
      github: "https://github.com",
      image: "bg-gradient-to-br from-yellow-500/20 to-amber-500/20",
      icon: <Smartphone className="w-6 h-6" />,
      results: [
        { label: "Active Users", value: "100K+" },
        { label: "App Store Rating", value: "4.8/5" },
        { label: "User Retention", value: "85%" },
      ],
      features: [
        "Activity tracking",
        "Personalized recommendations",
        "Wearable integration",
        "Health insights",
        "Progress visualization",
      ],
      color: "yellow",
    },
  ];

  const filters = [
    { id: "all", label: "All Projects", count: projects.length },
    {
      id: "frontend",
      label: "Frontend",
      count: projects.filter((p) => p.category === "frontend").length,
    },
    {
      id: "fullstack",
      label: "Full Stack",
      count: projects.filter((p) => p.category === "fullstack").length,
    },
    {
      id: "mobile",
      label: "Mobile",
      count: projects.filter((p) => p.category === "mobile").length,
    },
    {
      id: "ai",
      label: "AI/ML",
      count: projects.filter((p) => p.category === "ai").length,
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  // Close modal when clicking outside
  const handleBackdropClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  };

  return (
    <section id="work" className="py-24">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-900/10 to-gray-700/10 rounded-full mb-6">
            <Filter className="w-4 h-4 text-gray-700" />
            <span className="text-sm font-medium text-gray-700">PORTFOLIO</span>
          </div>

          <h2 className="text-h2 mb-6">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">
              Work
            </span>
          </h2>
          <p className="text-body-lg text-gray-600 max-w-2xl mx-auto">
            A selection of projects showcasing technical expertise, design
            excellence, and measurable results
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filterItem) => (
            <motion.button
              key={filterItem.id}
              onClick={() => setFilter(filterItem.id)}
              className={`group relative px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                filter === filterItem.id
                  ? "bg-gray-900 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filterItem.label}
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  filter === filterItem.id
                    ? "bg-white/20 text-white"
                    : "bg-gray-300 text-gray-700"
                }`}
              >
                {filterItem.count}
              </span>
              {filter === filterItem.id && (
                <motion.div
                  layoutId="filterIndicator"
                  className="absolute inset-0 rounded-full border-2 border-gray-900"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              onClick={() => openModal(project)}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white hover:border-gray-300 hover:shadow-2xl transition-all duration-300 h-full">
                {/* Project Image/Icon */}
                <div
                  className={`relative h-48 ${project.image} overflow-hidden`}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div
                        className={`w-20 h-20 rounded-2xl bg-gradient-to-br from-${project.color}-500 to-${project.color}-600 flex items-center justify-center shadow-lg`}
                      >
                        <div className="text-white">{project.icon}</div>
                      </div>
                      <motion.div
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent"
                      />
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6"
                  >
                    <div className="text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <Eye className="w-4 h-4" />
                        <span className="text-sm font-medium">
                          View Project
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                        <Calendar className="w-4 h-4" />
                        {project.year}
                        <span className="w-1 h-1 bg-gray-300 rounded-full" />
                        <Tag className="w-4 h-4" />
                        {project.category.charAt(0).toUpperCase() +
                          project.category.slice(1)}
                      </div>
                      <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-gray-600 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                  </div>

                  <p className="text-gray-600 mb-6 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 bg-gray-100 text-gray-700 text-xs font-medium rounded-lg hover:bg-gray-200 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-3 py-1.5 bg-gray-100 text-gray-500 text-xs font-medium rounded-lg">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Project Meta */}
                  <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{project.team}</span>
                      </div>
                      <div>{project.duration}</div>
                    </div>
                    <motion.button
                      className="flex items-center gap-1 text-gray-900 font-medium group-hover:text-gray-600 transition-colors"
                      whileHover={{ x: 4 }}
                    >
                      View Details
                      <ChevronRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-block border border-gray-200 rounded-2xl p-1 hover:border-gray-300 hover:shadow-xl transition-all duration-300">
            <div className="bg-gray-50 rounded-xl px-12 py-10">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="text-left">
                  <h3 className="text-2xl font-display font-semibold mb-4">
                    Interested in working together?
                  </h3>
                  <p className="text-gray-600 max-w-2xl">
                    Let's discuss how we can bring your next project to life
                    with the same level of excellence.
                  </p>
                </div>
                <motion.a
                  href="#contact"
                  className="px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-full font-medium hover:shadow-xl transition-all duration-300 flex items-center gap-3 whitespace-nowrap"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start a Project
                  <ArrowUpRight className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleBackdropClick}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              ref={modalRef}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            >
              {/* Modal Header */}
              <div className="relative">
                <div className={`h-48 ${selectedProject.image}`} />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-8 overflow-y-auto max-h-[calc(90vh-12rem)]">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                      <span className="px-3 py-1 bg-gray-100 rounded-full">
                        {selectedProject.category.toUpperCase()}
                      </span>
                      <span>{selectedProject.year}</span>
                      <span>•</span>
                      <span>{selectedProject.duration}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {selectedProject.team}
                      </span>
                    </div>
                    <h3 className="text-3xl font-display font-semibold mb-4">
                      {selectedProject.title}
                    </h3>
                  </div>
                  <div className="flex gap-3">
                    <motion.a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <h4 className="text-lg font-display font-semibold mb-4">
                    Project Overview
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedProject.longDescription}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Results */}
                  <div>
                    <h4 className="text-lg font-display font-semibold mb-4">
                      Key Results
                    </h4>
                    <div className="space-y-4">
                      {selectedProject.results.map((result, index) => (
                        <motion.div
                          key={result.label}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="p-4 bg-gray-50 rounded-xl"
                        >
                          <div className="text-2xl font-display font-bold text-gray-900 mb-1">
                            {result.value}
                          </div>
                          <div className="text-gray-600">{result.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-lg font-display font-semibold mb-4">
                      Key Features
                    </h4>
                    <ul className="space-y-3">
                      {selectedProject.features.map((feature, index) => (
                        <motion.li
                          key={feature}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center gap-3 text-gray-600"
                        >
                          <div className="w-2 h-2 bg-gray-900 rounded-full" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="text-lg font-display font-semibold mb-4">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioGrid;
