import Link from 'next/link'
import React from 'react'
import Layout from './Layout'
import { WhatsAppIcon } from './Icons'
import { motion } from 'framer-motion'


const Footer = () => {
  return (
    <footer className='p-8 px-28 w-full border-t-2 border-solid border-dark
    font-mediun text-lg sm:text-base xs:text-center
    '>
      <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-4 sm:flex-col'>
        <span className=' text-black relative z-40 pl-2 sm:pl-0'>{new Date().getFullYear()} &copy; Posadas, Argentina.</span>
        <div className='text-black flex items-center sm:flex-col sm:mt-4'>
        <div className='lg:w-full lg:flex lg:justify-end'>
					<span className='font-semibold text-lg'>Pablo&nbsp;</span>
					<span className='font-extrabold text-emerald-600 text-xl'>Barrios</span>
				</div>
          <div className='flex items-center justify-center flex-wrap'>
            <motion.a href='https://api.whatsapp.com/send?phone=543765252582' target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className=' w-6 mx-3 bg-green-600 rounded-full'><WhatsAppIcon /></motion.a>
          </div>
        </div>

      </Layout>
    </footer>
  )
}

export default Footer