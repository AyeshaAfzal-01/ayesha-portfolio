import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Hero = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 min-h-[70vh]">

        {/* Left Side */}
        <div className="flex flex-col justify-center">
          <div className="flex gap-2 items-center">
            <p className="text-pink-500 tracking-[3px] text-[11px] md:text-xs">
              CREATIVE DEVELOPER & DESIGNER
            </p>
            <p className="text-pink-500 pb-1">_____</p>
          </div>

          <div className="mt-4 w-60 min-h-55 md:min-h-65">
            <div className="text-5xl font-semibold md:text-5xl lg:text-6xl italic font-display mb-1">
              Hello, I'm
            </div>

            <TypeAnimation
              sequence={[
                "Ayesha Afzal",
                2000,
                "MERN Developer",
                2000,
                "AI/ML Enthusiast",
                2000,
                "Frontend Developer",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
              cursor={true}
              className="text-pink-500 font-display font-bold tracking-tighter text-5xl md:text-7xl lg:text-8xl leading-21"
            />
          </div>

          <p className="text-gray-500 max-w-80 mt-4 text-sm md:text-base leading-relaxed">
            I make the web <span className="italic">feel</span> something.
            Interfaces that stop you mid-scroll. Code that ships on time.
            Design with a <span className="italic">point of view.</span>
          </p>
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-start lg:items-end justify-end gap-3">

          <button className="group bg-pink border-2 border-pink-300 hover:bg-pink-600 rounded-full px-6 py-2 text-gray-50 font-body font-medium flex gap-4 items-center transition-all duration-300 hover:scale-105">
            SEE MY WORK

            <FaArrowRight className="text-sm transition-all duration-300 group-hover:translate-x-2 group-hover:scale-125" />
          </button>

          <button className="border border-gray-400 hover:border-purple hover:text-purple px-10 py-2 rounded-full transition-all duration-300 hover:scale-105">
            LET'S COLLABORATE
          </button>

          {/* Social Icons */}
          <div className="flex gap-4 text-2xl text-gray-500 mt-2">

            <a
              href="https://github.com/AyeshaAfzal-01"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="cursor-pointer hover:text-purple hover:scale-110 transition-all duration-300" />
            </a>

            <a
              href="https://www.linkedin.com/in/ayesha-afzal01"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="cursor-pointer hover:text-purple hover:scale-110 transition-all duration-300" />
            </a>

            <a href="mailto:ayesha.taisee1@gmail.com">
              <MdEmail className="cursor-pointer hover:text-purple hover:scale-110 transition-all duration-300" />
            </a>

          </div>
        </div>
      </div>

      {/* Skills Ticker */}
      <div className="overflow-hidden border-y border-gray-300 py-4 mt-8 text-gray-400 font-display">
        <div className="flex whitespace-nowrap animate-marquee">

          <div className="flex gap-8 md:gap-12 text-xs md:text-sm italic">
            <span>React</span>
            <span>•</span>
            <span>MongoDB</span>
            <span>•</span>
            <span>Express.js</span>
            <span>•</span>
            <span>Node.js</span>
            <span>•</span>
            <span>Next.js</span>
            <span>•</span>
            <span>Tailwind CSS</span>
            <span>•</span>
            <span>JavaScript</span>
            <span>•</span>
            <span>Python</span>
            <span>•</span>
            <span>NumPy</span>
            <span>•</span>
            <span>Pandas</span>
            <span>•</span>
          </div>

          <div className="flex gap-8 md:gap-12 px-8 md:px-12 text-xs md:text-sm italic">
            <span>React</span>
            <span>•</span>
            <span>MongoDB</span>
            <span>•</span>
            <span>Express.js</span>
            <span>•</span>
            <span>Node.js</span>
            <span>•</span>
            <span>Next.js</span>
            <span>•</span>
            <span>Tailwind CSS</span>
            <span>•</span>
            <span>JavaScript</span>
            <span>•</span>
            <span>Python</span>
            <span>•</span>
            <span>NumPy</span>
            <span>•</span>
            <span>Pandas</span>
            <span>•</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;