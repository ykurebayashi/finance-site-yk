import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Hero from "../components/home/Hero";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Finance Business</title>
        <meta name="description" content="Home page for Finance Business" />
      </Head>
      <Hero />
    </div>
  );
}
