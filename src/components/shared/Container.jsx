// src/components/shared/Container.jsx
import clsx from "clsx";

const Container = ({ children, className, size = "default" }) => {
  const sizes = {
    default: "max-w-7xl",
    narrow: "max-w-5xl",
    wide: "max-w-8xl",
    full: "max-w-full",
  };

  return (
    <div
      className={clsx("mx-auto px-6 sm:px-8 lg:px-12", sizes[size], className)}
    >
      {children}
    </div>
  );
};

export default Container;
