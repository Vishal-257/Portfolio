// "use client";
// /* eslint-disable @next/next/no-img-element */
// import React, { useEffect, useId, useRef, useState } from "react";
// import { AnimatePresence, motion } from "motion/react";
// import { useOutsideClick } from "@/hooks/use-outside-click";
// import { Projects } from "./projectsData";
// import Image from "next/image";

// export function ExpandableCardDemo() {
//   const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
//     null
//   );
//   const ref = useRef<HTMLDivElement>(null);
//   const id = useId();
//   const cards = Projects;

//   useEffect(() => {
//     function onKeyDown(event: KeyboardEvent) {
//       if (event.key === "Escape") {
//         setActive(false);
//       }
//     }

//     if (active && typeof active === "object") {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }

//     window.addEventListener("keydown", onKeyDown);
//     return () => window.removeEventListener("keydown", onKeyDown);
//   }, [active]);

//   useOutsideClick(ref, () => setActive(null));

//   return (
//     <>
//       <AnimatePresence>
//         {active && typeof active === "object" && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black/20 h-full w-full z-10"
//           />
//         )}
//       </AnimatePresence>
//       <AnimatePresence>
//         {active && typeof active === "object" ? (
//           <div className="fixed inset-0  grid place-items-center z-[100]">
//             <motion.button
//               key={`button-${active.title}-${id}`}
//               layout
//               initial={{
//                 opacity: 0,
//               }}
//               animate={{
//                 opacity: 1,
//               }}
//               exit={{
//                 opacity: 0,
//                 transition: {
//                   duration: 0.05,
//                 },
//               }}
//               className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
//               onClick={() => setActive(null)}
//             >
//               <CloseIcon />
//             </motion.button>
//             <motion.div
//               layoutId={`card-${active.title}-${id}`}
//               ref={ref}
//               className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
//             >
//               <motion.div layoutId={`image-${active.title}-${id}`}>
//                 <Image
//                   width={200}
//                   height={200}
//                   src={active.src}
//                   alt={active.title}
//                   className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
//                 />
//               </motion.div>

//               <div>
//                 <div className="flex justify-between items-start p-4">
//                   <div className="">
//                     <motion.h3
//                       layoutId={`title-${active.title}-${id}`}
//                       className="font-bold text-neutral-700 dark:text-neutral-200"
//                     >
//                       {active.title}
//                     </motion.h3>
//                     <motion.p
//                       layoutId={`description-${active.description}-${id}`}
//                       className="text-neutral-600 dark:text-neutral-400"
//                     >
//                       {active.description}
//                     </motion.p>
//                   </div>

//                   <motion.a
//                     layoutId={`button-${active.title}-${id}`}
//                     href={active.ctaLink}
//                     target="_blank"
//                     className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
//                   >
//                     {active.ctaText}
//                   </motion.a>
//                 </div>
//                 <div className="pt-4 relative px-4">
//                   <motion.div
//                     layout
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
//                   >
//                     {typeof active.content === "function"
//                       ? active.content()
//                       : active.content}
//                   </motion.div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         ) : null}
//       </AnimatePresence>
//       <ul className="max-w-2xl mx-auto w-full gap-4">
//         {cards.map((card) => (
//           <motion.div
//             layoutId={`card-${card.title}-${id}`}
//             key={`card-${card.title}-${id}`}
//             onClick={() => setActive(card)}
//             className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
//           >
//             <div className="flex gap-4 flex-col md:flex-row ">
//               <motion.div layoutId={`image-${card.title}-${id}`}>
//                 <img
//                   width={100}
//                   height={100}
//                   src={card.src}
//                   alt={card.title}
//                   className="h-40 w-full md:h-14 md:w-14 rounded-lg object-cover object-top"
//                 />
//               </motion.div>
//               <div className="">
//                 <motion.h3
//                   layoutId={`title-${card.title}-${id}`}
//                   className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
//                 >
//                   {card.title}
//                 </motion.h3>
//                 <motion.p
//                   layoutId={`description-${card.description}-${id}`}
//                   className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
//                 >
//                   {card.description}
//                 </motion.p>
//               </div>
//             </div>
//             <motion.button
//               layoutId={`button-${card.title}-${id}`}
//               className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0"
//             >
//               {card.ctaText}
//             </motion.button>
//           </motion.div>
//         ))}
//       </ul>
//         {/* <div className="min-h-screen grid place-items-center font-mono bg-black">
      
//       <div className=" rounded-md bg-gray-800 shadow-lg">
//         <div className="md:flex px-4 leading-none max-w-4xl">
//           <div className="flex-none ">
//            <img
//             src="/componentsAssests/Portfolio.png"
//             alt="pic"
//             className="h-37 w-56 rounded-md transform -translate-y-4 border-4 border-gray-300 shadow-lg"
//           />           
//           </div>

