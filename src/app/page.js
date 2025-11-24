'use client'
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Image from 'next/image';
import { SiReplit } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import cover from "@/app/img/cover.jpg"
import smiling from "@/app/img/smiling.png"
import pin from "@/app/img/pin.png"
import bseb from "@/app/img/bseb.jpg"
import kyp from "@/app/img/kyp.jpg"
import vksu from "@/app/img/vksulogo.jpg"
import niu from "@/app/img/niulogo.jpg"
import linkedin from "@/app/images/linkedin.webp"
import { FaLinkedin } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css'
import { FaRegFilePdf } from "react-icons/fa6";

export default function Page() {

  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Programmer. ', 'Student. ', 'MERN Developer. '],
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
          <div className="card w-72 md:w-1/2 p-3 pb-12 bg-white shadow-2xl mx-auto -rotate-12 border border-gray-300 relative">
            <Image height={500} width={500} priority={true} quality={100} className="w-8 absolute z-10 top-0 right-0" src={pin} alt="" />
            <Image height={500} width={500} priority={true} quality={100} className="w-8 absolute z-10 bottom-2 left-2" src={smiling} alt="" />
            <Image height={500} width={500} priority={true} quality={100} className="" src={cover} alt="" />
          </div>

        </div>
        <div className="bottom flex justify-center items-center flex-col leading-5 md:w-1/2 md:text-lg" data-aos="fade-right">
          <div className="text-xl font-semibold md:2xl">Welcome !</div>
          <p>Hello, I am <span
            className="font-bold text-xl  tracking-wider bg-gradient-to-r from-rose-600 to-purple-600  text-transparent bg-clip-text">Satyendra.</span>
          </p>

          <div className="terminal border w-80 md:w-96 border-gray-200 my-1 shadow-md rounded-lg">
            <div className="head flex gap-1 p-1.5 bg-red-100 ">
              <div className="circle h-3 w-3 rounded-full bg-red-600"></div>
              <div className="circle h-3 w-3 rounded-full bg-green-500"></div>
              <div className="circle h-3 w-3 rounded-full bg-yellow-400"></div>
            </div>
            <div className="content p-2 flex text-[16px]">
              <div className="left space-x-1 ">
                <span className='text-red-500'>info</span>
                <span>&gt;</span>
                <span className='text-green-600'>$</span>
              </div>
              <div className="right">
                <span className='ml-3'>I am a <span ref={el} /></span>
              </div>
            </div>
          </div>
          <div className="buttons space-x-3 mt-3">
            <button id="Github" className="py-2 px-3 text-sm rounded-lg shadow-xl ring-1 ring-red-300 md:hover:scale-105 hover:bg-red-200 transition-all duration-300 ease-in-out " onClick={() => { window.location.href = "https://github.com/Satyendra0007" }}>
              <span className="flex gap-1 justify-center items-center">
                <p>GitHub</p>
                <FaGithub />
              </span>
            </button>
            <button id="linkedin" className="py-2 px-3 text-sm rounded-lg shadow-xl ring-1 ring-red-300 md:hover:scale-105 hover:bg-red-200 transition-all duration-300 ease-in-out" onClick={() => { window.location.href = "https://www.linkedin.com/in/satyendra-kumar-36163a2a9" }}>
              <span className="flex gap-1 justify-center items-center">
                <p>LinkedIn</p>
                <FaLinkedin color="blue" />
              </span>
            </button>

            <button id="resume" className="py-2 px-3 text-sm rounded-lg shadow-xl ring-1 ring-red-300 md:hover:scale-105 hover:bg-red-200 transition-all duration-300 ease-in-out" onClick={() => { window.location.href = "https://drive.google.com/file/d/1QRzi0FVNEkPf0bOJRphv5ivbv6jmqrxR/view?usp=sharing" }}>
              <span className="flex gap-1 justify-center items-center">
                <p>Resume</p>
                {/* <FaLinkedin color="blue" /> */}
                <FaRegFilePdf color='red' />
              </span>
            </button>
          </div>
        </div>
      </section >

      <section className="education p-10 ">
        <h1 className="text-center my-4 text-2xl font-bold ">Education</h1>
        <div className="flex flex-wrap justify-center items-center gap-5">
          <div
            className="box h-48 w-48  border-2 border-red-600 rounded-full flex flex-col justify-center items-center shadow-2xl text-sm relative " data-aos="fade-up">
            <div className="icon p-1 bg-white rounded-full absolute z-10 -top-2 right-6 border border-gray-600">
              <Image height={500} width={500} priority={true} quality={100} className="w-10  rounded-full " src={bseb} alt="" />
            </div>
            <h1 className="font-semi-bold text-2xl text-primary">10TH</h1>
            <p>BORD : BSEB</p>
            <p>YEAR : 2018</p>
            <p>MARKS : 65%</p>
          </div>
          <div
            className="box h-48 w-48  border-2 border-red-600 rounded-full flex flex-col justify-center items-center shadow-2xl text-sm" data-aos="fade-up">
            <div className="icon p-1 bg-white rounded-full absolute z-10 -top-2 right-6 border border-gray-600">
              <Image height={500} width={500} priority={true} quality={100} className="w-10  rounded-full " src={kyp} alt="" />
            </div>
            <h1 className="font-semi-bold text-2xl text-primary ">KYP</h1>
            <p>YEAR : 2019</p>
            <p>MARKS</p>
            <pre>CIT  CLS  CSS</pre>
            <pre>77%  87%  76%</pre>
          </div>
          <div
            className="box h-48 w-48  border-2 border-red-600 rounded-full flex flex-col justify-center items-center shadow-2xl text-sm" data-aos="fade-up">
            <div className="icon p-1 bg-white rounded-full absolute z-10 -top-2 right-6 border border-gray-600">
              <Image height={500} width={500} priority={true} quality={100} className="w-10  rounded-full " src={bseb} alt="" />
            </div>
            <h1 className="font-semi-bold text-2xl text-primary ">12TH</h1>
            <p className="text-[10px]">SCIENCE</p>
            <p>BORD : BSEB</p>
            <p>YEAR : 2018-2020</p>
            <p>MARKS : 71%</p>
          </div>
          <div
            className="box h-48 w-48  border-2 border-red-600 rounded-full flex flex-col justify-center items-center shadow-2xl text-sm" data-aos="fade-up">
            <div className="icon p-1 bg-white rounded-full absolute z-10 -top-2 right-6 border border-gray-600">
              <Image height={500} width={500} priority={true} quality={100} className="w-10  rounded-full " src={vksu} alt="" />
            </div>
            <h1 className="font-semi-bold text-2xl text-primary ">BCA</h1>
            <p>UNIVERSITY : VKSU</p>
            <p>YEAR : 2020 - 2023</p>
            <p>MARKS : 71%</p>
          </div>
          <div
            className="box h-48 w-48  border-2 border-red-600 rounded-full flex flex-col justify-center items-center shadow-2xl text-sm" data-aos="fade-up">
            <div className="icon p-1 bg-white rounded-full absolute z-10 -top-2 right-6 border border-gray-600">
              <Image height={500} width={500} priority={true} quality={100} className="w-10  rounded-full " src={niu} alt="" />
            </div>
            <h1 className="font-semi-bold text-2xl text-primary ">MCA</h1>
            <p>UNIVERSITY : NIU</p>
            <p>CGPA : 9.02</p>
            <p>PURSUING</p>
          </div>
        </div>
      </section>
    </>
  )
}
