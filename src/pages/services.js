import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import TransitionEffect from "@/components/TransitionEffect";
import CM from "../../public/images/services/cm.png"
import Landing from "../../public/images/services/landingpage.png"
import WebDesing from "../../public/images/services/webdesign.png"
import ContentVideo from "../../public/images/services/content-creator.png"
import Ecommerce from "../../public/images/services/ecommerce.png"
import Mobile from "../../public/images/services/mobile.png"
import { Icon } from '@iconify/react';


const servicesCards = [
  {
    title: "Diseño Web",
    description: "Desde el primer boceto hasta el lanzamiento final, creo experiencias digitales que son intuitivas y conectan de forma genuina con tu público.",
    icono: CM
  },
  {
    title: "Landing Page",
    description: "Desde el primer boceto hasta el lanzamiento final, creo experiencias digitales que son intuitivas y conectan de forma genuina con tu público.",
    icono: Landing
  },
  {
    title: "eCommerce",
    description: "Desde el primer boceto hasta el lanzamiento final, creo experiencias digitales que son intuitivas y conectan de forma genuina con tu público.",
    icono: Ecommerce
  },
  {
    title: "Aplicaciones Mobile",
    description: "Desde el primer boceto hasta el lanzamiento final, creo experiencias digitales que son intuitivas y conectan de forma genuina con tu público.",
    icono: Mobile
  },
  {
    title: "Community Manager",
    description: "Desde el primer boceto hasta el lanzamiento final, creo experiencias digitales que son intuitivas y conectan de forma genuina con tu público.",
    icono: WebDesing
  },
  {
    title: "Content Video Creator",
    description: "Desde el primer boceto hasta el lanzamiento final, creo experiencias digitales que son intuitivas y conectan de forma genuina con tu público.",
    icono: ContentVideo
  }
]

const Services = () => {
  return (
    <>
      <Head>
        <title>Pablo Barrios Developer | Projects Page</title>
        <meta name="description" content="Proyectos realizados" />
      </Head>
      <TransitionEffect />
      <main className='flex w-full flex-col items-center justify-center'>
        <div className="fixed inset-0 z-0 pointer-events-none ">
        </div>
        <Layout className='pt-16'>
          <AnimatedText text='Servicios y soluciones' className='py-16 lg:!text-7xl sm:!text-5xl xs:!text-3xl sm:mb-8 xs:py-2' />
          <div className="w-[40%] grid grid-cols-2 mx-auto 2xl:w-[50%] xl:w-[60%] lg:w-[80%] sm:grid-cols-1">
            {servicesCards.map((services, index) => (
              <div className="max-w-sm rounded overflow-hidden shadow-lg mb-10 mx-2" key={index}>
                <Image className="mx-auto" src={services.icono} alt="" />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 text-center">{services.title}</div>
                  <p className="text-gray-700 text-base">
                    {services.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full flex flex-col justify-center items-center mt-10 mb-14">
            <h2 className="text-4xl w-[20%] mx-auto font-extrabold lg:w-[30%] sm:w-[60%] sm:text-center sm:text-3xl">¿Tenes un proyecto en mente? Manos a la obra!💪</h2>
            <div className="border w-36 h-12 flex flex-row items-center justify-around mt-5 rounded-full bg-gradient-to-r from-green-500 via-violet-400 to-violet-600">
              <a href='https://api.whatsapp.com/send?phone=543765252582' target={"_blank"} className="flex flex-row items-center">
              <span className="text-white mr-1">Hablemos!</span>
              <Icon icon="logos:whatsapp-icon" width={28} />
              </a>
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default Services