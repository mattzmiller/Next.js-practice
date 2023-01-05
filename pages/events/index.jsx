import Image from "next/image";
import Link from "next/link";

export default function EventsPage({ data }) {
  return (
    <div>
      <h1>Events Page</h1>
      <div>
        {data.map((event) => {
          return (
            <Link key={event.id} href={`/events/${event.id}`} passHref={true}>
                <Image
                  width={200}
                  height={100}
                  src={event.image}
                  alt={event.title}
                />
                <h2>{event.title}</h2>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const { events_categories } = await import("/data/data.json");

  return {
    props: {
      data: events_categories,
    },
  };
}
