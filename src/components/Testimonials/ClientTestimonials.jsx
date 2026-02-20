// src/components/Testimonials/ClientTestimonials.jsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Award,
  TrendingUp,
  Users,
  Sparkles,
} from "lucide-react";

const ClientTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Alex Johnson",
      role: "CEO, TechScale Inc.",
      company: "TechScale",
      content:
        "Working with this team transformed our digital presence. Their attention to detail and technical expertise exceeded all expectations. The project was delivered on time and within budget.",
      rating: 5,
      avatar: "AJ",
      project: "E-commerce Platform",
      results: [
        "+300% Revenue Growth",
        "+45% User Engagement",
        "98% Client Satisfaction",
      ],
      delay: 0,
    },
    {
      name: "Sarah Chen",
      role: "Product Director, StartupXYZ",
      company: "StartupXYZ",
      content:
        "Exceptional work from start to finish. They delivered a product that not only looks amazing but performs even better. Their communication throughout the process was outstanding.",
      rating: 5,
      avatar: "SC",
      project: "Mobile Application",
      results: [
        "+150% User Retention",
        "4.9 App Store Rating",
        "+200K Downloads",
      ],
      delay: 0.1,
    },
    {
      name: "Michael Rodriguez",
      role: "CTO, DigitalFirst",
      company: "DigitalFirst",
      content:
        "The most professional team I've worked with. They understand business objectives and translate them into perfect digital solutions. Highly recommended for complex projects.",
      rating: 5,
      avatar: "MR",
      project: "Enterprise Dashboard",
      results: [
        "-40% Development Time",
        "+60% Team Productivity",
        "Zero Downtime",
      ],
      delay: 0.2,
    },
    {
      name: "Emma Wilson",
      role: "Head of Design, CreativeLab",
      company: "CreativeLab",
      content:
        "Their design thinking approach combined with technical excellence created a product that users love. The collaboration was seamless and results were beyond expectations.",
      rating: 5,
      avatar: "EW",
      project: "Design System",
      results: ["-50% Design Time", "Consistent UX", "+90% Team Adoption"],
      delay: 0.3,
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section id="testimonials" className="py-20 w-full">
      <div className="container-custom">
        <div className="content-wrapper">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span className="text-sm font-medium text-amber-700">
                CLIENT FEEDBACK
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">
              What Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500">
                Clients Say
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real feedback from companies we've helped transform their digital
              presence
            </p>
          </motion.div>

          {/* Testimonial Carousel */}
          <div className="relative mb-16">
            {/* Navigation Buttons */}
            <div className="absolute right-0 top-0 z-10 flex gap-3">
              <motion.button
                onClick={prevTestimonial}
                className="p-3 bg-white border border-gray-200 rounded-full hover:border-gray-300 hover:shadow-md transition-all shadow-sm"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              <motion.button
                onClick={nextTestimonial}
                className="p-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all shadow-md"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Testimonial Cards */}
            <div className="relative min-h-[400px] overflow-hidden">
              <AnimatePresence mode="wait">
                {testimonials.map(
                  (testimonial, index) =>
                    index === activeIndex && (
                      <motion.div
                        key={testimonial.name}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                        className="w-full"
                      >
                        <div className="grid lg:grid-cols-2 gap-6">
                          {/* Left Column - Testimonial */}
                          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                            <div className="flex items-start justify-between mb-8">
                              <div>
                                <div className="text-sm font-medium text-gray-500 mb-3">
                                  {testimonial.project}
                                </div>
                                <div className="flex gap-1 mb-6">
                                  {[...Array(testimonial.rating)].map(
                                    (_, i) => (
                                      <Star
                                        key={i}
                                        className="w-5 h-5 fill-amber-400 text-amber-400"
                                      />
                                    ),
                                  )}
                                </div>
                              </div>
                              <Quote className="w-10 h-10 text-gray-200" />
                            </div>

                            <blockquote className="text-xl font-display font-semibold mb-8 text-gray-900 leading-relaxed">
                              "{testimonial.content}"
                            </blockquote>

                            <div className="flex items-center gap-4">
                              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center shadow-md">
                                <span className="text-white text-base font-bold">
                                  {testimonial.avatar}
                                </span>
                              </div>
                              <div>
                                <div className="text-lg font-display font-semibold">
                                  {testimonial.name}
                                </div>
                                <div className="text-gray-600">
                                  {testimonial.role}
                                </div>
                                <div className="text-sm text-gray-500">
                                  {testimonial.company}
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Right Column - Results */}
                          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 text-white shadow-lg">
                            <div className="flex items-center gap-3 mb-8">
                              <TrendingUp className="w-6 h-6" />
                              <h3 className="text-xl font-display font-semibold">
                                Project Results
                              </h3>
                            </div>

                            <div className="space-y-5">
                              {testimonial.results.map(
                                (result, resultIndex) => (
                                  <motion.div
                                    key={result}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: resultIndex * 0.1 }}
                                    className="flex items-center gap-4 p-4 bg-white/5 rounded-lg"
                                  >
                                    <Award className="w-5 h-5 text-amber-400" />
                                    <span className="text-base">{result}</span>
                                  </motion.div>
                                ),
                              )}
                            </div>

                            {/* Success Metrics */}
                            <div className="mt-10 pt-8 border-t border-white/10">
                              <div className="grid grid-cols-3 gap-6">
                                <div className="text-center">
                                  <div className="text-sm text-gray-300 mb-2">
                                    Project Success
                                  </div>
                                  <div className="text-2xl font-display font-bold">
                                    100%
                                  </div>
                                </div>
                                <div className="text-center">
                                  <div className="text-sm text-gray-300 mb-2">
                                    On Time Delivery
                                  </div>
                                  <div className="text-2xl font-display font-bold">
                                    100%
                                  </div>
                                </div>
                                <div className="text-center">
                                  <div className="text-sm text-gray-300 mb-2">
                                    Client Rating
                                  </div>
                                  <div className="text-2xl font-display font-bold">
                                    5.0
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ),
                )}
              </AnimatePresence>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeIndex
                      ? "w-8 bg-gray-900"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pt-12 border-t border-gray-200"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  icon: <Users className="w-6 h-6" />,
                  value: "50+",
                  label: "Happy Clients",
                },
                {
                  icon: <Award className="w-6 h-6" />,
                  value: "25+",
                  label: "Awards Won",
                },
                {
                  icon: <Star className="w-6 h-6" />,
                  value: "4.9/5",
                  label: "Average Rating",
                },
                {
                  icon: <TrendingUp className="w-6 h-6" />,
                  value: "98%",
                  label: "Retention Rate",
                },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-sm transition-all bg-white"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg mb-4">
                    <div className="text-gray-700">{stat.icon}</div>
                  </div>
                  <div className="text-3xl font-display font-bold mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
