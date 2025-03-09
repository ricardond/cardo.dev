import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="flex flex-wrap items-center justify-around m-20"> 
        <div className="flex flex-col flex-wrap">
          <h1 className="text-amber-300 text-3xl">Olá! Me chamo Ricardo Dias,<br/> eu desenvolvo coisas!</h1>
          <p className="text-amber-50 text-2xl">Sou graduado em Computação, sou desenvolvedor web Full-Stack<br/> e nas horas vagas desenvolvo alguns games</p>
        </div>
        <div>
          <Image className="rounded-4xl" src="/cardo.jpg" width={250} height={250} alt="Ricardo Dias" />
        </div>
      </section>
    </>
  );
}
