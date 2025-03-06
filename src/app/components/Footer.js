import React from 'react'
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="pt-5">
      <div className="flex justify-center items-center gap-10 py-4 bg-red-100">
        <div className="bg-white/80 p-2.5 rounded-full shadow-xl hover:bg-red-100 cursor-pointer ">
          <a href="https://github.com/Satyendra0007" target="_blank">
            <FaGithub size={23} color='red' />
          </a>
        </div>
        <div className="bg-white/80 p-2.5 rounded-full shadow-xl hover:bg-red-100 cursor-pointer ">
          <a href="https://www.linkedin.com/in/satyendra-kumar-36163a2a9" target="_blank">
            <FaLinkedin size={23} color='red' />
          </a>
        </div>
        <div className="bg-white/80 p-2.5 rounded-full shadow-xl hover:bg-red-100 cursor-pointer ">
          <a href="mailto:skchnadrawansi03@gmail.com" target="_blank">
            <BiLogoGmail size={23} color='red' />
          </a>
        </div>
        <div className="bg-white/80 p-2.5 rounded-full shadow-xl hover:bg-red-100 cursor-pointer ">
          <a href="https://www.instagram.com/satyendra0.3?igsh=bW43dDdsendsa3Zn" target="_blank">
            <FaInstagram size={23} color='red' />
          </a>
        </div>

      </div>
    </footer>

  )
}
