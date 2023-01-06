import Link from "next/link";
import Image from "next/image";
import styles from "../../../styles/Home.module.css"

export default function HomePage({ data }) {
  return (
    <main className={styles.main}>
      {data.map((event) => {
        return (
          <Link key={event.id} href={`/events/${event.id}`}>
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
  );
}
