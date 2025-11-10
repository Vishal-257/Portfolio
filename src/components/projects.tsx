"use client";
import ScrollTriggered from "@/components/projectList"
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
const Projects = () => {
  const words = [
    {
      text: "My", className:"text-lg sm:text-2xl md:text-4xl"
    },
    {
      text: "Projects", className:"text-lg sm:text-2xl md:text-4xl"
    },
  ];
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-10">
        <TypewriterEffectSmooth words={words} />
      </div>
      <ScrollTriggered />
    </div>
  );
};

export default Projects;
