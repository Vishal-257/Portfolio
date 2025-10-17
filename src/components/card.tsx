
import { Card } from "flowbite-react";

export function CardComponent(props:any) {
  return (
    <Card
      className="w-25 h-25 sm:w-40 sm:h-40 md:w-50 md:h-55 hover:shadow-sm hover:bg-gray-950 hover:shadow-amber-50 p-0 flex flex-col justify-center text-center border-none hover:scale-110 ease-in-out transition-all bg-black"
      imgAlt={props.altText}
    >
      <img src={props.imgUrl} alt={props.imgAlt} className="h-1/2 mx-auto "/>
      <h5 className="text-sm sm:text-lg md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {props.title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {props.desc}
      </p>
    </Card>
  );
}
