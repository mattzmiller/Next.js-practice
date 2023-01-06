import Image from "next/image";

export default function EventPage({ data }) {
    console.log(data);
  return (
    <div>
        <Image src={data.image} width={1000} height={500} alt={data.title}/>
        <h1>{data.title}</h1>
        <p>{data.description}</p>

    </div>
  )
}

export async function getStaticPaths() {
  const { allEvents } = await import("/data/data.json");

  const allPaths = allEvents.map((path) => {
    return {
      params: {
        category: path.city,
        id: path.id,
      },
    };
  });
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const { allEvents } = await import("/data/data.json");
  const eventData = allEvents.find((event) => event.id === id);

  return {
    props: {
      data: eventData,
    },
  };
}
