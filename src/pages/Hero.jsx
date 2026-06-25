import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaArrowRight } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
    <div className="grid grid-cols-2 h-110">
      <div>
      <div className="flex gap-2 items-center">
        <p className="text-pink-500 tracking-[3px] text-[11px]">
          CREATIVE DEVELOPER & DESIGNER
        </p>
        <p className="text-pink-500 pb-1">
           _____
        </p>
      </div>

      <div className="text-8xl font-bold font-display w-64 mt-2 leading-21 min-h-60">
        <div className="text-6xl italic mb-1">Hello, I'm</div>
        
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
          className="text-pink-500 leading-px tracking-tighter"
        />
      </div>
      <p className="text-gray-500  w-80 mt-10"><span>I make the web</span><span className="italic"> feel </span><span>something. Interfaces that stop you mid-scroll. Code that ships on time. Design with a</span><span className="italic"> point of view.</span></p>
      </div>

      <div className="flex flex-col items-baseline-last justify-end gap-2 mb-10">
  
  <button className="group bg-pink border-2 border-pink-300  hover:bg-pink-600 rounded-full px-6 py-2 text-gray-50 font-body font-medium flex gap-4 items-center transition-all duration-300 hover:scale-105">
    SEE MY WORK

    <FaArrowRight
      className="text-sm transition-all duration-300 group-hover:translate-x-2 group-hover:scale-125"
    />
  </button>

  <button className="border border-gray-400 hover:border-purple hover:text-purple px-10 py-2 rounded-full transition-all duration-300 hover:scale-105">
    LET'S COLLABORATE
  </button>

  {/* Social Icons */}
  <div className="flex gap-4 px-4 text-2xl text-gray-500 mt-2">
    <Link to={'https://github.com/AyeshaAfzal-01/'}><FaGithub className="cursor-pointer hover:text-purple hover:scale-110 transition-all duration-300" />
    </Link>
    <Link to={'https://www.linkedin.com/in/ayesha-afzal01'}>
    <FaLinkedin className="cursor-pointer hover:text-purple hover:scale-110 transition-all duration-300" />
    </Link>
  <a href="mailto:ayesha.taisee1@gmail.com">
  <MdEmail className="cursor-pointer hover:text-purple hover:scale-110 transition-all duration-300" />
</a>
  </div>

</div>
    </div>
   <div className="overflow-hidden border-y border-gray-300 py-4 mt-4 text-gray-400 -mx-16 font-display">
  <div className="flex whitespace-nowrap animate-marquee">
    <div className="flex gap-12  text-sm italic">
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


   <div className="flex gap-12 px-8 text-sm italic">
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