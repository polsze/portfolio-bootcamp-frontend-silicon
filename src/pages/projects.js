import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";
import { Icon } from '@iconify/react';

  import Project1 from "../../public/images/projects/haush-guitars.webp";
  import Project2 from "../../public/images/projects/infochalten-hero.webp";
  import Project3 from "../../public/images/projects/serviceoficial-caba.webp";
  import Project4 from "../../public/images/projects/letalis-store.webp";
  import Project5 from "../../public/images/projects/banner-om3ga.webp";
  import Project6 from "../../public/images/projects/angora-banner.webp";
  import Project7 from "../../public/images/projects/eflow.webp";
 
const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"></div>
      <Link href={link} target="_blank" className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full">
        <FramerImage src={img} alt={title} className="w-full h-auto" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }} priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl xs:text-base">{type}</span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-4xl font-bold sm:text-sm">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark sm:text-sm">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10"><GithubIcon /></Link>
          <Link href={link} target="_blank" className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base">Visitá la página</Link>
        </div>
      </div>
    </article>
  );
};

// Lista de proyectos
const projectsData = [
  {
    title: "Haush Guitars",
    img: Project1,
    summary: "Página web para un Luthier profesional de Buenos Aires que trabaja con artistas de renombre en el ambiente del Rock Nacional. En proceso de incorporación de E-Commerce.",
    link: "https://www.haushguitars.com",
    github: "https://github.com/polsze/Haush-Guitars",
    type: "Proyecto destacado"
  },
  {
    title: "Info Chaltén",
    img: Project2,
    summary: "Desarrollé una aplicación Low Code y una landing page para turistas y residentes de El Chaltén, brindando información detallada y servicios útiles para explorar sus atractivos y facilitar la vida cotidiana.",
    link: "https://www.infochalten.com",
    github: "https://github.com/polsze/infochalten",
    type: "Proyecto destacado"
  },
  {
    title: "Service Oficial CABA",
    img: Project3,
    summary: "Desarrollé una landing page para una empresa de servicio técnico de heladeras en Capital Federal, Buenos Aires,",
    link: "https://serviceoficial-caba.com.ar/",
    github: "https://github.com/polsze/serviceoficial-caba",
    type: "Proyecto destacado"
  },
  {
    title: "Letalis Store",
    img: Project4,
    summary: "Desarrollé una tienda online, enfocándome en el desarrollo del frontend, con una interfaz intuitiva y atractiva para los usuarios. El backend será integrado posteriormente, una vez que se incorporen los métodos de pago, lo que permitirá una experiencia de compra completa y segura.",
    link: "https://letalis-store.com",
    github: "https://github.com/polsze/letalis-store",
    type: "Proyecto destacado"
  },
  {
    title: "OM3GA | Comunidad Gamer",
    img: Project5,
    summary: "Community Manager y Creador de Contenido para la comunidad gaming de OM3GA, fomentando su crecimiento y engagement.",
    link: "https://instagram.com/om3gacs",
    github: "https://github.com/polsze/",
    type: "Proyecto destacado"
  },
  {
    title: "EFlow Chat",
    img: Project7,
    summary: "Desarrollé un sistema de administración de usuarios para una empresa de envíos masivos de mensajes en WhatsApp, optimizando la gestión y control de las interacciones.",
    link: "https://eflowchat.com/",
    github: "https://github.com/polsze/",
    type: "Proyecto destacado"
  },
  {
    title: "Angora Indumentaria",
    img: Project6,
    summary: "E-Commerce de indumentaria masculina para una empresa radicada en la ciudad de Posadas, Misiones.",
    link: "https://angoraindumentaria.com/",
    github: "https://github.com/polsze/",
    type: "Proyecto destacado"
  }

];

const Projects = () => {
  return (
    <>
      <Head>
        <title>Pablo Barrios Developer | Projects Page</title>
        <meta name="description" content="Proyectos realizados" />
      </Head>
      <TransitionEffect />
      <main className="w-full flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Proyectos realizados" className="py-12 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl" />
          
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            {projectsData.map((project, index) => (
              <div key={index} className="col-span-12 px-6">
                <FeaturedProject {...project} />
              </div>
            ))}
          </div>

          <div className="w-full flex flex-col justify-center items-center mt-10 mb-14">
            <h2 className="text-4xl w-[20%] mx-auto font-extrabold lg:w-[30%] sm:w-[60%] sm:text-center sm:text-3xl">¿Tenes un proyecto en mente? Manos a la obra!💪</h2>
            <div className="border w-36 h-12 flex flex-row items-center justify-around mt-5 rounded-full bg-gradient-to-r from-green-500 via-violet-400 to-violet-600">
              <a href='https://api.whatsapp.com/send?phone=543765252582' target="_blank" className="flex flex-row items-center">
                <span className="text-white mr-1">Hablemos!</span>
                <Icon icon="logos:whatsapp-icon" width={28} />
              </a>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
