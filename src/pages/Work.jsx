import React, { useState, useRef } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectTag from "../components/ProjectTag";
import { animate, motion, useInView } from "framer-motion";
import assets from "../assets/assets";

const projectsData = [
  {
    id: 1,
    title: "Full-Stack E-Commerce Platform",
    description:
      "Developed a MERN-based e-commerce platform with JWT authentication, role-based authorization, REST APIs, and MongoDB-powered data management.",
    image: assets.shopora,
    tag: ["All", "Web"],
    gitUrl: "https://github.com/AyeshaAfzal-01/shopora",
    previewUrl: "",
  },
  {
    id: 2,
    title: "Music Streaming Web App",
    description:
      "Built a Spotify-inspired web application using vanilla JavaScript, HTML, and CSS Implemented playlist rendering, audio controls, and dynamic DOM updates",
    image: assets.music,
    tag: ["All", "Web"],
    gitUrl: "https://github.com/AyeshaAfzal-01/Music-Streaming-App",
    previewUrl: "",
  },
  {
    id: 3,
    title: "Klondike Solitaire Card Game",
    description: "Built a console-based Solitaire game in C++ using OOP concepts, operator overloading, dynamic memory management and custom console rendering.",
    image: assets.solitaire,
    tag: ["All"],
    gitUrl: "https://github.com/AyeshaAfzal-01/solitaire-using-oops",
    previewUrl: "",
  },
  {
    id: 4,
    title: "Clinic Management Mobile App",
    description: "Contributed to an Android clinic management app in Kotlin featuring appointment booking, doctor-patient communication, report management, notifications, and video consultation workflows.",
    image: assets.clinic,
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/SamiaWajid7/HealthCarePlus",
    previewUrl: "",
  },
{
  id: 6,
  title: "X.com (Twitter) Clone",
  description:
    "A responsive front-end clone of X.com (Twitter) built with HTML, CSS, and JavaScript, recreating the platform's modern layout, styling, and overall user interface with attention to detail.",
  image: assets.twitter,
  tag: ["All", "Web"],
  gitUrl: "https://github.com/AyeshaAfzal-01/X.com-Twitter--Clone-using-React",
  previewUrl: "",
},
{
  id: 7,
  title: "Netflix Clone",
  description:
    "A responsive Netflix landing page clone built with HTML, CSS, and JavaScript, closely replicating the original design, layout, animations, overall browsing experience, and visual styling across different screen sizes.",
  image: assets.netflix,
  tag: ["All", "Web"],
  gitUrl: "https://github.com/AyeshaAfzal-01/netflix-clone",
  previewUrl: "",
},
  // {
  //   id: 8,
  //   title: "Maze Runner Game",
  //   description: "Maze Runner Game in C++ OOP",
  //   image: assets.maze,
  //   tag: ["All"],
  //   gitUrl: "/",
  //   previewUrl: "",
  // },
  // {
  //   id: 10,
  //   title: "Tetris Game",
  //   description: "Tetris Game in C++ OOP",
  //   image: assets.tetris,
  //   tag: ["All"],
  //   gitUrl: "/",
  //   previewUrl: "",
  // },
];

const Work = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // once it comes in view turn it into true

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );
  const cardVariants = {
    // animation stuff (motion.li)
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="work" className="scroll-mt-20">
      <h2 className="text-center text-4xl md:text-5xl mt-20 mb-2 font-bold text-dark font-display dark:text-white">My <span className="text-primary">P</span>rojects</h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-4 md:gap-6 md:gap-y-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Work;