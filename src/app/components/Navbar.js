'use client'
import Link from "next/link";
import React from "react";
import { CiUser, CiHome } from "react-icons/ci";
import { SiAboutdotme } from "react-icons/si";
import { GiSkills } from "react-icons/gi";
import { GoProject } from "react-icons/go";

export default function Navbar() {

  if (typeof window !== "undefined") {
    document.getElementById("hamburger").addEventListener("click", (e) => {
      e.stopPropagation()
      document.getElementById('menu').style.left = "0px"
      document.body.classList.add('stop-scrolling');
    })

    document.onclick = (e) => {
      document.getElementById('menu').style.left = "-192px"
      document.body.classList.remove('stop-scrolling');
    }
  }
  return (
    <>
      <div className="flex justify-between px-2 py-3 bg-white/80 shadow-xl sticky top-0 left-0 right-0 ">

        <div id="hamburger" >
          <div className="line w-7 h-[3px] bg-primary m-1.5"></div>
          <div className="line w-5 h-[3px] bg-primary m-1.5"></div>
          <div className="line w-6 h-[3px] bg-primary m-1.5"></div>
        </div>

        <div className="logo">
          <h1 className="text-primary font-bold text-xl font-mono">Portfolio</h1>
        </div>

        {/* --------------------Nav link for sm devices-------------------- */}
        <div id="menu" className="absolute top-0 -left-48  bg-white/80  w-48 h-screen border shadow-xl transition-all duration-700 ease-in-out">
          <div className="logo flex justify-center border-b border-b-red-400 py-4 ">
            <CiUser size={"4rem"} color="red" />
          </div>
          <nav>
            <ul className="">
              <li>
                <Link
                  href="/"
                  className="text-xs py-4 px-2 cursor-pointer text-primary font-semibold border-b border-red-300 flex gap-3 items-center  "
                >
                  <CiHome size={"1.2rem"} />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/skill"
                  className="text-xs py-4 px-2 cursor-pointer text-primary font-semibold border-b border-red-300 flex gap-3 items-center  "
                >
                  <GiSkills size={"1.2rem"} />
                  Skill
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-xs py-4 px-2 cursor-pointer text-primary font-semibold border-b border-red-300 flex gap-3 items-center  "
                >
                  <SiAboutdotme size={"1.2rem"} />
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/project"
                  className="text-xs py-4 px-2 cursor-pointer text-primary font-semibold border-b border-red-300 flex gap-3 items-center  "
                >
                  <GoProject size={"1.2rem"} />
                  Projects
                </Link>
              </li>
            </ul>
          </nav>
        </div>

      </div>
    </>
  );
}
