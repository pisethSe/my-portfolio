// src/components/Contact/ContactForm.jsx
"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Clock,
  CheckCircle,
  MessageSquare,
  Linkedin,
} from "lucide-react";
import { SiTelegram } from "react-icons/si";

const ContactForm = () => {
  const contactInfo = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      title: "LinkedIn",
      value: "Se Piseth",
      link: "https://www.linkedin.com/feed/",
      description: "Connect with me",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      value: "070-44-25-25",
      link: "tel:070442525",
      description: "Call or SMS",
    },
    {
      icon: <SiTelegram className="w-5 h-5" />,
      title: "Telegram",
      value: "070-44-25-25 · @piseth1_1",
      link: "https://t.me/piseth1_1",
      description: "Message me anytime",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Location",
      value: "Phnom Penh, Chamkar Doung",
      link: "#",
      description: "Cambodia",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Response Time",
      value: "Within 24 hours",
      link: "#",
      description: "For urgent matters",
    },
  ];

  return (
    <section className="py-20 w-full bg-gray-50">
      <div className="container-custom">
        <div className="content-wrapper">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full mb-6">
              <MessageSquare className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium text-blue-700">
                GET IN TOUCH
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">
              Let's{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Build Together
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it — reach out
              through any of the channels below.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {contactInfo.map((info, index) => {
              const isLink = Boolean(info.link && info.link !== "#");
              const Card = isLink ? motion.a : motion.div;
              return (
                <Card
                  key={info.title}
                  {...(isLink
                    ? {
                        href: info.link,
                        ...(/^https?:/.test(info.link)
                          ? {
                              target: "_blank",
                              rel: "noopener noreferrer",
                            }
                          : {}),
                      }
                    : {})}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={isLink ? { y: -4 } : undefined}
                  className={`h-full p-4 bg-white border border-gray-200 rounded-lg transition-all duration-300 ${
                    isLink
                      ? "hover:border-blue-500 hover:shadow-md cursor-pointer"
                      : "cursor-default"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-lg text-blue-600">
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-gray-600 text-xs font-medium mb-1">
                        {info.title}
                      </div>
                      <div className="font-display font-semibold mb-1">
                        {info.value}
                      </div>
                      <div className="text-gray-500 text-xs">
                        {info.description}
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="h-full p-4 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg text-white"
            >
              <h3 className="font-display font-semibold mb-4 flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Quick Response
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-3 bg-white/5 rounded-lg">
                  <div className="font-display font-bold mb-1">24h</div>
                  <div className="text-xs text-gray-300">Avg. Response</div>
                </div>
                <div className="text-center p-3 bg-white/5 rounded-lg">
                  <div className="font-display font-bold mb-1">100%</div>
                  <div className="text-xs text-gray-300">Satisfaction</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
