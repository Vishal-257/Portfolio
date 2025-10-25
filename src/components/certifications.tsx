import { ThreeDCardDemo } from "./certificationCard";


export default function Certifications(){
    return(
        <div className="flex justify-center m-10 flex-col">
            <div className="text-center">
                <h1 className=" font-bold text-4xl">Certifications</h1>
            </div>
            <div>
                <ThreeDCardDemo title={"AWS Cloud Practitioner"} imgUrl={"/componentsAssests/AWS_CP.png"}/>
                <ThreeDCardDemo title={"Complete Full Stack Web Developement Bootcamp" } imgUrl={"componentsAssests/Udemy.png"}/>
            </div>
        </div>
    )
}