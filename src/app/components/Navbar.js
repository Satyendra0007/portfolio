"use client";
import Link from "next/link";
import React from "react";
import { CiUser, CiHome } from "react-icons/ci";
import { SiAboutdotme } from "react-icons/si";
import { GiSkills } from "react-icons/gi";
import { GoProject } from "react-icons/go";

export default function Navbar() {
  if (typeof window !== "undefined") {
    document.getElementById("hamburger").addEventListener("click", (e) => {
      e.stopPropagation();
      document.getElementById("menu").style.left = "0px";
      document.body.classList.add("stop-scrolling");
    });

    document.onclick = (e) => {
      document.getElementById("menu").style.left = "-208px";
      document.body.classList.remove("stop-scrolling");
    };
  }
  return (
    <>
      <div className="flex justify-between px-5 py-4 bg-white/60 shadow-xl sticky top-0 left-0 right-0  backdrop-blur-sm">
        <div id="hamburger" className="md:hidden">
          <div className="line w-7 h-[3px] bg-primary m-1.5"></div>
          <div className="line w-5 h-[3px] bg-primary m-1.5"></div>
          <div className="line w-6 h-[3px] bg-primary m-1.5"></div>
        </div>

        <div className="logo">
          <h1 className="text-primary font-bold text-xl font-mono">
            Portfolio
          </h1>
        </div>
        {/* --------------------Nav link for md and lg devices-------------------- */}
        <div className="navLink hidden my-auto md:block ">
          <nav>
            <ul className="flex gap-7 justify-center items-center text-sm">
              <li className=" font-semibold text-primary cursor-pointer hover:underline underline-offset-4 under ">
                <Link className=" " href="/">
                  {" "}
                  Home
                </Link>
              </li>
              <li className=" font-semibold text-primary cursor-pointer hover:underline underline-offset-4 under ">
                <Link className=" " href="/skill">
                  Skills
                </Link>
              </li>
              <li className=" font-semibold text-primary cursor-pointer hover:underline underline-offset-4 under ">
                <Link className=" " href="/about">
                  About
                </Link>
              </li>
              <li className=" font-semibold text-primary cursor-pointer hover:underline underline-offset-4 under ">
                <Link className=" " href="/project">
                  Projects
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* --------------------Nav link for sm devices-------------------- */}
        <div
          id="menu"
          className="absolute top-0 -left-52  bg-white/70 w-52 h-screen border shadow-xl backdrop-blur-md transition-all duration-700 ease-in-out md:hidden"
        >
          <div className="logo flex justify-center border-b border-b-red-400 py-4 ">
            <CiUser size={"4rem"} color="red" />
          </div>
          <nav>
            <ul className="">
              <li>
                <Link
                  href="/"
                  className="text-xs py-4 px-2 cursor-pointer text-primary font-semibold border-b border-red-200 flex gap-3 items-center  "
                >
                  <CiHome size={"1.2rem"} />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/skill"
                  className="text-xs py-4 px-2 cursor-pointer text-primary font-semibold border-b border-red-200 flex gap-3 items-center  "
                >
                  <GiSkills size={"1.2rem"} />
                  Skill
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-xs py-4 px-2 cursor-pointer text-primary font-semibold border-b border-red-200 flex gap-3 items-center  "
                >
                  <SiAboutdotme size={"1.2rem"} />
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/project"
                  className="text-xs py-4 px-2 cursor-pointer text-primary font-semibold border-b border-red-200 flex gap-3 items-center  "
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
