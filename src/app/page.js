'use client'
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Image from 'next/image';
import { SiReplit } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import cover from "@/app/img/cover.jpg"
import smiling from "@/app/img/smiling.png"
import pin from "@/app/img/pin.png"
import AOS from 'aos';
import 'aos/dist/aos.css'

export default function Page() {

  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Programmer. ', 'Student. ', 'Front-End Developer. '],
      typeSpeed: 50,
    });

    AOS.init({
      duration: 800,
      once: false,
    })

    return () => {
      typed.destroy();
    };

  }, []);

  return (
    <>
      <section className=" intro  mx-auto py-5 md:py-20 md:flex md:flex-row-reverse md:justify-around md:items-center" >
        <div className="top md:w-1/2 my-10 md:my-0 " data-aos="fade-left">
          {/* <div className="card md:w-1/2 p-[1px] bg-red-600 shadow-2xl rounded-full mx-auto">
            <Image height={500} width={500} priority={true} quality={100} className="rounded-full" src={cover} alt="" />
          </div> */}

          <div className="card w-72 md:w-1/2 p-3 pb-12 bg-white shadow-2xl mx-auto -rotate-12 border border-gray-300 relative">
            <Image height={500} width={500} priority={true} quality={100} className="w-8 absolute z-10 top-0 right-0" src={pin} alt="" />
            <Image height={500} width={500} priority={true} quality={100} className="w-8 absolute z-10 bottom-2 right-2" src={smiling} alt="" />
            <Image height={500} width={500} priority={true} quality={100} className="" src={cover} alt="" />
          </div>

        </div>
        <div className="bottom flex justify-center items-center flex-col leading-5 md:w-1/2 md:text-lg" data-aos="fade-right">
          <div className="text-xl font-semibold md:2xl">Welcome !</div>
          <p>Hello, I am <span
            className="font-bold text-xl  tracking-wider bg-gradient-to-r from-rose-600 to-purple-600  text-transparent bg-clip-text">Satyendra.</span>
          </p>
          <div className=""> I am a <span ref={el} /></div>
          <div className="buttons space-x-3 mt-3">
            <button id="Github" className="py-2 px-3 text-sm rounded-lg shadow-xl ring-1 ring-red-300 md:hover:scale-105 hover:bg-red-200 transition-all duration-300 ease-in-out " onClick={() => { window.location.href = "https://github.com/Satyendra0007" }}>
              <span className="flex gap-1 justify-center items-center">
                <p>GitHub</p>
                <FaGithub />
              </span>
            </button>
            <button id="Replit" className="py-2 px-3 text-sm rounded-lg shadow-xl ring-1 ring-red-300 md:hover:scale-105 hover:bg-red-200 transition-all duration-300 ease-in-out" onClick={() => { window.location.href = "https://replit.com/@Satyendra03" }}>
              <span className="flex gap-1 justify-center items-center">
                <p>Replit</p>
                <SiReplit color="red" />
              </span>
            </button>
          </div>
        </div>
      </section>

      <section className="education p-10 ">
        <h1 className="text-center my-4 text-2xl font-bold ">Education</h1>
        <div className="flex flex-wrap justify-center items-center gap-5">
          <div
            className="box h-48 w-48  border-2 border-red-600 rounded-full flex flex-col justify-center items-center shadow-2xl text-sm " data-aos="fade-up">
            <h1 className="font-semi-bold text-2xl text-primary">10TH</h1>
            <p>BORD : BSEB</p>
            <p>YEAR : 2018</p>
            <p>MARKS : 65%</p>
          </div>
          <div
            className="box h-48 w-48  border-2 border-red-600 rounded-full flex flex-col justify-center items-center shadow-2xl text-sm" data-aos="fade-up">
            <h1 className="font-semi-bold text-2xl text-primary ">KYP</h1>
            <p>YEAR : 2019</p>
            <p>MARKS</p>
            <pre>CIT  CLS  CSS</pre>
            <pre>77%  87%  76%</pre>
          </div>
          <div
            className="box h-48 w-48  border-2 border-red-600 rounded-full flex flex-col justify-center items-center shadow-2xl text-sm" data-aos="fade-up">
            <h1 className="font-semi-bold text-2xl text-primary ">12TH</h1>
            <p className="text-[10px]">SCIENCE</p>
            <p>BORD : BSEB</p>
            <p>YEAR : 2018-2020</p>
            <p>MARKS : 71%</p>
          </div>
          <div
            className="box h-48 w-48  border-2 border-red-600 rounded-full flex flex-col justify-center items-center shadow-2xl text-sm" data-aos="fade-up">
            <h1 className="font-semi-bold text-2xl text-primary ">BCA</h1>
            <p>UNIVERSITY : VKSU</p>
            <p>YEAR : 2020 - 2023</p>
            <p>MARKS : 71%</p>
          </div>
        </div>
      </section>
    </>
  )
}
