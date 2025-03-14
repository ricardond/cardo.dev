import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
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
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}
