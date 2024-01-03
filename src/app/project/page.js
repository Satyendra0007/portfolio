import React from 'react'
import data from "@/app/data/projectdata.js"
import Projectcard from '../components/Projectcard'

export default function page() {
  return (
    <section className='projects container mx-auto px-4 flex  justify-center items-center gap-3 flex-wrap'>
      {data.map((el, index) => {
        return <Projectcard key={index} url={el.url} name={el.name} desc={el.desc} gitLink={el.gitLink} replLink={el.replLink} available={el.avilable} />
      })}
    </section>
  )
}
