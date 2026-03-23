import Image from 'next/image'

export default function Skillcard({ image, text, index = 0 }) {
  return (
    <div
      className="group relative overflow-hidden rounded-2xl border border-stone-200 bg-white/90 p-4 shadow-[0_16px_40px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(0,0,0,0.12)]"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent" />

      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-50 via-white to-orange-50 ring-1 ring-rose-100">
          <Image
            priority
            quality={100}
            className="h-9 w-9 object-contain transition-transform duration-300 group-hover:scale-110"
            src={image}
            height={36}
            width={36}
            alt={text}
          />
        </div>

        <div className="flex-1">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-stone-400">
            {String(index + 1).padStart(2, '0')}
          </p>
          <p className="mt-1 text-sm font-semibold uppercase tracking-[0.16em] text-stone-800">
            {text}
          </p>
        </div>
      </div>
    </div>
  )
}
