import { Spotlight } from "@/components/ui/spotlight";
import React from "react";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import MagicButton from "@/components/ui/MagicButton";
import { AiOutlineRight } from "react-icons/ai";
import Grid from "@/components/grid";
import { skillsList } from "@/components/skills";
import Projects from "@/components/projects";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

const Hero = () => {
  const data = skillsList;
  const words = " I don't just build websites, I build experiences.";
  const skillTitle = [
    {
      text: "My",
    },
    {
      text: "Skills",
    },
  ];
  return (
    <div className="p-5 sm:p-10 w-full md:p-10 sm:pt-15 md:pt-10">
      <div className="w-full">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="relative flex min-h-screen w-full items-center justify-center bg-white dark:bg-black">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
        <div className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
          <div className="m-auto text-center flex justify-center items-center flex-col">
            <h3 className="font-mono text-xl sm:text-2xl">
              Vishal's Portfolio
            </h3>
            <div className="flex justify-center items-center w-full mt-4 mb-6">
              <TextGenerateEffect
                className="w-2/3 flex justify-center items-center text-xl sm:text-3xl md:text-5xl text-center"
                words={words}
                duration={0.5}
              />
            </div>
            <p className="text-lg sm:text-xl md:text-3xl">
              Hi! I am Vishal, An aspiring Software Developer experienced in
              Frontend/Backend Technology, delivering scalable, client-focused
              applications and am committed to writing clean, maintainable code.
            </p>
            <a href="#about">
              <MagicButton
                otherClasses="w-40"
                icon={<AiOutlineRight />}
                title="My Work"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
            <TypewriterEffectSmooth words={skillTitle} />
          </div>
      <div className="w-full overflow-x-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent">
        <div className="flex flex-row w-max animate-infinite-scroll space-x-6 py-10 px-5 md:px-10 lg:px-20 2xl:px-40">
          {data.map((item, index) => (
            <Grid
              key={index}
              altText={item.altText}
              title={item.title}
              imgUrl={item.imgUrl}
            />
          ))}
        </div>
      </div>
      <Projects />
    </div>
  );
};

export default Hero;
