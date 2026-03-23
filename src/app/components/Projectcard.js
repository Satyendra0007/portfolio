'use client'

import React from 'react'
import Image from 'next/image'
import { FaArrowUpRightFromSquare, FaCodeBranch, FaLayerGroup } from 'react-icons/fa6'

export default function Projectcard({ url, name, desc, gitLink, link, stack = [], status }) {
  return (
    <article
      className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/90 shadow-[0_22px_70px_rgba(15,23,42,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_85px_rgba(220,38,38,0.16)]"
      data-aos="fade-up"
    >
      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-red-300 to-transparent" />

      <div className="relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br from-slate-100 via-white to-red-50 p-2">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.9),_transparent_55%)]" />
        <Image
          src={url}
          alt={`${name} project preview`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.03]"
        />

        <div className="absolute left-4 top-4 z-20 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/90 px-3 py-1 text-[10px] font-semibold text-slate-700 shadow-sm backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          {status}
        </div>
      </div>

      <div className="flex flex-1 flex-col space-y-3 p-4">
        <div className="border-b border-slate-100 pb-3">
          <h2 className="text-base font-black tracking-tight text-slate-900">{name}</h2>
        </div>

        <p className="flex-1 text-xs leading-5 text-slate-600">{desc}</p>

        <div className="flex flex-wrap gap-2">
          {stack.map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-1 rounded-full border border-red-100 bg-red-50 px-3 py-1 text-[10px] font-semibold text-red-700"
            >
              <FaLayerGroup className="text-[10px]" />
              {item}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between gap-3 border-t border-slate-100 pt-3">
          <a
            target="_blank"
            rel="noreferrer"
            href={gitLink}
            aria-label={`View ${name} source code`}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-[11px] font-semibold text-slate-700 transition-all duration-300 hover:border-red-300 hover:bg-red-50 hover:text-red-600"
          >
            <FaCodeBranch />
            Source Code
          </a>

          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open live preview of ${name}`}
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-[11px] font-semibold text-white shadow-lg transition-all duration-300 hover:bg-red-600"
          >
            Live Preview
            <FaArrowUpRightFromSquare />
          </a>
        </div>
      </div>
    </article>
  )
}
