'use client'
import { React, useEffect } from 'react'
import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css'

export default function Skillcard({ image, text }) {
  useEffect(() => {
    // AOS.init({
    //   duration: 800,
    //   once: false,
    // })
  }, [])

  return (
    <div className="card flex justify-around items-center w-72 py-2 h-16 border border-gray-300 shadow-xl " data-aos="fade-right" >
      <Image priority quality={100} className='w-12' src={image} height={20} width={20} alt='' />
      <p className='text-base font-semibold text-primary'>{text.toUpperCase()}</p>
    </div>

  )
}
