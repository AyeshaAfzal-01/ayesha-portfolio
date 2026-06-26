import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-gray-800"
    : "text-gray-500";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-gray-800 ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-secondary mt-2 mr-3"
      ></motion.div>
    </button>
  );
};

export default TabButton;