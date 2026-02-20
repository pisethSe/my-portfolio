// src/components/About/About.jsx
"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase, Award } from "lucide-react";

const About = () => {
  const timeline = [
    {
      year: "2023-Present",
      role: "Lead Frontend Developer",
      company: "TechScale Inc.",
    },
    {
      year: "2021-2023",
      role: "Senior UI/UX Designer",
      company: "DigitalFirst Agency",
    },
    { year: "2019-2021", role: "Full Stack Developer", company: "StartupXYZ" },
    {
      year: "2017-2019",
      role: "Frontend Developer",
      company: "WebCraft Studio",
    },
  ];

  const facts = [
    { icon: <Calendar />, value: "7+", label: "Years Experience" },
    { icon: <Briefcase />, value: "50+", label: "Projects Completed" },
    { icon: <Award />, value: "15+", label: "Awards Won" },
    { icon: <MapPin />, value: "Remote", label: "Based Worldwide" },
  ];

  return (
    <section id="about" className="py-20 w-full">
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
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200" />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-gray-900 text-white p-6 rounded-lg shadow-lg">
                  <div className="text-2xl font-display font-bold">7+</div>
                  <div className="text-sm font-medium">Years Exp</div>
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
                  I specialize in creating premium digital products that combine
                  aesthetic excellence with technical precision. With over 7
                  years of experience, I've helped startups and enterprises
                  build products that users love.
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
                  {timeline.map((item, index) => (
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
                  ))}
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
