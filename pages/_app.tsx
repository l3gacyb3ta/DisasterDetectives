import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from '../components/navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return <div className="w-full background">
    <NavBar />
    <Component {...pageProps} />
  </div>
}

export default MyApp
