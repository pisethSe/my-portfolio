// src/components/Stats/SeriousStats.jsx
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, TrendingUp, Award, Clock } from "lucide-react";
import CountUp from "react-countup";

const SeriousStats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const stats = [
    {
      icon: <Users className="w-6 h-6" />,
      value: 50,
      suffix: "+",
      label: "Scaleups & startups helped in their growth journey",
      delay: 0,
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      value: 500,
      suffix: "M+",
      label: "Funding raised by clients post-collaboration",
      delay: 0.1,
      color: "from-emerald-500 to-green-500",
    },
    {
      icon: <Award className="w-6 h-6" />,
      value: 94,
      suffix: "%",
      label: "Client retention & satisfaction rate",
      delay: 0.2,
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      value: 25,
      suffix: "+",
      label: "Industry awards & recognitions",
      delay: 0.3,
      color: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-20 relative overflow-hidden bg-gray-900 w-full"
    >
      <div className="absolute inset-0 bg-grid-white/10 bg-grid-16" />

      <div className="container-custom relative z-10">
        <div className="content-wrapper">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            {/* <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6"
            >
              <Star className="w-4 h-4" />
              <span className="text-sm font-medium text-white">
                SERIOUS FACTS
              </span>
            </motion.div> */}
            <span className="text-sm font-medium text-gray-500 uppercase tracking-[0.2em] mb-4 block">
              SERIOUS FACTS
            </span>

            <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6 text-white">
              Trusted by{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                Industry Leaders
              </span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Real numbers that reflect our commitment to excellence and client
              success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: stat.delay,
                  type: "spring",
                  stiffness: 100,
                }}
                className="group"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-white/20 transition-all duration-300">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-white/10 to-transparent mb-6 mx-auto">
                    <div className="text-white">{stat.icon}</div>
                  </div>

                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-display font-bold mb-2 text-white">
                      {isInView ? (
                        <CountUp
                          start={0}
                          end={stat.value}
                          duration={2.5}
                          suffix={stat.suffix}
                          delay={stat.delay}
                          className="text-white"
                        />
                      ) : (
                        <span className="text-white">0{stat.suffix}</span>
                      )}
                    </div>
                    <p className="text-gray-300 text-sm">{stat.label}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeriousStats;
