import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({ name, x, y }) => {
  return (
    <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
           py-3 px-6 shadow-dark cursor-pointer absolute lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:text-dark xs:font-bold'
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  )
}

const Skills = () => {
  return (
    <>
      <h2 className='font-bold text-8xl mt-64 w-full text-center lg:mt-24 md:text-6xl md:mt-32 xs:mt-24'>Tecnologías</h2>
      <div className='w-full h-screen relative flex items-center justify-center rounded-full  lg:h-[80vh] sm:h-[10vh] xs:h-[40vh] 
        
        '>
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
           p-8 shadow-dark cursor-pointer lg:p-6 md:p-4 xs:text-xs xs:p-2' whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name='HTML' x='-22vw' y='1vw'/>
        <Skill name='CSS' x='-1vw' y='-10vw' />
        <Skill name='JavaScript' x='20vw' y='6vw' />
        <Skill name='Canva' x='0vw' y='12vw' />
        <Skill name='Adobe Photoshop' x='-27vw' y='-10vw' />
        <Skill name='MySQL' x='15vw' y='-12vw' />
        <Skill name='Adobe Premiere Pro' x='29vw' y='-5vw' />
        <Skill name='ReactJS' x='0vw' y='-21vw' />
        <Skill name='Next.JS' x='18vw' y='-20vw' />
        <Skill name='TailwindCSS' x='-25vw' y='15vw' />
        <Skill name='Figma' x='-18vw' y='-18vw' />

      </div>
    </>
  )
}

export default Skills