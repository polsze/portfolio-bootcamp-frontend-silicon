import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { GithubIcon, LinkedInIcon, WhatsAppIcon } from '@/components/Icons';

const CustomLink = ({ href, title, className = '' }) => {
	const router = useRouter();

	const handleClick = () => {
		router.push(href)
	}

	return (
		<button href={href} className={`${className} relative group`} onClick={handleClick}>
			{title}
			<span className={`h-[2px] inline-block bg-gradient-to-r from-violet-500 via-violet-300 to-green-300 absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
			 ${router.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
		</button>
	)
}

const CustomMobileLink = ({ href, title, className = '', toggle }) => {
	const router = useRouter();

	const handleClick = () => {
		toggle();
		router.push(href)
	}

	return (
		<button href={href} className={`${className} relative group text-light my-2`} onClick={handleClick}>
			{title}
			<span className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
         ${router.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
		</button>
	)
}

const NavBar = () => {

	const [isOpen, setIsOpen] = useState(false);


	const handleClick = () => {
		setIsOpen(!isOpen)
	}
	return (
		<header
			className='w-full px-32 py-8 font-medium flex items-center border-b justify-between relative z-10 xl:px-16 lg:mb-4 md:px-12 sm:px-8 sm:mb-0'
		>
			<button className='flex-col justify-center items-center hidden lg:flex' onClick={handleClick}>
				<span className={`bg-violet-500  block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
				<span className={`bg-violet-500  block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
				<span className={`bg-violet-500  block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
			</button>

			<div className='w-full flex flex-row justify-between'>
				<div className='lg:w-full lg:flex lg:justify-end'>
					<span className='font-semibold text-lg'>Pablo&nbsp;</span>
					<span className='font-extrabold text-violet-600 text-xl'>Barrios</span>
				</div>
				<nav className=' lg:hidden'>
					<CustomLink href='/' title='Inicio' className='mr-4 text-gradient font-semibold' />
					<CustomLink href='/about' title='Sobre mí' className='mx-4 text-black  font-semibold' />
					<CustomLink href='/projects' title='Proyectos' className='mx-4 text-black font-semibold' />
					<CustomLink href='/services' title='Servicios' className='ml-4 text-black font-semibold' />
				</nav>
				<span className='lg:hidden'>polbarrios835237@gmail.com</span>
			</div>

			{isOpen ? <motion.div initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }} animate={{ scale: 1, opacity: 1 }} className='min-w-[70vw] flex flex-col justify-between z-30 items-center
	   fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 rounded-lg backdrop backdrop-blur-md py-32'>
				<nav className='flex items-center flex-col justify-center'>
					<CustomMobileLink href='/' title='Inicio' className='text-gradient' toggle={handleClick} />
					<CustomMobileLink href='/about' title='Sobre mí' className='' toggle={handleClick} />
					<CustomMobileLink href='/projects' title='Proyectos' className='' toggle={handleClick} />
					<CustomMobileLink href='/services' title='Servicios' className='' toggle={handleClick} />

				</nav>

				<div className='flex flex-wrap lg:justify-center'>
					<motion.a href='https://github.com/polsze' target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-6 mr-3 text-light'><GithubIcon className="text-gray-400" /></motion.a>
					<motion.a href='https://api.whatsapp.com/send?phone=543765252582' target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-6 mx-3'><WhatsAppIcon /></motion.a>
					<motion.a href='https://www.linkedin.com/in/pablo-barrios-2ba888231/' target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-6 ml-3'><LinkedInIcon /></motion.a>
				</div>
			</motion.div>
				: null}

		</header>
	)
}

export default NavBar