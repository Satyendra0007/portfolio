"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import navLinks from "@/app/data/navLink";

export default function Navbar() {
  const pathName = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("stop-scrolling", isMenuOpen);

    return () => {
      document.body.classList.remove("stop-scrolling");
    };
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathName]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="sticky top-3 z-30 w-full px-4 md:px-6">
      <div
        className={`mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border px-4 py-3 transition-all duration-300 md:px-6 ${
          isScrolled
            ? "border-red-200/70 bg-white/90 shadow-[0_14px_40px_rgba(190,24,24,0.14)] backdrop-blur-xl"
            : "border-white/60 bg-white/72 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur-lg"
        }`}
      >
        <Link href="/" className="flex items-center gap-3">
          <div className="relative hidden md:block">
            <div className="absolute inset-0 rounded-full bg-red-500/20 blur-md" />
            <div className="relative overflow-hidden rounded-full ring-2 ring-red-100">
              <Image
                className="w-11 rounded-full object-cover"
                src="/image.jpg"
                alt="Satyendra profile"
                width={44}
                height={44}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold uppercase tracking-[0.2em] text-slate-900 md:text-base">
              Satyendra
            </span>
            <span className="hidden text-[11px] font-medium uppercase tracking-[0.28em] text-red-600 md:block">
              Full Stack Developer
            </span>
          </div>
        </Link>

        <div className="hidden md:block">
          <nav>
            <ul className="flex items-center gap-2 rounded-full border border-red-100/80 bg-white/75 p-2 shadow-inner shadow-red-100/40">
              {navLinks.map(({ name, link }) => {
                const isActive = pathName === link;

                return (
                  <li key={name}>
                    <Link
                      className={`block rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                        isActive
                          ? "bg-red-600 text-white shadow-lg shadow-red-600/20"
                          : "text-slate-700 hover:bg-red-50 hover:text-red-600"
                      }`}
                      href={link}
                    >
                      {name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <button
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-red-100 bg-white/80 text-red-600 shadow-sm transition hover:bg-red-50 md:hidden"
        >
          {isMenuOpen ? <HiOutlineX size={22} /> : <HiOutlineMenuAlt3 size={22} />}
        </button>
      </div>

      {isMenuOpen && (
        <button
          type="button"
          aria-label="Close navigation menu"
          className="fixed inset-0 z-30 bg-slate-950/30 backdrop-blur-sm md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <div
        id="menu"
        className={`absolute left-4 right-4 top-[calc(100%+0.75rem)] z-40 origin-top rounded-[2rem] border border-red-100/80 bg-white/92 p-4 shadow-[0_24px_60px_rgba(15,23,42,0.18)] backdrop-blur-xl transition-all duration-300 md:hidden ${
          isMenuOpen
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none -translate-y-4 scale-95 opacity-0"
        }`}
      >
        <div className="mb-4 flex items-center gap-3 rounded-2xl bg-gradient-to-r from-red-50 via-white to-red-50 px-3 py-3">
          <Image
            className="h-12 w-12 rounded-full object-cover ring-2 ring-red-100"
            src="/image.jpg"
            alt="Satyendra profile"
            width={48}
            height={48}
          />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-900">
              Satyendra
            </p>
            <p className="text-xs font-medium text-red-600">
              Building modern full-stack experiences
            </p>
          </div>
        </div>

        <nav>
          <ul className="space-y-2">
            {navLinks.map(({ name, link, Icon }) => {
              const isActive = pathName === link;

              return (
                <li key={name}>
                  <Link
                    href={link}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition-all duration-300 ${
                      isActive
                        ? "bg-red-600 text-white shadow-lg shadow-red-600/20"
                        : "bg-red-50/70 text-slate-700 hover:bg-red-100 hover:text-red-700"
                    }`}
                  >
                    <span className={isActive ? "text-white" : "text-red-600"}>
                      {Icon}
                    </span>
                    <span>{name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
