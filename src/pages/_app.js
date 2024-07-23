import '@/styles/globals.css'
import { Montserrat } from 'next/font/google'
import Footer from '@/components/Footer'
import NavBar from '../components/NavBar'
import Head from 'next/head'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont"
})


export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const router = useRouter();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${montserrat.variable} font-mont w-full min-h-screen`}>
        <NavBar />
        <AnimatePresence mode="wait">
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </main>
    </>
  )

}