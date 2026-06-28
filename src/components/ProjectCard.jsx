import React from "react";
import { FaGithub, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="border-2 border-gray-100 dark:border-none rounded-xl">
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="overlay flex items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] rounded-xl opacity-0 group-hover:flex group-hover:opacity-80 transition-all duration-500">
          
          <Link
            to={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <FaGithub className="h-8 w-8 text-[#ADB7BE] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>

          <a
  href={previewUrl || imgUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
>
  <FaEye className="h-8 w-8 text-[#ADB7BE] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
</a>

        </div>
      </div>

      <div className="text-dark dark:text-white font-body tracking-tighter leading-6 rounded-b-xl bg-offwhite py-8 px-6 text-justify dark:bg-dark-gray">
        <h5 className="text-lg font-semibold mb-2">{title}</h5>
        <p className="text-gray-light text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;