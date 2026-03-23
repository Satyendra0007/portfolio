import React from 'react'
import { FaArrowTrendUp, FaWandMagicSparkles } from 'react-icons/fa6'
import data from "@/app/data/projectdata.js"
import Projectcard from '../components/Projectcard'

export default function page() {
  return (
    <section className='relative overflow-hidden px-4 py-10 md:px-8 md:py-14'>
      <div className="absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_top_left,_rgba(220,38,38,0.18),_transparent_32%),radial-gradient(circle_at_top_right,_rgba(251,146,60,0.14),_transparent_30%),linear-gradient(180deg,_rgba(255,255,255,1),_rgba(255,247,237,0.9),_rgba(255,255,255,1))]" />
      <div className="absolute left-0 top-28 -z-10 h-48 w-48 rounded-full bg-red-100/70 blur-3xl" />
      <div className="absolute right-0 top-40 -z-10 h-56 w-56 rounded-full bg-orange-100/70 blur-3xl" />

      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-6 rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-[0_20px_70px_rgba(15,23,42,0.08)] backdrop-blur md:flex-row md:items-end md:justify-between md:p-8">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-red-600">
              <FaWandMagicSparkles />
              Selected Work
            </span>

            <h1 className="mt-4 text-2xl font-black tracking-tight text-slate-900 md:text-4xl">
              Projects that show both
              <span className="block bg-gradient-to-r from-red-600 via-orange-500 to-red-500 bg-clip-text text-transparent">
                product thinking and build quality.
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-xs leading-6 text-slate-600 md:text-sm">
              This section now highlights your work like a portfolio showcase instead of a basic card list:
              stronger hierarchy, better scan-ability, and a more polished first impression.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:w-fit">
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-950 px-5 py-4 text-white shadow-lg">
              <p className="text-xl font-black">{data.length}+</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/70">Projects</p>
            </div>

            <div className="rounded-[1.5rem] border border-red-100 bg-red-50 px-5 py-4 text-slate-900 shadow-sm">
              <p className="inline-flex items-center gap-2 text-xl font-black">
                <FaArrowTrendUp className="text-red-500" />
                MERN
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-slate-500">Core Stack</p>
            </div>
          </div>
        </div>

        <div className='grid gap-6 sm:grid-cols-2 xl:grid-cols-3'>
          {data.map((el, index) => {
            return (
              <Projectcard
                key={index}
                url={el.url}
                name={el.name}
                desc={el.desc}
                gitLink={el.gitLink}
                link={el.link}
                stack={el.stack}
                status={el.status}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
