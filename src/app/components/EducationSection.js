import Image from 'next/image';
import educationData from '@/app/data/educationData';

export default function EducationSection() {
  return (
    <section className="education relative overflow-hidden px-5 py-14 md:px-10 md:py-20">
      <div className="absolute left-1/2 top-56 hidden h-[calc(100%-18rem)] w-px -translate-x-1/2 bg-gradient-to-b from-red-200 via-red-500 to-red-200 md:block" />

      <div className="mx-auto mb-10 max-w-2xl text-center">
        <p className="mb-3 inline-flex rounded-full border border-red-200 bg-red-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-red-600">
          Academic Journey
        </p>
        <h1 className="text-3xl font-bold text-slate-900 md:text-[2.15rem] lg:text-4xl">Education</h1>
        <p className="mt-3 text-sm leading-6 text-slate-600 md:text-base">
          A quick walkthrough of the milestones that shaped my learning path, from fundamentals to advanced computer applications.
        </p>
      </div>

      <div className="mx-auto flex max-w-5xl flex-col gap-6 md:gap-7">
        {educationData.map(({ image, imageAlt, title, degree, institution, duration, result, highlights }, index) => (
          <div
            key={title}
            className={`relative md:flex md:items-center ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
            data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
          >
            <div className="absolute left-1/2 top-1/2 z-10 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white bg-red-600 shadow-lg md:block" />

            <div className="group relative w-full rounded-[2rem] border border-red-100 bg-gradient-to-br from-white via-red-50/40 to-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.10)] transition-transform duration-300 hover:-translate-y-1 md:w-[calc(50%-2rem)] md:p-4 lg:w-[calc(50%-2.25rem)] lg:p-5">
              <div className="absolute inset-x-6 top-0 h-1 rounded-full bg-gradient-to-r from-red-500 via-orange-400 to-red-500" />

              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-red-500 md:text-[9px] lg:text-xs">{title}</p>
                  <h2 className="mt-2 text-lg font-bold text-slate-900 md:text-[1rem] lg:text-[1.35rem]">{degree}</h2>
                  <p className="mt-2 text-sm font-medium text-slate-600 md:text-[12px] lg:text-sm">{institution}</p>
                </div>

                <div className="icon shrink-0 rounded-2xl border border-red-100 bg-white p-2 shadow-md">
                  <Image
                    height={500}
                    width={500}
                    priority
                    quality={100}
                    className="h-14 w-14 rounded-xl object-cover md:h-12 md:w-12 lg:h-14 lg:w-14"
                    src={image}
                    alt={imageAlt}
                  />
                </div>
              </div>

              <div className="mb-4 flex flex-wrap gap-2 text-sm md:text-[11px] lg:gap-3 lg:text-sm">
                <span className="rounded-full bg-slate-900 px-3 py-1 font-medium text-white">
                  {duration}
                </span>
                <span className="rounded-full bg-red-100 px-3 py-1 font-semibold text-red-700">
                  Score: {result}
                </span>
              </div>

              <div className="grid gap-2.5 md:grid-cols-2">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 text-sm text-slate-600 shadow-sm md:px-3 md:py-2.5 md:text-[11px] lg:px-4 lg:py-3 lg:text-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
