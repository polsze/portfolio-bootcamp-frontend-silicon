import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Project1 from "../../public/images/projects/haush.webp";
import Project2 from "../../public/images/projects/yarara.webp";
import Project3 from "../../public/images/projects/serviceoficial-caba.webp";
import Project4 from "../../public/images/projects/infochalten-hero.webp";
import Project5 from "../../public/images/projects/eflow.png";
import Project6 from "../../public/images/projects/suka.webp";
import Project7 from "../../public/images/projects/om3ga.png";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";
import { Icon } from '@iconify/react';


const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 
    relative lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
     "
    >
      <div className="absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"></div>
      <Link
        href={link}
        target={"_blank"}
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target={"_blank"}
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark sm:text-sm">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target={"_blank"} className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href="https://www.haushguitars.com"
            target={"_blank"}
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base"
          >
            Visitá la página
          </Link>
        </div>
      </div>
    </article>
  );
};

const FeaturedProject2 = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between rounded-br-2xl rounded-3xl border border-solid border-dark
     bg-light shadow-2xl p-12 relative lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
     "
    >
      <div className="absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl"></div>
      <Link
        href={link}
        target={"_blank"}
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target={"_blank"}
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link
            href="https://www.github.com/polsze"
            target={"_blank"}
            className="w-10"
          >
            <GithubIcon />
          </Link>
          <a
            href="https://yararaenaccion.vercel.app/"
            target={"_blank"}
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base"
          >
            Visitá la página
          </a>
        </div>
      </div>
    </article>
  );
};

const FeaturedProject3 = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between rounded-br-2xl rounded-3xl border border-solid border-dark
     bg-light shadow-2xl p-12 relative lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
     "
    >
      <div className="absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl"></div>
      <Link
        href={link}
        target={"_blank"}
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target={"_blank"}
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link
            href="https://www.github.com/polsze"
            target={"_blank"}
            className="w-10"
          >
            <GithubIcon />
          </Link>
          <a
            href="https://serviceoficial-caba.com.ar/"
            target={"_blank"}
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base"
          >
            Visitá la página
          </a>
        </div>
      </div>
    </article>
  );
};

const FeaturedProject4 = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between rounded-br-2xl rounded-3xl border border-solid border-dark
     bg-light shadow-2xl p-12 relative lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
     "
    >
      <div className="absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl"></div>
      <Link
        href={link}
        target={"_blank"}
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target={"_blank"}
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target={"_blank"} className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href="https://infochalten.glide.page/"
            target={"_blank"}
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base"
          >
            Visitá la APP
          </Link>
          <Link
            href="https://infochalten.com/"
            target={"_blank"}
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base"
          >
            Visitá la página web de la APP
          </Link>
        </div>
      </div>
    </article>
  );
};

const FeaturedProject5 = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between rounded-br-2xl rounded-3xl border border-solid border-dark
     bg-light shadow-2xl p-12 relative lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
     "
    >
      <div className="absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl"></div>
      <Link
        href={link}
        target={"_blank"}
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target={"_blank"}
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target={"_blank"} className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href="https://eflowchat.com/"
            target={"_blank"}
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base"
          >
            Visitá la página
          </Link>
        </div>
      </div>
    </article>
  );
};

const FeaturedProject6 = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between rounded-br-2xl rounded-3xl border border-solid border-dark
     bg-light shadow-2xl p-12 relative lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
     "
    >
      <div className="absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl"></div>
      <Link
        href={link}
        target={"_blank"}
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target={"_blank"}
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target={"_blank"} className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href="https://gruposuka.com.ar/"
            target={"_blank"}
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base"
          >
            Visitá la página
          </Link>
          <Link
            href=""
            target={"_blank"}
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base"
          >
            Visitá la APP de Suka
          </Link>
        </div>
      </div>
    </article>
  );
};

const FeaturedProject7 = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between rounded-br-2xl rounded-3xl border border-solid border-dark
     bg-light shadow-2xl p-12 relative lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
     "
    >
      <div className="absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl"></div>
      <Link
        href={link}
        target={"_blank"}
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target={"_blank"}
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target={"_blank"} className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href="https://www.instagram.com/Om3gaCs/"
            target={"_blank"}
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base"
          >
            Visitá el Instagram de Om3ga
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Pablo Barrios Developer | Projects Page</title>
        <meta name="description" content="Proyectos realizados" />
      </Head>
      <TransitionEffect />
      <main className="w-full flex flex-col items-center justify-center">
        <div className="fixed inset-0 z-0 pointer-events-none"></div>
        <Layout className="pt-16">
          <AnimatedText
            text="Proyectos realizados"
            className="py-12 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">

            <div className="col-span-12 px-6">
              <FeaturedProject4
                title="Info Chaltén"
                img={Project4}
                summary="Desarrollo de una Aplicación No Code y Landing Page para Turistas y Residentes Locales, ofreciendo información detallada y servicios útiles para explorar y disfrutar tanto de los destinos turísticos como de la vida cotidiana en El Chaltén"
                link="https://infochalten.com/"
                github="https://github.com/polsze/"
                type="Proyecto Destacado"
              />
            </div>
            <div className="col-span-12 px-6">
              <FeaturedProject
                title="Haush Guitars"
                img={Project1}
                summary="Página web para un Luthier profesional de Buenos Aires que trabaja con artistas de renombre en el ambiente del Rock Nacional. En proceso de incorporación de E-Commerce."
                link="https://www.haushguitars.com"
                github="https://github.com/polsze/Haush-Guitars"
                type="Proyecto destacado"
              />
            </div>

            <div className="col-span-12 px-6">
              <FeaturedProject3
                title="Service Oficial CABA"
                img={Project3}
                summary="Landing page para un Servicio Técnico de Heladeras de Capital Federal, Buenos Aires."
                link="https://serviceoficial-caba.com.ar/"
                github="https://github.com/polsze/serviceoficial-caba"
                type="Proyecto finalizado"
              />
            </div>

            <div className="col-span-12 px-6">
              <FeaturedProject7
                title="OM3GA"
                img={Project7}
                summary="Community Manager y Creador de Contenido para la comunidad gaming de OM3GA"
                link="https://www.instagram.com/Om3gaCs/"
                github="https://github.com/polsze/"
                type="Trabajando actualmente"
              />
            </div>

            <div className="col-span-12 px-6">
              <FeaturedProject5
                title="Eflowchat – CRM Chat MultiAgente WhatsApp"
                img={Project5}
                summary="Sistema de administración de usuarios para una empresa de envíos masivos de mensajes en Whatsapp."
                link="https://eflowchat.com/"
                github="https://github.com/polsze/"
                type="Proyecto finalizado"
              />
            </div>

            <div className="col-span-12 px-6">
              <FeaturedProject6
                title="Suka, Soluciones Industriales"
                img={Project6}
                summary="Sistema de administración del personal de la empresa de soluciones industriales, Suka."
                link="https://gruposuka.com.ar/"
                github="https://github.com/polsze/"
                type="Proyecto en desarrollo"
              />
            </div>

            <div className="col-span-12 px-6">
              <FeaturedProject2
                title="Yarará en Acción"
                img={Project2}
                summary="Página web para una asociación orientada en nuestra fauna y su protección, dedicada al rescate y la liberación de animales silvestres."
                link="https://yararaenaccion.vercel.app/"
                github="github.com/polsze/yarara"
                type="Proyecto en Desarrollo"
              />
            </div>
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
        <div className="absolute right-32 inline-block w-96 md:hidden 2xl:hidden "></div>
      </main>
    </>
  );
};

export default projects;
