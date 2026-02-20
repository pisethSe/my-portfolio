// src/components/shared/Button.jsx
import { motion } from "framer-motion";
import clsx from "clsx";

const Button = ({ children, variant = "primary", className, ...props }) => {
  const variants = {
    primary: "bg-gray-900 text-white hover:bg-gray-800 border border-gray-900",
    secondary:
      "bg-transparent text-gray-900 border-2 border-gray-900 hover:bg-gray-900 hover:text-white",
    ghost: "bg-transparent text-gray-900 hover:bg-gray-100",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={clsx(
        "px-8 py-4 font-medium transition-all duration-300 inline-flex items-center gap-2",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
