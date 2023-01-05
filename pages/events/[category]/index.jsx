import Image from "next/image";
import Link from "next/link";

export default function EventsCatPage({ data, pageName }) {
    const pageNameUpper = pageName.split('');
    pageNameUpper.forEach(char => {
        if(pageNameUpper.indexOf(char) === 0 || pageNameUpper[pageNameUpper.indexOf(char) - 1] === "-") {
           pageNameUpper[pageNameUpper.indexOf(char)] = char.toUpperCase();
        }
        return pageNameUpper;
    })

  return (
    <div>
      <h1>Events in {pageNameUpper}</h1>
      {data.map((event) => {
        return (
          <Link key={event.id} href={`/events/${event.city}/${event.id}`}>
            <Image
              width={300}
              height={300}
              alt={event.title}
              src={event.image}
            />
            <h2>{event.title}</h2>
            <p>{event.description}</p>
          </Link>
        );
      })}
    </div>
  );
}

export async function getStaticPaths() {
  const { events_categories } = await import("/data/data.json");
  const allPaths = events_categories.map((event) => {
    return {
      params: {
        category: event.id,
      },
    };
  });
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.category;
  const { allEvents } = await import("/data/data.json");

  const data = allEvents.filter((event) => event.city === id);
  console.log(data);
  return {
    props: {
      data: data,
      pageName: id,
    },
  };
}
