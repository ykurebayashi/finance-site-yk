import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Hero from "../components/home/Hero";
import RequestForm from "../components/home/RequestForm";
import HomeServices from "../components/home/HomeServices";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Finance Business</title>
        <meta name="description" content="Home page for Finance Business" />
      </Head>
      <Hero />
      <RequestForm />
      <HomeServices />
    </div>
  );
}
