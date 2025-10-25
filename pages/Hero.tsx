import { Spotlight } from "@/components/ui/spotlight";
import { MdCall } from "react-icons/md";
import React from "react";
import { PiGithubLogoFill } from "react-icons/pi";
import { BiLogoGmail } from "react-icons/bi";
import { RiLinkedinFill } from "react-icons/ri";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import MagicButton from "@/components/ui/MagicButton";
import { AiOutlineRight } from "react-icons/ai";
import Grid from "@/components/grid";
import { skillsList } from "@/components/skills";
import Projects from "@/components/projects";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Experience from "@/components/experience";
import ContactForm from "@/components/contact";
import Certifications from "@/components/certifications";

const Hero = () => {
  const data = skillsList;
  const words = " I don't just build websites, I build experiences.";
  const skillTitle = [
    {
      text: "My", className:"text-4xl"
    },
    {
      text: "Skills", className:"text-4xl"
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
      <div id="home" className="relative flex min-h-screen w-full items-center justify-center bg-white dark:bg-black">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
        <div className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
          <div className="m-auto text-center flex justify-center items-center flex-col">
            <h3 className="font-mono text-xl sm:text-2xl">
              Vishal&apos;s Portfolio
            </h3>
            <div className="flex justify-center items-center w-full mt-4 mb-6">
              <TextGenerateEffect
                className="w-2/3 flex justify-center items-center text-xl sm:text-3xl md:text-5xl text-center"
                words={words}
                duration={0.5}
              />
            </div>
            <p id="about" className="text-lg sm:text-xl md:text-3xl">
              Hi! I am Vishal, An aspiring Software Developer experienced in
              Frontend/Backend Technology, delivering scalable, client-focused
              applications and am committed to writing clean, maintainable code.
            </p>
            <a href="#projects">
              <MagicButton
                otherClasses="w-40"
                icon={<AiOutlineRight />}
                title="My Work"
              />
            </a>
          </div>
        </div>
      </div>
      <div id="skills" className="flex flex-col justify-center items-center">
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
      <div id="projects">
        <Projects />
      </div>
      <div>
        <Experience/>
      </div>
      <div>
        <Certifications/>
      </div>
      <div className="border-t-1 w-1/2 m-auto mb-10 border-gray-500"></div>
      <footer className=" bg-radial from-gray-800 from-10% via-gray-900 via-30% to-black to-80%">
        <div id="contact" className="text-xl sm:text-3xl md:text-4xl font-bold text-center"><h1>Contact Me</h1></div>
        <div className="flex flex-col justify-between sm:flex-row ">
          <div className="mt-10 text-gray-400 flex flex-row sm:flex-col justify-center sm:justify-normal gap-10 sm:gap-0">
            <a href="tel:+918438226518"><div className="mb-10 flex flex-row gap-2"><MdCall className="mt-1"/><p className=" hidden sm:block">+91 8438226518</p></div></a>
            <a href="mailto:vishalkumar191383527@gmail.com"><div className="mb-10 flex flex-row gap-2"><BiLogoGmail className="mt-1.5"/><p className=" hidden sm:block">vishalkumar191383527@gmail.com</p></div></a>            
            <a href="https://www.linkedin.com/in/vishal-kumar-yadav-12b5b4251/" target="_index">
            <div className="mb-10 flex flex-row gap-2"><RiLinkedinFill className="mt-1"/><p className=" hidden sm:block">LinkedIn</p></div>
            </a>
            <a href="https://github.com/Vishal-257" target="_index">
            <div className="mb-10 flex flex-row gap-2"><PiGithubLogoFill className="mt-1"/><p className=" hidden sm:block">Github</p></div>
            </a>
          </div>
          <div className="w-full sm:w-1/3">
            <ContactForm/>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Hero;
