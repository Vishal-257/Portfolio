// /* eslint-disable @next/next/no-img-element */
// 'use client'
// import { BiLogoTypescript } from "react-icons/bi";
// export default function SkillCard({color,altText,icon}:{color:string, altText:string, icon:React.ReactNode}){
//     const col = color
//     const random = Math.floor(Math.random())
//     return(
//         <>
//             <div
//             onMouseEnter={(e)=>{
//                 e.currentTarget.style.color = col
//             }}
//             onMouseLeave={(e)=>{
//                 e.currentTarget.style.color = "white"
//             }}
//              className={`m-2 animate-bounce delay-${random} transition-all ease-in-out p-4 w-16 h-16 rounded-2xl flex flex-row gap-2 items-center`}>
//                 {icon}
//             </div>
//         </>
//     )
// }

/* eslint-disable @next/next/no-img-element */
'use client';
import React from "react";

interface SkillCardProps {
  color: string;
  altText: string;
  icon: React.ReactNode;
  key:number;
  cardKey:number;
}

export default function SkillCard({ color, altText, icon, cardKey }: SkillCardProps) {
  const delays = ["delay-0", "delay-100", "delay-200", "delay-300", "delay-500"];
  const randomDelay = delays[(cardKey%delays.length)];

  return (
    <div
      aria-label={altText}
      role="img"
      onMouseEnter={(e) => (e.currentTarget.style.color = color)}
      onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
      className={`m-2 ${randomDelay} float transition-all ease-in-out p-4 w-16 h-16 rounded-2xl flex flex-row gap-2 items-center`}
    >
      {icon}
    </div>
  );
}
