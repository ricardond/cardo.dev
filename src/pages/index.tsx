import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="flex flex-wrap-reverse items-center justify-around mt-20"> 
        <div className="flex flex-col flex-wrap">
          <h1 className="text-amber-300 text-3xl font-bold">Olá! Me chamo Ricardo Dias, eu desenvolvo coisas!</h1>
          <p className="text-amber-50 text-2xl">Sou graduado em Computação, sou Desenvolvedor Web Full-Stack<br/> e nas horas vagas desenvolvo alguns games</p>
        </div>
        <div className="rounded-full transform">
          <Image className="rounded-full" src="/cardo.jpg" width={250} height={250} alt="Ricardo Dias" />
        </div>
      </section>
    </>
  );
}
