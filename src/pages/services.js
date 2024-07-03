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
    description: "Diseño páginas efectivas que captan la atención de tus visitantes desde el primer segundo. Con un enfoque en la conversión, creo experiencias visuales y persuasivas que guían a los usuarios hacia la acción que deseas.",
    icono: Landing
  },
  {
    title: "eCommerce",
    description: "Desarrollo tiendas online funcionales y visualmente atractivas que ofrecen una experiencia de compra fluida y segura. Desde la navegación intuitiva hasta el proceso de pago optimizado, garantizo que cada aspecto de tu ecommerce esté diseñado para maximizar las ventas.",
    icono: Ecommerce
  },
  {
    title: "Aplicaciones Mobile",
    description: "Creo aplicaciones móviles innovadoras que se adaptan a las necesidades de tu negocio y a las expectativas de tus usuarios. Con un diseño centrado en la usabilidad y una tecnología de vanguardia, ofrezco soluciones móviles que impulsan el compromiso y la fidelidad de tus clientes.",
    icono: Mobile
  },
  {
    title: "Community Manager",
    description: "Gestiono y fortalezco la presencia de tu marca en las redes sociales, creando contenido relevante, interactuando con tu audiencia y construyendo una comunidad fiel y comprometida que impulsa el crecimiento de tu negocio.",
    icono: WebDesing
  },
  {
    title: "Creador de Contenido",
    description: "Transformo ideas en contenido atractivo y relevante para tu audiencia. Desde artículos y blogs hasta videos y gráficos, desarrollo materiales que resuenan con tu público y refuerzan la identidad de tu marca.",
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