"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiUser } from "react-icons/ci";
import navLinks from "@/app/data/navLink"

export default function Navbar() {
  const pathName = usePathname();

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
      <div className="flex justify-between px-5 py-4 bg-red-100/60 shadow-xl sticky top-0 left-0 right-0  backdrop-blur-sm z-10">
        <div id="hamburger" className="md:hidden">
          <div className="line w-7 h-[3px] bg-primary m-1.5"></div>
          <div className="line w-5 h-[3px] bg-primary m-1.5"></div>
          <div className="line w-6 h-[3px] bg-primary m-1.5"></div>
        </div>

        <div className="logo">
          <h1 className="text-primary font-bold text-xl font-mono">
            SATYENDRA
          </h1>
        </div>
        {/* --------------------Nav link for md and lg devices-------------------- */}
        <div className="navLink hidden my-auto md:block ">
          <nav>
            <ul className="flex gap-7 justify-center items-center text-sm">
              {navLinks.map(({ name, link }) =>
                <li key={name} className={`${pathName === link ? "bg-red-600 text-white font-normal" : ""} font-semibold text-primary cursor-pointer hover:underline underline-offset-4 py-1 px-2 rounded-md`}>
                  <Link className=" " href={link}>
                    {name}
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>

        {/* --------------------Nav link for sm devices-------------------- */}
        <div
          id="menu"
          className="absolute top-0 -left-52  bg-red-100/80 w-52 h-screen border shadow-xl backdrop-blur-sm transition-all duration-700 ease-in-out md:hidden"
        >
          <div className="logo flex justify-center border-b border-b-red-400 py-4 ">
            <CiUser size={"4rem"} color="red" />
          </div>
          <nav>
            <ul className="">
              {navLinks.map(({ name, link, Icon }) =>
                <li key={name} className={`${pathName === link ? "bg-red-200  font-normal" : ""} rounded-md`}>
                  <Link
                    href={link}
                    className="text-xs py-4 px-2 cursor-pointer text-primary font-semibold border-b border-red-200 flex gap-3 items-center  "
                  >
                    {Icon}
                    {name}
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div >
    </>
  );
}
