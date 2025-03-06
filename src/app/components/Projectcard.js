'use client'
import { React, useEffect } from 'react'
import Image from 'next/image'
import code from '@/app/images/code.png'
import view from "@/app/images/view.png"
import AOS from 'aos';
import 'aos/dist/aos.css'

export default function Projectcard({ url, name, desc, gitLink, link }) {
  useEffect(() => {
    // AOS.init({
    //   duration: 800,
    //   once: false,
    // })
  }, [])
  return (
    <div className="list border border-red-300 p-3 m-2 rounded-md shadow-xl space-y-2 mx-auto w-80 hover:shadow-2xl h-80" data-aos="fade-right">
      <div className="disc space-y-3">
        <div className="image w-full">
          <Image src={url} alt=""></Image>
        </div>
        <div className="name">
          <h1 className="text-[16px] md:text-sm text-primary font-semibold ">{name}</h1>
          <p className='text-xs mt-2 text-gray-700 text-justify'>{desc}</p>
        </div>
      </div>
      <div className="butons text-sm flex gap-3 absolute bottom-3 right-4">
        <a target="_blank" href={gitLink}>
          <span
            className="bg-red-100 text-[12px] py-1.5 px-2.5 md:py-1 md:px-2 rounded-sm shadow-xl flex justify-center items-center gap-1 hover:scale-105 transition-all duration-300 ease-in-out">
            Code
            <Image className="w-5" src={code} alt=""></Image>
          </span>

        </a>
        <a href={link} target="_blank" >
          <span
            className="bg-red-100 text-[12px] py-1.5 px-2.5  md:py-1 md:px-2 rounded-sm  shadow-xl flex justify-center items-center gap-1 hover:scale-105 transition-all duration-300 ease-in-out "> Live Preview
            <Image className="w-5" src={view} alt=""></Image>
          </span>
        </a>
      </div>
    </div>
  )
}
