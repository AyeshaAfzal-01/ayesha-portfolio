import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-5 space-y-1">
        <li>BS Information Technology</li>
        <li>Punjab University College of Information Technology</li>
        <li>CGPA: 3.77/4.00</li>
        <li>Sep 2023 - Present</li>
      </ul>
    ),
  },
    {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-5 grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>React.js</li>
          <li>Next.js</li>
          <li>MongoDB</li>
        </div>

        <div>
          <li>TailwindCSS</li>
          <li>PostgreSQL</li>
          <li>JavaScript</li>
          <li>AI & ML</li>
          <li>Python</li>
          <li>NumPy</li>
        </div>

        <div>
          <li>Pandas</li>
          <li>Scikit-learn</li>
          <li>Matplotlib & Seaborn</li>
          <li>Git & GitHub</li>
        </div>
      </ul>
    ),
  },

  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-5 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <li>Intro to Machine Learning, Kaggle</li>
          <li>Pandas, Kaggle</li>
          <li>Intro to Programming, Kaggle</li>
          <li>Python, Kaggle</li>
        </div>

        <div className="space-y-2">
          <li>Python Data Structures, ULSA</li>
          <li>Programming for Everybody, ULSA</li>
          <li>Developing Front-End Apps with React, IBM</li>
        </div>
      </ul>
    ),
  },

  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Teaching Assistant - Programming Fundamentals</li>
        <li>PUCIT</li>
        <li>Feb 2026 - May 2026</li>
      </ul>
    ),
  },

  {
    title: "Achievements",
    id: "achivements",
    content: (
      <ul className="list-disc pl-5 space-y-3">
        <li>
          Participated in Gemini 3 Hackathon (Devpost) and built a Life
          Screenshot Organizer project under time constraints.
        </li>

        <li>
          Competed in coding competitions including Tech War (MLSA FCIT) and
          Code Bees 4.0.
        </li>
      </ul>
    ),
  },
];

const Skills = () => {
  const [tab, setTab] = useState("education");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <div className="text-gray-800 dark:text-gray-400">
      {/* Horizontally Scrollable Tabs */}
      <div className="mt-8 overflow-x-auto scrollbar-hide">
        <div className="flex w-max gap-4">
          <TabButton
            selectTab={() => handleTabChange("education")}
            active={tab === "education"}
          >
            Education
          </TabButton>

            <TabButton
            selectTab={() => handleTabChange("skills")}
            active={tab === "skills"}
          >
            Skills
          </TabButton>

          <TabButton
            selectTab={() => handleTabChange("certifications")}
            active={tab === "certifications"}
          >
            Certifications
          </TabButton>

          <TabButton
            selectTab={() => handleTabChange("experience")}
            active={tab === "experience"}
          >
            Experience
          </TabButton>

          <TabButton
            selectTab={() => handleTabChange("achivements")}
            active={tab === "achivements"}
          >
            Achievements
          </TabButton>
        </div>
      </div>

      <div className="mt-8 wrap-break-words">
        {TAB_DATA.find((t) => t.id === tab).content}
      </div>
    </div>
  );
};

export default Skills;