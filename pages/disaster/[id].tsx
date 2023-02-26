import disasters from "../../data/naturaldisasters.json"
import { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import { Disaster } from "../../types/disaster";
import { hash } from "../../lib/hash";

interface DisasterProps {
  disaster: Disaster;
}
//Add title and colors....
const Disaster: NextPage<DisasterProps> = ({ disaster }) => {
  return (
    <main className={"flex w-2/3 flex-1 flex-col items-center justify-center px-20 " + disaster.id} >
      <h1 className="text-4xl font-bold m-10 underline">
        {disaster.name}
      </h1>
      <img src={disaster.picture} className="rounded-md drop-shadow-md" />
      <h2 className="text-3xl font-bold float-left m-4">
        Description
      </h2>
      <p className="text-left m-4">
        {
          disaster.description
        }
      </p>

      <h2 className="text-3xl font-bold m-4">
        Signs You Are Experiencing This
      </h2>

      <ul className="list-disc float-left">
        {
          disaster.signs.split("|").map(
            (item) => (
              <li key={hash(item)} className="text-left m-2">
                {item}
              </li>
            )
          )
        }
      </ul>

      <h2 className="text-3xl font-bold m-4">
        What Can You Do?
      </h2>

      <ul className="list-disc float-left">
        {
          disaster.action.split("|").map(
            (item) => (
              <li key={hash(item)} className="text-left m-2">
                {item}
              </li>
            )
          )
        }
      </ul>
    </main>
  )
}


export const getStaticPaths: GetStaticPaths = async () => {
  const paths = disasters.map((post) => ({
    params: { id: post.id },
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params != null && params.id != null) {
    let disaster = disasters.find((disaster) => {
      return disaster.id === params.id
    });
    return { props: { disaster } }
  }

  else {
    return {
      props: {
        id: "error",
        name: "ERROR",
        picture: "/",
        description: "ERROR"
      }
    }
  }
}

export default Disaster;