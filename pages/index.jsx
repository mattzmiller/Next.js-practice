import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Events App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <nav>
          <img />
          <Link className={styles.navItems} href="/">
            Home
          </Link>
          <Link className={styles.navItems} href="/events">
            Events
          </Link>
          <Link className={styles.navItems} href="/AboutUsPage">
            About Us
          </Link>
        </nav>
      </header>
      <main className={styles.main}>
        {data.map((event) => {
          return (
            <Link key={event.id} href={`/events/${event.id}`}>
              <p>hello</p>
              <Image
                width={200}
                height={100}
                src={event.image}
                alt={event.title}
              />
              <h2>{event.title}</h2>
              <p>{event.description}</p>
            </Link>
          );
        })}
      </main>
      <footer className={styles.footer}>
        <p> © 2023 Events Project</p>
      </footer>
    </>
  );
}

export async function getServerSideProps() {
  const { events_categories } = await import("/data/data.json");
  return {
    props: {
      data: events_categories,
    },
  };
}
