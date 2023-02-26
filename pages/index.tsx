import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
// import { Disaster } from "../types/disaster";
import disasters from "../data/naturaldisasters.json";

type ListItem = {
  name: string;
  id: string;
  img: string;
}

function hash(string: string): string {
  //set variable hash as 0
  var hash = 0;
  // if the length of the string is 0, return 0
  if (string.length == 0) return hash.toString();
  for (var i = 0; i < string.length; i++) {
    let ch = string.charCodeAt(i);
    hash = ((hash << 5) - hash) + ch;
    hash = hash & hash;
  }

  return hash.toString()
}

type HomeProps = {
  disasters: ListItem[]
}

const List: NextPage<HomeProps> = ({ disasters }) => {
  console.log(disasters)
  return (
    <main className="flex w-full flex-1 flex-col items-center justify-center px-20">
      <div className="grid md:gap-4 grid-cols-3 grid-rows-3">
        {
          disasters.map((disaster) => (
            <Link key={hash(disaster.id)} href={"/disaster/" + disaster.id}>
              <div className="relative w-80 h-80">
                <h2 className="absolute bottom-3 left-3 text-white z-10 text-2xl">{disaster.name}</h2>
                <div className="absolute inset-0 z-0">
                  <div className="h-full w-full bg-gradient-to-b from-transparent from-transparent to-black bg-opacity-75 absolute top-0 z-10 rounded-lg"></div>
             
                  <div className="h-full w-full absolute top-0 card" style={{
                    backgroundImage: `url("${disaster.img}")`
                  }}></div>
                </div>
              </div>
            </Link>
          ))
        }
      </div>
    </main>
  )
}

/*
<div class="relative">
  <h2 className="absolute bottom-0 left-0 text-white z-10">Your h2 element</h2>
  <div className="absolute inset-0 z-0">
    <div className="h-full w-full bg-gradient-to-b from-transparent to-black bg-opacity-75 absolute top-0"></div>
    <div className="h-full w-full absolute top-0" style={{
                      backgroundImage: `url("${disaster.img}")`
                    }}></div>
  </div>
</div>
*/

export const getStaticProps: GetStaticProps = async () => {
  let data: ListItem[] = disasters.map((item) => (
    {
      name: item.name,
      id: item.id,
      img: item.picture
    }));

  return {
    props: {
      disasters: data
    }
  }
}


export default List;