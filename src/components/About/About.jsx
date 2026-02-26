// src/components/About/About.jsx
"use client";

import { motion } from "framer-motion";
import { MapPin, Briefcase, Award } from "lucide-react";

// thsi part is call about section
const About = () => {
  const timeline = [
    {
      role: "Lead Frontend Developer",
    },
    {
      role: "UI/UX Designer",
    },
    { role: "Full Stack Developer" },
  ];

  const facts = [
    { icon: <Briefcase />, value: "5+", label: "Projects Completed" },
    { icon: <Award />, value: "3+", label: "Awards Won" },
    { icon: <MapPin />, value: "Remote", label: "Based Worldwide" },
  ];

  return (
    <section className="py-20 w-full">
      <div className="container-custom">
        <div className="content-wrapper">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Image & Facts */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Profile Image */}
              <div className="relative w-full max-w-[500px] mx-auto lg:mx-0">
                <div className="aspect-square overflow-hidden rounded-xl border border-gray-200">
                  <img
                    src="https://media4.giphy.com/media/v1.Y2lkPTZjMDliOTUyc2N0dWl1eXdueTFyczhjb2M0c3EzdzRiOGZ6eTI2d2FjMXN2eHIwNiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/78XCFBGOlS6keY1Bil/200w.gif"
                    alt="Profile animation"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Facts Grid */}
              <div className="grid grid-cols-2 gap-4">
                {facts.map((fact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 border border-gray-200 rounded-lg hover:border-gray-400 transition-colors bg-white"
                  >
                    <div className="text-gray-600 mb-2">{fact.icon}</div>
                    <div className="text-2xl font-display font-bold mb-1">
                      {fact.value}
                    </div>
                    <div className="text-sm text-gray-600">{fact.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="pt-0 lg:pt-8"
            >
              <span className="inline-block text-sm font-medium text-gray-600 mb-4">
                ABOUT ME
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">
                Crafting digital experiences with precision and purpose
              </h2>
              <div className="space-y-4 text-gray-700 mb-8">
                <p>
                  I began my software development journey by building full stack
                  applications using modern technologies such as React.js,
                  Node.js, FastAPI, and PostgreSQL. Through academic and
                  personal projects, I gained hands-on experience in frontend
                  development, backend API design, database management, and
                  cloud integration.
                </p>
                <p>
                  My approach blends strategic thinking with meticulous
                  execution, ensuring every pixel and interaction serves a
                  purpose.
                </p>
              </div>

              {/* Timeline */}
              <div className="space-y-6">
                <h3 className="text-xl font-display font-semibold">
                  Professional Journey
                </h3>
                <div className="space-y-4">
                  {timeline.map(
                    (
                      item,
                      index, //use map to loop through timeline array and display each item with animation
                    ) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-4 pb-4 border-b border-gray-100 last:border-0"
                      >
                        <div className="text-sm font-medium text-gray-600 min-w-24">
                          {item.year}
                        </div>
                        <div className="flex-1">
                          <div className="font-medium">{item.role}</div>
                          <div className="text-gray-600">{item.company}</div>
                        </div>
                      </motion.div>
                    ),
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
