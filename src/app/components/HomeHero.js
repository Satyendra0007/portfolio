'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Typed from 'typed.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaArrowRight, FaGithub, FaLinkedin, FaRegFilePdf } from 'react-icons/fa6';
import cover from '@/app/img/cover.jpg';
import smiling from '@/app/img/smiling.png';
import pin from '@/app/img/pin.png';

const socialLinks = [
  {
    href: 'https://github.com/Satyendra0007',
    label: 'GitHub',
    icon: <FaGithub />,
  },
  {
    href: 'https://www.linkedin.com/in/satyendra-kumar-36163a2a9',
    label: 'LinkedIn',
    icon: <FaLinkedin className="text-blue-600" />,
  },
  {
    href: 'https://drive.google.com/file/d/1oVkGAkTK0U9a01dNUfW0QNXPusiLh_PH/view?usp=sharing',
    label: 'Resume',
    icon: <FaRegFilePdf className="text-red-600" />,
  },
];

const quickStats = ['MERN Stack', 'Next.js', 'MCA'];

export default function HomeHero() {
  const typedElementRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElementRef.current, {
      strings: ['Programmer.', 'Student.', 'MERN Developer.'],
      typeSpeed: 50,
    });

    AOS.init({
      duration: 800,
      once: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="intro relative overflow-hidden px-4 py-8 md:px-8 md:py-14">
      <div className="absolute inset-x-0 top-0 -z-10 h-[30rem] bg-[radial-gradient(circle_at_top_left,_rgba(220,38,38,0.18),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(251,146,60,0.16),_transparent_28%),linear-gradient(180deg,_rgba(255,255,255,1),_rgba(254,242,242,0.85),_rgba(255,255,255,1))]" />
      <div className="absolute left-8 top-20 -z-10 hidden h-32 w-32 rounded-full bg-red-200/40 blur-3xl md:block" />
      <div className="absolute right-10 top-28 -z-10 hidden h-44 w-44 rounded-full bg-orange-200/40 blur-3xl md:block" />

      <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-8 md:flex-row md:justify-between">
        <div
          className="bottom flex w-full flex-col items-center text-center md:w-[52%] md:items-start md:text-left"
          data-aos="fade-right"
        >
          <span className="rounded-full border border-red-200 bg-white/90 px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-red-600 shadow-sm md:text-[11px]">
            Portfolio 2026
          </span>

          <h1 className="mt-3 text-[1.65rem] font-black leading-tight text-slate-900 md:text-[2.15rem] md:leading-[1.05] lg:text-[2.8rem]">
            Building clean
            <span className="block bg-gradient-to-r from-red-600 via-orange-500 to-red-500 bg-clip-text text-transparent">
              web experiences.
            </span>
          </h1>

          <p className="mt-2.5 text-[13px] font-medium text-slate-700 md:text-[13px] lg:text-[15px]">
            Hello, I am <span className="text-red-600">Satyendra Kumar</span>, a web developer building modern and
            practical applications.
          </p>

          <div className="terminal mt-3.5 w-full max-w-[18.5rem] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md md:max-w-[20rem]">
            <div className="head flex gap-1 border-b border-red-100 bg-red-50 px-3 py-2">
              <div className="h-2.5 w-2.5 rounded-full bg-red-500"></div>
              <div className="h-2.5 w-2.5 rounded-full bg-yellow-400"></div>
              <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
            </div>
            <div className="content flex items-center gap-2 px-3 py-2.5 text-[12px] text-slate-700 md:text-[13px]">
              <span className="font-semibold text-red-500">dev@portfolio</span>
              <span className="text-slate-400">&gt;</span>
              <span className="text-green-600">$</span>
              <span>
                <span className="mr-1">I am a</span>
                <span ref={typedElementRef} className="font-semibold text-red-600" />
              </span>
            </div>
          </div>

          <p className="mt-3.5 max-w-md text-[12px] leading-5 text-slate-600 md:text-[12px] lg:text-[14px]">
            Focused on MERN stack and Next.js with attention to clean UI and reliable functionality.
          </p>

          <div className="mt-4 flex flex-wrap justify-center gap-2.5 md:justify-start">
            <a
              href="/project"
              className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-4 py-2 text-[12px] font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-600 md:text-[13px]"
            >
              View Projects
              <FaArrowRight />
            </a>
            <a
              href="https://drive.google.com/file/d/1oVkGAkTK0U9a01dNUfW0QNXPusiLh_PH/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-red-200 bg-white px-4 py-2 text-[12px] font-semibold text-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-red-400 hover:bg-red-50 md:text-[13px]"
            >
              Resume
              <FaRegFilePdf className="text-red-600" />
            </a>
          </div>

          <div className="mt-4 flex flex-wrap justify-center gap-2 md:justify-start">
            {quickStats.map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-200 bg-white/90 px-3 py-1.5 text-[10px] font-semibold text-slate-700 shadow-sm md:text-[11px]"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap justify-center gap-2 md:justify-start">
            {socialLinks.map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-red-100 bg-white/90 px-3 py-1.5 text-[12px] shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:border-red-300 hover:bg-red-50 md:text-[13px]"
              >
                <span className="flex items-center justify-center gap-2">
                  <span>{label}</span>
                  {icon}
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="top my-2 w-full md:my-0 md:flex md:w-[42%] md:justify-center" data-aos="fade-left">
          <div className="relative mx-auto w-[15.5rem] md:w-[17.5rem] lg:w-[19rem]">
            <div className="card relative -rotate-12 border border-gray-300 bg-white p-3 pb-10 shadow-2xl">
              <Image
                height={500}
                width={500}
                priority
                quality={100}
                className="absolute right-0 top-0 z-10 w-8"
                src={pin}
                alt="Pinned photo decoration"
              />
              <Image
                height={500}
                width={500}
                priority
                quality={100}
                className="absolute bottom-2 left-2 z-10 w-8"
                src={smiling}
                alt="Smiley sticker decoration"
              />
              <Image
                height={700}
                width={700}
                priority
                quality={100}
                className="h-auto w-full object-cover"
                src={cover}
                alt="Portrait of Satyendra"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
