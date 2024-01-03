import React from 'react'
import { SiReplit } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

export default function Footer() {
  return (
    <footer className="pt-5">
      <div className="flex justify-center  items-center gap-10 py-5 bg-red-100">
        <a href="https://github.com/Satyendra0007" target="_blank">
          <FaGithub size={25} color='red' />
        </a>
        <a href="https://replit.com/@Satyendra03" target="_blank">
          <SiReplit size={25} color='red' />
        </a>
        <a href="mailto:skchnadrawansi03@gmail.com" target="_blank">
          <BiLogoGmail size={25} color='red' />
        </a>

      </div>
    </footer>

  )
}
