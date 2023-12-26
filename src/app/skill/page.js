import React from 'react'
import Skillcard from '@/app/components/Skillcard';
import html from "@/app/images/html.png"
import css from "@/app/images/css.png"
import js from "@/app/images/javascript.png"
import react from "@/app/images/react-js.png"
import nextjs from "@/app/images/next.png"
import bootstrap from "@/app/images/bootstrap.png"
import mongodb from "@/app/images/mongodb.png"
import tailwind from "@/app/images/tailwind-css.png"
import android from "@/app/images/android.png"
import c from "@/app/images/c.png"
import java from "@/app/images/java.png"
import cpp from "@/app/images/c++.png"


export default function page() {
  const webImageArray = [html, css, js, react, nextjs, bootstrap, mongodb, tailwind];
  const webText = ["html", "css", "javascript", "react", "nextjs", "bootstrap", "mongodb", "tailwind"];
  const pgImageArray = [c, cpp, java, android];
  const pgText = ["c", "c++", "java", "android"];

  return (
    <div>
      <section id="skills" className="skills min-h-[72vh] ">
        <h1 className="text-center my-4 text-2xl font-bold">Skills</h1>
        <div className="webDevlopment my-8">
          <h1 className="text-center my-5 text-sm font-semibold">Web Devlopment</h1>
          <div className="flex  justify-center items-center gap-5 flex-wrap">
            {webImageArray.map((src, index) => {
              return <Skillcard key={index} image={src} text={webText[index]} />
            })}
          </div>
        </div>
        <div className="programing-Language my-8">
          <h1 className="text-center my-5 text-sm font-semibold">Programing Languages</h1>
          <div className="flex  justify-center items-center gap-5 flex-wrap">
            {pgImageArray.map((src, index) => {
              return <Skillcard key={index} image={src} text={pgText[index]} />
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
