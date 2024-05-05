'use client'
import { React, useEffect } from 'react'
import Image from 'next/image'
import code from '@/app/images/code.png'
import view from "@/app/images/view.png"
import AOS from 'aos';
import 'aos/dist/aos.css'

export default function Projectcard({ url, name, desc, gitLink, replLink, available }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    })
  }, [])
  return (
    <div className="list border border-red-300 p-3 m-2 rounded-md shadow-xl space-y-2 mx-auto w-screen md:w-[28rem]" data-aos="fade-right">
      <div className="disc text-sm space-y-3">
        <div className="image w-full">
          <Image src={url} alt=""></Image>
        </div>
        <div className="name">
          <h1 className="text-[16px] text-primary font-semibold ">{name}</h1>
          <p className='text-[12px] text-gray-700'>{desc}</p>
        </div>
      </div>
      <div className="butons text-sm flex gap-3 justify-end ">
        <a target="_blank" href={gitLink}>
          <span
            className="bg-red-100 text-[12px] py-1 px-2 rounded-md shadow-xl flex justify-center items-center gap-2 hover:scale-105 transition-all duration-300 ease-in-out">Show
            Code
            <Image className="w-5" src={code} alt=""></Image>
          </span>

        </a>
        <a href={replLink} target="_blank" >
          <span
            className="bg-red-100 text-[12px] py-1 px-2 rounded-md  shadow-xl flex justify-center items-center gap-2 hover:scale-105 transition-all duration-300 ease-in-out ">View
            <Image className="w-5" src={view} alt=""></Image>
          </span>
        </a>
      </div>
    </div>
  )
}
