import Layout from '@/components/Layout'
import { LinkArrow } from '@/components/Icons'
import Link from 'next/link'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import TransitionEffect from '@/components/TransitionEffect'
import { motion } from 'framer-motion';
import { GithubIcon, LinkedInIcon, WhatsAppIcon } from '@/components/Icons';

export default function Home() {
  return (
    <>
      <Head>
        <title>Pablo Barrios Developer | Desarrollo y Diseño Web</title>
        <meta name="description" content="Pablo Barrios Developer" />
      </Head>
      <TransitionEffect />
      <main className='flex items-center text-dark w-full h-min-screen '>
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className='w-full h-full object-cover'></div>
        </div>
        <Layout className='pt-0'>
          <div className='w-full h-screen flex items-center  bg-heroBg bg-no-repeat bg-right  lg:flex-col lg:bg-bottom sm:justify-center sm:bg-top'>
            <div className='w-1/2 ml-32 flex flex-col xl:ml-10 lg:ml-0 lg:w-full lg:text-center sm:ml-0 sm:relative sm:top-44'>
              <div className='flex  flex-wrap lg:justify-center sm:hidden'>
                <motion.a href='https://github.com/polsze' target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-6 mr-3 text-light'><GithubIcon className="text-black" /></motion.a>
                <motion.a href='https://api.whatsapp.com/send?phone=543765252582' target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-6 mx-3'><WhatsAppIcon /></motion.a>
                <motion.a href='https://www.linkedin.com/in/pablo-barrios-2ba888231/' target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-6 ml-3'><LinkedInIcon /></motion.a>
              </div>
              <AnimatedText text='¡Bienvenidos al portfolio de Pablo Barrios!' className='z-20 text-black !text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl' />
              <span className='h-6 w-[45%] bg-gradient-to-r from-violet-400 to-violet-200 relative bottom-10 left-1 xl:hidden'></span>

              <p className='my-4 text-lg font-medium text-green-500 md:text-sm sm:text-xs'>
                Aquí encontrarás una selección de mis proyectos más destacados. Navegá y conoceme.
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center sm:justify-center'>
                <Link href="https://api.whatsapp.com/send?phone=543765252582" target={"_blank"} className='flex items-center bg-violet-500 text-light p-2.5 px-6 rounded-lg text-lg font-semibold transition duration-300 ease-linear hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark md:p-2 md:px-4 md:text-base' download={true}>
                  WhatsApp <LinkArrow className={"w-6 ml-1"} />
                </Link>

              </div>
            </div>
          </div>
          {/** SKILLS **/}
          <div className='bg-red-200'>
           <h2></h2>
          </div>
        </Layout>
      </main>
    </>
  )
}