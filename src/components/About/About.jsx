// src/components/About/About.jsx
"use client";

import { motion } from "framer-motion";
import { MapPin, Award, Heart, Clock } from "lucide-react";

// thsi part is call about section
const About = () => {
  const timeline = [
    { role: "Graphic Design" },
    { role: "Full-Stack Developer" },
    { role: "Problem Solver" },
  ];

  const facts = [
    {
      icon: <Heart className="w-5 h-5 text-black" fill="currentColor" />,
      value: "5+",
      label: "Complete Projects",
    },
    { icon: <Clock className="w-5 h-5" />, value: "3", label: "Months Experience" },
    { icon: <Award className="w-5 h-5" />, value: "3+", label: "Certificates" },
    {
      icon: <MapPin className="w-5 h-5" />,
      value: "Remote / On-site",
      label: "Available for work",
    },
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
              {/* About Video */}
              <div className="relative w-full max-w-[500px] mx-auto lg:mx-0">
                <div className="aspect-square overflow-hidden rounded-xl border border-gray-200 bg-black">
                  <video
                    src="/about-video.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
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
              <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">
                About Me
              </h2>
              <div className="space-y-4 text-gray-700 mb-8">
                <p>
                  I'm a software developer passionate about creating{" "}
                  <strong className="font-semibold text-gray-900">
                    high-quality digital experiences that people enjoy using
                  </strong>
                  .
                </p>
                <p>
                  My journey began with full-stack development, where I've
                  worked with technologies including{" "}
                  <strong className="font-semibold text-gray-900">
                    React.js, Next.js, Node.js, Express.js, NestJS, Laravel,
                    FastAPI, and PostgreSQL
                  </strong>
                  . Through academic and personal projects, I've developed
                  practical experience across{" "}
                  <strong className="font-semibold text-gray-900">
                    frontend development, backend engineering, API design,
                    databases, documentation, prompt engineering, deployment,
                    and system integration
                  </strong>
                  .
                </p>
                <p>
                  I combine{" "}
                  <strong className="font-semibold text-gray-900">
                    creative problem-solving, strategic thinking, and attention
                    to detail
                  </strong>{" "}
                  to transform ideas into reliable and scalable products. From
                  the first interaction to the underlying architecture, I care
                  about making every part of an application purposeful.
                </p>
                <p>
                  I believe great software is more than functional—it should be{" "}
                  <strong className="font-semibold text-gray-900">
                    fast, intuitive, accessible, maintainable, and visually
                    polished
                  </strong>
                  .
                </p>
                <p>
                  I'm always learning, experimenting with new technologies, and
                  looking for better ways to build. My goal is to create{" "}
                  <strong className="font-semibold text-gray-900">
                    meaningful software with exceptional user experiences and
                    uncompromising quality
                  </strong>
                  .
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
                        <div className="flex-1">
                          <div className="font-medium">{item.role}</div>
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
