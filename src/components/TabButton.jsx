import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-gray-800 dark:text-gray-300"
    : "text-gray-500 dark:text-gray-400";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-gray-800 hover:dark:text-gray-300 ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-primary-border-light mt-2 mr-3"
      ></motion.div>
    </button>
  );
};

export default TabButton;