//           <div className="flex-col text-gray-300">
   
//             <p className="pt-4 text-2xl text-center font-bold">Joker (2020)</p>
//             <hr className="hr-text" data-content=""/>
//             <div className="text-md flex justify-between px-4 my-2">
//               <span className="font-bold">2h 2min | Crime, Drama, Thriller</span>
//               <span className="font-bold"></span>
//             </div>
//             <p className="hidden md:block px-4 my-4 text-sm text-left">In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker. </p>
            
//             <p className="flex text-md px-4 my-2">
//               Rating: 9.0/10 
//               <span className="font-bold px-2">|</span>
//               Mood: Dark
//             </p>
            
//             <div className="text-xs">
//               <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">TRAILER</button>
              
//               <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">IMDB</button>
              
//               <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">AMAZON</button>
//             </div>          
//           </div>
//         </div>          
//       </div>
//     </div> */}
//     </>
//   );
// }

// export const CloseIcon = () => {
//   return (
//     <motion.svg
//       initial={{
//         opacity: 0,
//       }}
//       animate={{
//         opacity: 1,
//       }}
//       exit={{
//         opacity: 0,
//         transition: {
//           duration: 0.05,
//         },
//       }}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className="h-4 w-4 text-black"
//     >
//       <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//       <path d="M18 6l-12 12" />
//       <path d="M6 6l12 12" />
//     </motion.svg>
//   );
// };

import React from 'react';
import { motion, Variants } from 'framer-motion';

export default function ScrollTriggered() {
  return (
    <div style={container}>
      {project.map(([imageUrl, hueA, hueB, title, content, projectUrl], i) => (
        <Card
          i={i}
          imageUrl={imageUrl}
          hueA={hueA}
          hueB={hueB}
          key={i}
          title={title}
          content={content}
          projectUrl={projectUrl}
        />
      ))}
    </div>
  );
}

interface CardProps {
  imageUrl: string;
  hueA: number;
  hueB: number;
  i: number;
  title: string;
  content: string;
  projectUrl: string;
}

function Card({
  imageUrl,
  hueA,
  hueB,
  i,
  title,
  content,
  projectUrl,
}: CardProps) {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <motion.div
      className={`card-container-${i}`}
      style={cardContainer}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
    >
      <div style={{ ...splash, background }} />
      <motion.div style={card} variants={cardVariants} className="card">
        <div className="flex flex-col text-sm text-center">
          <img src={imageUrl} className='mb-5 rounded-t-2xl' alt="ProjectImg" />
          <p className="text-xl font-semibold mb-2 text-center">{title}</p>
          <p className="text-sm text-white text-center whitespace-normal max-w-[250px] px-0 mx-auto leading-relaxed overflow-hidden">
            {content}
          </p>
          <div className="flex justify-center">
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm mt-3 rounded-lg hover:text-black hover:bg-green-600 bg-purple-700 border-2 border-transparent w-20 text-white text-center py-1 font-semibold hover:border-white transition-all duration-200"
            >
              Code
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -6,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

const container: React.CSSProperties = {
  margin: '50px auto',
  maxWidth: 500,
  paddingBottom: 50,
  width: '100%',
};

const cardContainer: React.CSSProperties = {
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  paddingTop: 5,
  marginBottom: 10,
};

const splash: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
};

const card: React.CSSProperties = {
  fontSize: 164,
  width: 300,
  height: 480,
  display: 'flex',
  justifyContent: 'center',
  borderRadius: 20,
  background: '#400C4C',
  boxShadow:
    '0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)',
  transformOrigin: '10% 30%',
};

/**
 * ==============   Data   ================
 */

const project: [string, number, number, string, string, string][] = [
  ['/componentsAssests/Portfolio.png', 340, 10,'Portfolio','I built this portfolio using React, Next, and TailwindCSS to showcase my projects, skills and my expertise in building modern, responsive, and high-performance web applications.','https://github.com/Vishal-257/Portfolio'],
  ['/componentsAssests/Quiz_App.png', 20, 40,'Quiz App','This project was built using ReactJs, Express, JavaScript and PostgreSQL. In this, the user will be given a country and the user has to answer correct capital to get points. If the user is wrong, the score will be reset to 0 and the user will have to restart the quiz. You can refer the Github Repository.','https://github.com/Vishal-257/Quiz_App'],
  ['/componentsAssests/Weather_App.png', 60, 90,'Weather App','This project was built using React, Express, Axios, and API. The user has to pass the place name, which then sends a GET request to the API and renders the details from the response recieved. The objective of this project was to demonstrate and understand the proper use of API and HTTP requests.','https://github.com/Vishal-257/Weather_App'],
];
