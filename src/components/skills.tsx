"use client";
import SkillCard from "@/components/skillCard";
import { RiJavascriptLine, RiJavaFill, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandTypescript, TbFileTypeHtml } from "react-icons/tb";
import { FaPython, FaReact, FaAws } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import { PiFileCssBold, PiFileSql } from "react-icons/pi";
import { SiExpress, SiMysql, SiGit, SiPostman } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const skillCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = skillCardRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1}
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div ref={skillCardRef} className="flex flex-col justify-center w-full">
      <div className="flex flex-col gap-2 justify-center md:flex-row">
        {/* Languages */}
        <div
          id="Languages"
          className={`${
            isVisible ? "slide-in-left" : "opacity-0"
          } flex my-5 md:mx-0 border skill mx-auto border-gray-600 hover:-translate-y-5 bg-gray-950 flex-col duration-300 transition-all ease-in-out hover:shadow-lg hover:shadow-purple-700 rounded-3xl p-3 w-4/5 md:w-1/3 text-center`}
        >
          <h1 className="text-xl">Languages</h1>
          <div className="flex flex-wrap text-center justify-center">
            <SkillCard
              key={1}
              cardKey={1}
              color="#0096FF"
              icon={<TbBrandTypescript className="h-full w-full" />}
              altText="TypeScript"
            />
            <SkillCard
              key={2}
              cardKey={2}
              color="yellow"
              icon={<RiJavascriptLine className="h-full w-full" />}
              altText="JavaScript"
            />
            <SkillCard
              key={3}
              cardKey={3}
              color="orange"
              icon={<RiJavaFill className="h-full w-full" />}
              altText="Java"
            />
            <SkillCard
              key={4}
              cardKey={4}
              color="#0096FF"
              icon={<FaPython className="h-full w-full" />}
              altText="Python"
            />
            <div className="w-25 h-25 float transition-all delay-300 text-center">
              <h1 className="font-bold hover:text-[#8db4cf] text-white mt-6 text-2xl m-auto">
                C
              </h1>
            </div>
            <div className="w-25 h-25 float transition-all text-center">
              <h1 className="font-bold hover:text-[#57c764] text-white mt-6 text-2xl m-auto">
                C++
              </h1>
            </div>
            <SkillCard
              key={6}
              cardKey={6}
              color="orange"
              icon={<TbFileTypeHtml className="h-full w-full" />}
              altText="HTML"
            />
            <SkillCard
              key={9}
              cardKey={9}
              color="#0096FF"
              icon={<PiFileCssBold className="h-full w-full" />}
              altText="CSS"
            />
          </div>
        </div>

        {/* Frameworks */}
        <div
          id="Frameworks"
          className={`${
            isVisible ? "pop-in" : "opacity-0"
          } flex my-5 md:mx-0 border skill mx-auto border-gray-600 hover:-translate-y-5 bg-gray-950 flex-col duration-300 transition-all ease-in-out hover:shadow-lg hover:shadow-purple-700 rounded-3xl p-3 w-4/5 md:w-1/3 text-center`}
        >
          <h1 className="text-xl relative top-0">Frameworks</h1>
          <div className="flex justify-center flex-wrap">
            <SkillCard
              key={5}
              cardKey={5}
              color="cyan"
              icon={<FaReact className="h-full w-full" />}
              altText="ReactJs"
            />
            <SkillCard
              key={1}
              cardKey={1}
              color="#0096FF"
              icon={<RiTailwindCssFill className="h-full w-full" />}
              altText="Tailwind"
            />
            <SkillCard
              key={2}
              cardKey={2}
              color="yellow"
              icon={<SiExpress className="h-full w-full" />}
              altText="Express"
            />
            <div className="w-25 h-25 float transition-all text-center">
              <h1 className="font-bold hover:text-[#57c764] text-white mt-6 text-2xl m-auto">
                Axios
              </h1>
            </div>
          </div>
        </div>

        {/* Databases */}
        <div
          id="Databases"
          className={`${
            isVisible ? "slide-in-right" : "opacity-0"
          } flex my-5 md:mx-0 border skill mx-auto border-gray-600 hover:-translate-y-5 bg-gray-950 flex-col duration-300 transition-all ease-in-out hover:shadow-lg hover:shadow-purple-700 rounded-3xl p-3 w-4/5 md:w-1/3 text-center`}
        >
          <h1 className="text-xl relative top-0">Databases</h1>
          <div className="flex justify-center flex-wrap">
            <SkillCard
              key={3}
              cardKey={3}
              color="#0096FF"
              icon={<BiLogoPostgresql className="h-full w-full" />}
              altText="Postgres"
            />
            <SkillCard
              key={1}
              cardKey={1}
              color="#0096FF"
              icon={<SiMysql className="h-full w-full" />}
              altText="MySql"
            />
            <SkillCard
              key={2}
              cardKey={2}
              color="yellow"
              icon={<PiFileSql className="h-full w-full" />}
              altText="SQL"
            />
          </div>
        </div>
      </div>

      {/* Tools */}
      <div
        id="Tools"
        className={`${
          isVisible ? "fade-in" : "opacity-0"
        } flex mx-auto border skill border-gray-600 hover:-translate-y-5 duration-300 bg-gray-950 my-5 flex-col transition-all ease-in-out hover:shadow-lg hover:shadow-purple-700 rounded-3xl items-center p-3 w-4/5 md:w-1/3 text-center`}
      >
        <h1 className="text-xl relative top-0">Tools</h1>
        <div className="flex justify-center flex-wrap">
          <SkillCard
            key={9}
            cardKey={9}
            color="orange"
            icon={<SiGit className="h-full w-full" />}
            altText="Git"
          />
          <SkillCard
            key={8}
            cardKey={8}
            color="orange"
            icon={<SiPostman className="h-full w-full" />}
            altText="Postman"
          />
          <SkillCard
            key={2}
            cardKey={2}
            color="orange"
            icon={<FaAws className="h-full w-full" />}
            altText="AWS"
          />
          <div className="w-25 h-25 float transition-all text-center">
            <h1 className="font-bold hover:text-orange-500 text-white mt-6 text-2xl m-auto">
              API
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
