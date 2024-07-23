import { useEffect, useState } from 'react';
import Layout from '@/components/Layout'
import { LinkArrow } from '@/components/Icons'
import Link from 'next/link'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import TransitionEffect from '@/components/TransitionEffect'
import { motion } from 'framer-motion';
import { GithubIcon, LinkedInIcon, WhatsAppIcon } from '@/components/Icons';
import Image from 'next/image'
import OMG from '../../public/images/profile/om3ga.jpg'
import PostOne from '../../public/images/profile/omega-post-1.jpg'
import PostTwo from '../../public/images/profile/omega-post-2.jpg'
import PostThree from '../../public/images/profile/omega-post-3.jpg'
import PostFour from '../../public/images/profile/omega-post-4.jpg'
import PostFive from '../../public/images/profile/omega-post-5.jpg'
import Planta from '../../public/images/profile/planta.png'
import { Icon } from '@iconify/react';



export default function Home() {
  const [isAnimating, setIsAnimating] = useState(false);


  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
      }, 4000); // La duración de la animación en milisegundos
    }, 10000); // Cada 10 segundos

    return () => clearInterval(interval);
  }, []);

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
              <div className='flex flex-wrap lg:justify-center sm:hidden'>
                <motion.a href='https://github.com/polsze' target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-6 mr-3 text-light'><GithubIcon className="text-black" /></motion.a>
                <motion.a href='https://api.whatsapp.com/send?phone=543765252582' target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-6 mx-3'><WhatsAppIcon /></motion.a>
                <motion.a href='https://www.linkedin.com/in/pablo-barrios-2ba888231/' target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-6 ml-3'><LinkedInIcon /></motion.a>
              </div>
              <AnimatedText text='¡Bienvenidos al portfolio de Pablo Barrios!' className='z-20 text-violet-600 !text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl' />
              <span className='h-6 w-[45%] bg-gradient-to-r from-emerald-500 to-white relative bottom-10 left-1 xl:hidden'></span>

              <p className='my-4 text-lg font-medium text-emerald-400 md:text-sm sm:text-xs'>
                Aquí encontrarás una selección de mis proyectos más destacados. Navegá y conoceme.
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center sm:justify-center'>
                <Link href="https://api.whatsapp.com/send?phone=543765252582" target={"_blank"} className='flex items-center bg-violet-500 text-light p-2.5 px-6 rounded-lg text-lg font-semibold transition duration-300 ease-linear hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark md:p-2 md:px-4 md:text-base' download={true}>
                  WhatsApp <LinkArrow className={"w-6 ml-1"} />
                </Link>

              </div>
            </div>

          </div>

          <div className='w-full inline-block relative bottom-36 sm:bottom-32'>
            <Icon icon="line-md:arrow-down-circle" className='m-auto animate-pulse text-emerald-800' width={35} />
          </div>

          <div className='flex flex-row justify-center bg-violet-800 h-auto 2xl:flex-col' data-aos="fade-up">
            <div className='w-[50%] my-auto sm:w-full 2xl:w-full '>
              <h2 className='text-7xl font-extrabold text-white text-center flex flex-col font-oswald xl:text-4xl sm:text-3xl'>
                <span>
                  CREA
                </span>
                <span>
                  <span className='text-lime-300'>-</span>TI<span className={`text-lime-300 inline-block ${isAnimating ? 'animate-animation-flip' : ''}`}>ON</span>
                </span>
              </h2>
            </div>
            <div className='w-[50%] border-l-2 border-lime-300 flex flex-row items-center relative sm:w-full 2xl:m-auto 2xl:border-none'>
              <div className='h-7 w-7 rounded-full animate-bounce bg-lime-300 '></div>
              <span className='w-full border-b-2 border-lime-300 absolute'>
                <div className='w-full flex flex-row justify-evenly'>
                  <h3 className='text-xl font-oswald uppercase text-gray-200 sm:text-lg'>community manager</h3>
                </div>
              </span>
            </div>
            <div className="py-6 bg-white w-full">
              <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 sm:flex-col  md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className=" flex flex-row flex-wrap blur transition-all ease-in-out duration-300 xl:w-full 2xl:w-2/3 2xl:justify-center 2xl:m-auto 2xl:items-center 2xl:blur-none  hover:blur-none">
                    <a href='https://www.instagram.com/p/C8FcPfHJJ0B/?img_index=2' target='_blank'>
                      <Image src={PostOne} alt="image" loading="lazy" width="300" height="300" className='rounded-tl-xl sm:rounded-tr-xl' />
                    </a>
                    <a href='https://www.instagram.com/p/C9Dh_WMpWW6/?img_index=1' target='_blank'>
                      <Image src={OMG} alt="image" loading="lazy" width="300" height="300" className='lg:rounded-tr-xl sm:rounded-none' />
                    </a>
                    <a href='https://www.instagram.com/p/C8NdSuYpkF2/' target='_blank'>
                      <Image src={PostFour} alt="image" loading="lazy" width="300" height="300" className='rounded-tr-xl sm:rounded-none' />
                    </a>
                    <a href='https://www.instagram.com/p/C84T10NOeS0/?img_index=1' target='_blank'>
                      <Image src={PostThree} alt="image" loading="lazy" width="300" height="300" className='rounded-bl-xl lg:rounded-none ' />
                    </a>
                    <a href='https://www.instagram.com/p/C8FcPfHJJ0B/?img_index=1' target='_blank'>
                      <Image src={PostTwo} alt="image" loading="lazy" width="300" height="300" className='lg:rounded-bl-xl sm:rounded-none' />
                    </a>
                    <a href='https://www.instagram.com/p/C9uu5QypVXB/?img_index=1' target='_blank'>
                      <Image src={PostFive} alt="image" loading="lazy" width="300" height="300" className='rounded-br-xl sm:rounded-bl-xl' />
                    </a>

                  </div>
                  <div className="">
                    <h2 className="text-5xl text-gray-900 font-extrabold font-bebas md:text-4xl">Conectando Audiencias</h2>
                    <p className="mt-6 text-gray-600">apasionado por conectar marcas con sus audiencias. A través de la gestión de redes sociales y la creación de contenido atractivo,
                      ayudo a fortalecer la relación entre tu marca y su comunidad. Con una actitud proactiva y ganas de aprender, me enfoco en fomentar
                      el crecimiento y el compromiso de tu audiencia digital. ¡Trabajemos juntos para hacer que tu comunidad florezca y tu marca crezca</p>
                  </div>


                </div>
              </div>
            </div>
          </div>

          <div className='flex flex-row justify-center w-full h-auto bg-violet-800  2xl:flex-col' data-aos="fade-up">

            <div className="py-16 bg-white w-full">
              <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 sm:flex sm:flex-col md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="flex flex-row justify-center space-x-4 blur transition-all ease-in-out duration-300 hover:blur-none 2xl:blur-none sm:flex-col sm:space-x-0">
                    <iframe
                      src="https://www.instagram.com/reel/C8H7sqLsWBK/embed"
                      width="250"
                      height="480"
                      frameBorder="0"
                      scrolling="no"
                      allowtransparency="true"
                      allow="encrypted-media">
                    </iframe>
                    <iframe
                      src="https://www.instagram.com/reel/C8ZZcd8soIi/embed"
                      width="250"
                      height="480"
                      frameBorder="0"
                      scrolling="no"
                      allowtransparency="true"
                      allow="encrypted-media">
                    </iframe>
                    <Image src={Planta} alt="" className='absolute -right-40 overflow-hidden 2xl:-right-2 -z-20' />
                  </div>
                  <div className="">
                    <h2 className="text-5xl text-black font-extrabold font-bebas md:text-4xl ">Creación de Contenido</h2>
                    <p className="mt-6 text-gray-600">apasionado por crear contenido atractivo y significativo.
                      Con habilidades en producción de video, diseño gráfico y redacción creativa, me dedico a dar vida a las historias de tu marca
                      y conectar con tu audiencia de manera auténtica.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='w-[50%] border-r-2 border-lime-300 flex flex-row items-center relative sm:w-full 2xl:m-auto 2xl:border-none first-letter:'>
              <div className='h-7 w-7 rounded-full animate-bounce bg-lime-300 absolute right-0'></div>
              <span className='w-full border-b-2 border-lime-300'>
                <div className='w-full flex flex-row justify-evenly'>
                  <h3 className='text-xl font-oswald uppercase text-gray-200'>content creator</h3>
                </div>
              </span>
            </div>
            <div className='w-[50%] my-auto 2xl:w-full'>
              <h2 className='text-7xl font-extrabold text-white text-center flex flex-col font-oswald xl:text-4xl'>
                <span className=''>
                  CREA
                </span>
                <span>
                  <span className='text-lime-300'>-</span>TI<span className={`text-lime-300 inline-block ${isAnimating ? 'animate-animation-flip' : ''}`}>ON</span>
                </span>
              </h2>
            </div>
          </div>


        </Layout>
      </main>
    </>
  )
}