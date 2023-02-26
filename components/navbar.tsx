import Link from 'next/link';

export default function NavBar() {
  return <div className="w-full border-solid border-b-2">
    <Link href="/"><h1 className="text-3xl cusor-pointer ml-2">DisasterDetectives</h1></Link>
  </div>
}