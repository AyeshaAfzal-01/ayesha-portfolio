import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div>
      <div className="flex gap-2 items-center">
        <p className="text-pink-500 tracking-widest font-semibold text-[11px]">
          CREATIVE DEVELOPER & DESIGNER
        </p>
        <p className="text-pink-500 pb-2">
          ___________________
        </p>
      </div>

      <div className="text-8xl font-bold font-display w-64 italic">
        <div className="font-body text-6xl not-italic font-semibold">Hello, I'm</div>
        
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
          className="text-pink-500 italic"
        />
      </div>
    </div>
  );
};

export default Hero;