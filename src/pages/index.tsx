import Head from 'next/head';
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Head>
        <title>Ricardo Dias | Full-Stack Developer</title>
        <meta name="description" content="Ricardo Dias | Full-Stack Developer" />
        <meta
        property="og:description"
        content="Um desenvolvedor apaixonado por design, responsividade e performance."
      />
      <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Adicione outras meta tags aqui */}
      </Head>
      <section className="flex flex-col-reverse justify-center items-center flex-wrap gap-5 mt-25"> 
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
