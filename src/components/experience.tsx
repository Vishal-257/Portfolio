import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
/* eslint-disable @next/next/no-img-element */
export default function Experience(){
    const exp = [{text:"Experience", className:"text-4xl"}]
    return (
        <div className="my-10 flex flex-col items-center justify-center">
            <div className=" flex justify-center">
                <TypewriterEffectSmooth words={exp}/>
            </div>

            <div className=" m-5 sm:m-10 sm:w-160 md:w-200 hover:scale-103 transition-all gap-4 py-10 pr-5 sm:px-10 bg-black border border-white/[0.2] shadow-lg shadow-gray-600 h-fit flex flex-col sm:flex-row sm:h-96 rounded-3xl">
                <div className="items-center flex justify-center mb-5 sm:m-0">
                    <img src="/componentsAssests/Valsco.png" className="rounded-[50%] h-10 w-10 sm:h-30 sm:w-40" alt="Company logo" />                   
                </div>
                <div className="pl-10">
                    <a href="https://www.valscotech.com/" target="_blank" className="text-xl md:text-4xl text-[#1E90FF] font-semibold">VALSCO Technology</a>
                    <div className="my-5 text-xs md:text-lg flex flex-row gap-10 md:gap-55 italic"><p>Frontend Developer Intern</p><p>Aug 2023 - Sep 2023</p></div>
                    <div className="text-xs md:text-lg">
                        <ul className="list-disc">
                            <li>During my internship, I worked on 2 frontend projects using React, Tailwind, API and Postman for API Testing.</li>
                            <li>Collaborated with design team to implement responsive and user friendly interfaces.</li>
                            <li>Implemented version control using Git for collaborative development projects.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}