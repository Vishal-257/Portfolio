"use client";
import { LuBriefcase } from "react-icons/lu";
import { useRef, useEffect, useState } from "react";
export default function ExpCard() {
  const [isVisible, setVisible] = useState(false);
  const currentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const newRef = currentRef.current;
    if (!newRef) return;

    const observer = new IntersectionObserver(
      ([element]) => {
        if (element.isIntersecting) {
          setVisible(true);
          observer.unobserve(element.target);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(newRef);

    return () => {
      observer.unobserve(newRef);
    };
  }),
    [];
  return (
    <div
      ref={currentRef}
      className={`${
        isVisible ? "pop-in" : "opacity-0"
      } exp h-fit w-fit md:w-150 mx-10 flex flex-row gap-4 text-white duration-300 mt-0 sm:mt-10 hover:-translate-y-5 bg-gray-950 p-5 hover:shadow-lg hover:shadow-purple-700 rounded-xl`}
    >
      <div className="logo text-purple-800 ">
        <LuBriefcase className="text-lg sm:text-2xl mt-1" />
      </div>
      <div className="content">
        <div className="title text-lg sm:text-2xl font-semibold">
          Frontend Devloper - Intern
        </div>
        <div className="body">
          <div className="company flex flex-row justify-between text-sm sm:text-base italic text-gray-500">
            <div className="name">VALSCO Technology</div>
            <div className="duration">Aug 2023 - Sep 2023</div>
          </div>
          <div className="work text-sm md:text-base mt-3">
            <ul className=" list-disc">
              <li className="mb-2">
                As the Project lead, I coordinated with the client, design and
                development teams to deliver 2 responsive web applications.
                Clarified requirements, reduced rework, and supported timely
                project delivery.
              </li>
              <li className="mb-2">
                Collaborated with a 4-member design team to implement
                user-friendly and visually consistent interfaces, enhancing user
                engagement and improved page response speed by 20%.
              </li>
              <li className="mb-2">
                Utilized Git and GitHub for version control and structured team
                collaboration, maintaining full code integrity and smooth team
                workflows.{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
