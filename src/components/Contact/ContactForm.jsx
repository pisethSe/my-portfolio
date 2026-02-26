// src/components/Contact/ContactForm.jsx
"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  MapPin,
  Phone,
  Clock,
  CheckCircle,
  MessageSquare,
  User,
  MailCheck,
  Loader2,
} from "lucide-react";

const ContactForm = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "LinkedIn",
      value: "Se piseth",
      link: "https://www.linkedin.com/feed/",
      description: "For general inquiries",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      value: "0704425252",
      description: "Mon-Fri, 9AM-6PM EST",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Location",
      value: "pp",
      link: "#",
      description: "Available worldwide",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Response Time",
      value: "Within 24 hours",
      link: "#",
      description: "For urgent matters",
    },
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error("Error sending email:", error);
      alert("There was an error sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <section className="py-20 w-full bg-gray-50">
      <div className="container-custom">
        <div className="content-wrapper">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
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
              Have a project in mind? I'd love to hear about it. Send me a
              message and let's create something amazing.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="block p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all duration-300 group"
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
                </motion.a>
              ))}

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="p-4 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg text-white"
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
            </motion.div>

            {/* Contact Form */}
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 bg-white border border-gray-200 rounded-lg p-6"
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-8"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mb-4">
                    <MailCheck className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-3">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for reaching out. I'll get back to you within 24
                    hours.
                  </p>
                  <motion.button
                    onClick={() => setIsSubmitted(false)}
                    className="px-4 py-2 bg-gray-900 text-white rounded font-medium hover:bg-gray-800 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Send Another Message
                  </motion.button>
                </motion.div>
              ) : (
                <>
                  <h3 className="text-xl font-display font-semibold mb-6">
                    Send a Message
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 mb-2 font-medium text-sm">
                          <div className="flex items-center gap-1">
                            <User className="w-3 h-3" />
                            Your Name
                          </div>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-3 py-2 border rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm ${
                            errors.name ? "border-red-500" : "border-gray-300"
                          }`}
                          placeholder="John Doe"
                        />
                        {errors.name && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-gray-700 mb-2 font-medium text-sm">
                          <div className="flex items-center gap-1">
                            <Mail className="w-3 h-3" />
                            Email Address
                          </div>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-3 py-2 border rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm ${
                            errors.email ? "border-red-500" : "border-gray-300"
                          }`}
                          placeholder="john@example.com"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2 font-medium text-sm">
                        Subject (Optional)
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm"
                        placeholder="Project Inquiry"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2 font-medium text-sm">
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className={`w-full px-3 py-2 border rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm resize-none ${
                          errors.message ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="Tell me about your project, timeline, and budget..."
                      />
                      {errors.message && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded font-medium hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 text-sm"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </motion.button>

                    <p className="text-center text-gray-500 text-xs">
                      By submitting, you agree to our Privacy Policy. We'll
                      never share your information.
                    </p>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
