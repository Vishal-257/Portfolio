"use client";
import {ExpandableCardDemo} from "./projectList";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
const Projects = () => {
  const words = [
    {
      text: "My", className:"text-4xl"
    },
    {
      text: "Projects", className:"text-4xl"
    },
  ];
  return (
    <div>
      <div className="flex flex-col justify-center items-center my-15">
        <TypewriterEffectSmooth words={words} />
      </div>
      <ExpandableCardDemo />
    </div>
  );
};

export default Projects;
