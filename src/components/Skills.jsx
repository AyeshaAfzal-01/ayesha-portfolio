import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 grid grid-cols-3">
        <div>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>React.js</li>
          <li>Next.js</li>
          <li>MongoDB</li>
        </div>
        <div>
          <li>TailwindCSS</li>
          <li>AI & ML</li>
          <li>Python</li>
          <li>JavaScript</li>
          <li>NumPy</li>
        </div>
        <div>
          <li>Pandas</li>
          <li>Scikit-learn</li>
          <li>Matplotlib & seaborn</li>
          <li>Git & GitHub</li>
          <li>PostgreSQL</li>
        </div>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>BS Information Technology</li>
        <li>Punjab University College of Information Technology</li>
        <li>CGPA: 3.77/4.00</li>
        <li>sep 2023 - Present</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2 grid grid-cols-2">
        <div>
        <li>Intro to Machine Learning,<br/> Kaggle - Issued Sep 2025</li>
        <li>Pandas, Kaggle - Issued Sep 2025</li>
        <li>Intro to Programming, Kaggle<br/> - Issued Sep 2025</li>
           <li>Python, Kaggle - Issued Sep 2025</li>
        </div>
        <div>
        <li>Python Data Structures, United Latino Students Association - Issued Aug 2025</li>
        <li>Programming from everybody, United Latino Students Association - Issued Jul 2025</li>
        <li>Developing Front-end Apps with React, IBM - Issued Jun 2025</li>
        </div>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>Teaching Assitant - Programming Fundamentals</li>
        <li>PUCIT</li>
        <li>Feb 2026 - May 2026</li>
      </ul>
    ),
  },
  {
    title: "Achievements",
    id: "achivements",
    content: (
      <ul className="list-disc pl-2">
        <li>Participated in Gemini 3 Hackathon (Devpost) - Built “Life Screenshot Organizer” project under time constraints</li>
        <li>Competed in coding competitions including Tech War (MLSA FCIT) and Code Bees 4.0</li>
      </ul>
    ),
  },
];

const Skills = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <div className="text-gray-800">
      <div className="tabs flex justify-start flex-row mt-8">
        <TabButton
          selectTab={() => handleTabChange("skills")}
          active={tab === "skills"}
        >
          {" "}
          Skills{" "}
        </TabButton>
        <TabButton
          selectTab={() => handleTabChange("education")}
          active={tab === "education"}
        >
          {" "}
          Education{" "}
        </TabButton>
        <TabButton
          selectTab={() => handleTabChange("certifications")}
          active={tab === "certifications"}
        >
          {" "}
          Certifications{" "}
        </TabButton>
        <TabButton
          selectTab={() => handleTabChange("experience")}
          active={tab === "experience"}
        >
          {" "}
          Experience{" "}
        </TabButton>
         <TabButton
          selectTab={() => handleTabChange("achivements")}
          active={tab === "achivements"}
        >
          {" "}
          Achievements{" "}
        </TabButton>
      </div>
      <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
    </div>
  );
};

export default Skills;
