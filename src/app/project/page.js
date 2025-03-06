import React from 'react'
import data from "@/app/data/projectdata.js"
import Projectcard from '../components/Projectcard'

export default function page() {
  return (
    <section className='projects container mx-auto px-4 py-8 flex  justify-center items-center gap-3 flex-wrap md:max-w-5xl'>
      {data.map((el, index) => {
        return <Projectcard key={index} url={el.url} name={el.name} desc={el.desc} gitLink={el.gitLink} link={el.link} available={el.avilable} />
      })}
    </section>
  )
}
