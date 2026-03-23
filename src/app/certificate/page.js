import React from 'react';
import { FaAward } from 'react-icons/fa6';
import CertificateCard from '../components/CertificateCard';
import certificateData from '../data/certificatedata';

export default function page() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden px-3 py-8 md:min-h-[74vh] md:px-6 md:py-16">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,_#fff7f7_0%,_#ffffff_45%,_#fff1f2_100%)]" />
      <div className="absolute left-1/2 top-0 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-red-200/40 blur-3xl" />

      <div className="mx-auto max-w-6xl">
        <div className="rounded-[28px] border border-red-100/80 bg-white/75 p-4 shadow-[0_20px_80px_-40px_rgba(15,23,42,0.35)] backdrop-blur sm:p-5 md:rounded-[32px] md:p-10">
          <div className="flex flex-col gap-5 border-b border-red-100 pb-6 md:flex-row md:items-end md:justify-between md:pb-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-red-600">
                <FaAward />
                Certification Highlights
              </div>
              <h1 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                Certifications and achievements that reflect continuous learning.
              </h1>
              <p className="mt-4 max-w-xl text-xs leading-6 text-slate-600 md:text-sm">
                A selection of certifications, academic recognitions, and event accomplishments that strengthen my technical foundation and practical experience.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 text-left sm:gap-3">
              <div className="rounded-2xl border border-slate-200 bg-white px-3 py-3 shadow-sm md:px-4 md:py-4">
                <div className="text-xl font-semibold text-slate-900">{certificateData.length}</div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-slate-400">Credentials</div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white px-3 py-3 shadow-sm md:px-4 md:py-4">
                <div className="text-xl font-semibold text-slate-900">02</div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-slate-400">Issuers</div>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:mt-8 md:gap-5 md:grid-cols-2">
            {certificateData.map((certificate, index) => {
              return (
                <CertificateCard
                  key={index}
                  index={index}
                  featured={index === 0}
                  {...certificate}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
