import { Url } from "next/dist/shared/lib/router/router";

interface Cardprops{
    titulo: string;
    desc: string;
    image: string;
}

export default function Card({titulo, desc, image}: Cardprops){
    return(
        <div className="flex flex-col w-90 h-90 max-w-90 min-w-50 rounded-2xl p-3 cursor-pointer border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <img className="w-full h-60 rounded-2xl" src={image} alt="" />
            <h2 className="text-amber-300 text-2xl">{titulo}</h2>
            <p className="text-white">{desc}</p>
        </div>
    )
}