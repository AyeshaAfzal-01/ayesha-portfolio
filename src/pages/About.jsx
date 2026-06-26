import React from "react";
import assets from "../assets/assets";
import Skills from "../components/Skills";

const About = () => {
  return (
    <section
      id="about"
      className="w-full py-12 md:py-16"
    >
      <div className="flex flex-col gap-8">
        
        {/* Image + About Text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          
          <div className="flex justify-center">
            <img
              src={assets.about_img}
              alt="About"
              className="w-full max-w-lg sm:max-w-lg md:max-w-2xl h-auto object-contain"
            />
          </div>

          <div>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl text-dark dark:text-white mb-4">
              <span className="text-primary-border-light">A</span>
              <span>bout me</span>
            </h2>

            <p className="font-body text-sm sm:text-base md:text-lg text-gray-500 dark:text-gray-400 text-justify leading-relaxed">
              I believe great software sits at the intersection of functionality
              and experience. As a Full-Stack Developer, I enjoy crafting fast,
              intuitive, and visually appealing applications that solve
              real-world problems. Whether I'm building a responsive frontend,
              designing APIs, or exploring AI technologies, I'm always looking
              for ways to learn, improve, and create work that people genuinely
              enjoy using.
            </p>
          </div>
        </div>

        {/* Skills Below Both Columns */}
        <div>
          <Skills />
        </div>

      </div>
    </section>
  );
};

export default About;