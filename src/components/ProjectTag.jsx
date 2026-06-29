import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-dark dark:text-white border-primary"
    : "text-gray-600 border-slate-600 hover:border-dark hover:dark:border-white";

  return (
    <button
      className={`${buttonStyles} mb-12 rounded-full border-2 px-6  py-2 text-sm font-semibold cursor-pointer`} onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;