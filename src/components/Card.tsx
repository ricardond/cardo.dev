import Image from "next/image";

interface Cardprops{
    titulo: string;
    desc: string;
    image: string;
    abrirProjeto: string;
}

export default function Card({titulo, desc, image, abrirProjeto}: Cardprops){
    return(
        <div className="flex flex-col w-90 h-90 max-w-90 min-w-50 rounded-lg p-3 cursor-pointer border border-gray-200 shadow-sm hover:bg-gray-800 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <Image className="w-full h-50 rounded-2xl" src={image} alt={titulo} width={500} height={300} />
            <h2 className="text-amber-300 text-2xl">{titulo}</h2>
            <p className="text-white">{desc}</p>
            <a href={abrirProjeto} target="_blank" className="text-amber-500 rounded-2xl p-1 hover:bg-amber-500 hover:text-gray-800 border-1 border-amber-500 w-25">Ver projeto</a>
        </div>
    )
}