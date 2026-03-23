import { FaArrowRight, FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function CertificateCard({ icon, name, location, link, index, featured = false }) {
  return (
    <article
      className={`group relative overflow-hidden rounded-[28px] border border-white/70 bg-white/90 p-5 shadow-[0_18px_60px_-28px_rgba(15,23,42,0.35)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_-30px_rgba(220,38,38,0.35)] ${
        featured ? "md:col-span-2 md:p-8" : ""
      }`}
      data-aos="fade-right"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(254,202,202,0.75),_transparent_38%),radial-gradient(circle_at_bottom_left,_rgba(254,242,242,0.95),_transparent_45%)]" />

      <div className="relative flex h-full flex-col justify-between gap-6 md:gap-8">
        <div className="flex items-start justify-between gap-3 md:gap-4">
          <div className="flex min-w-0 items-start gap-3 md:gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-red-600 via-rose-500 to-orange-400 text-xl text-white shadow-lg shadow-red-200 md:h-14 md:w-14 md:text-2xl">
              {icon}
            </div>

            <div className="min-w-0 space-y-2">
              <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-500">
                <span className="rounded-full border border-red-100 bg-red-50 px-3 py-1 text-[10px] text-red-600">
                  Verified
                </span>
                <span>Certificate {String(index + 1).padStart(2, "0")}</span>
              </div>

              <div>
                <h2 className={`text-slate-900 ${featured ? "text-xl md:text-2xl" : "text-base md:text-lg"} font-semibold tracking-tight`}>
                  {name}
                </h2>
                <p className="mt-2 text-xs leading-6 text-slate-600 md:text-sm">
                  Issued by {location}
                </p>
              </div>
            </div>
          </div>

          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open certificate for ${name}`}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-sm text-slate-700 transition-all duration-300 hover:border-red-200 hover:bg-red-50 hover:text-red-600 md:h-11 md:w-11 md:text-base"
          >
            <FaArrowUpRightFromSquare />
          </a>
        </div>

        <div className="relative flex flex-col gap-3 border-t border-slate-200/80 pt-3 sm:flex-row sm:items-center sm:justify-between md:pt-4">
          <div className="text-[11px] uppercase tracking-[0.28em] text-slate-400">
            Achievement archive
          </div>

          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            aria-label={`View certificate details for ${name}`}
            className="inline-flex items-center gap-2 self-start text-xs font-semibold text-slate-900 transition-all duration-300 group-hover:text-red-600 md:text-sm"
          >
            View credential
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </article>
  );
}
