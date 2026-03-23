import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCode, FaLaptopCode, FaLightbulb, FaTrophy } from "react-icons/fa6";
import dhoni from "@/app/images/dhoni.jpeg";
import harry from "@/app/images/harry.jpeg";

const strengths = [
  {
    title: "Problem Solving",
    description:
      "I enjoy breaking complex ideas into simple steps and turning them into practical features.",
    icon: <FaLightbulb className="text-lg text-red-600" />,
  },
  {
    title: "Full-Stack Growth",
    description:
      "I am steadily improving across frontend, backend, and the engineering basics behind reliable products.",
    icon: <FaLaptopCode className="text-lg text-red-600" />,
  },
  {
    title: "Consistency",
    description:
      "I value discipline, regular learning, and building a strong foundation through hands-on projects.",
    icon: <FaCode className="text-lg text-red-600" />,
  },
];

const inspirations = [
  {
    name: "MS Dhoni",
    image: dhoni,
    description:
      "He inspires me through calm leadership, composure under pressure, and disciplined decision-making.",
  },
  {
    name: "Harish (CodeWithHarry)",
    image: harry,
    description:
      "His teaching style made programming more approachable and helped me build confidence while learning.",
  },
];

export default function Page() {
  return (
    <main className="relative overflow-hidden bg-gradient-to-b from-red-50 via-white to-white">
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-red-200/40 blur-3xl" />
      <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-orange-100/60 blur-3xl" />

      <section className="relative mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <div className="inline-flex rounded-full border border-red-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-red-600 shadow-sm">
              About Me
            </div>

            <div className="space-y-4">
              <h1 className="max-w-2xl text-4xl font-black leading-tight text-slate-900 md:text-5xl">
                Building thoughtful web experiences with a developer&apos;s mindset.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
                I&apos;m Satyendra, an MCA student at Noida International University who enjoys
                turning ideas into clean, useful, and reliable digital products. I care about
                learning deeply, improving consistently, and creating work that feels practical in
                the real world.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="rounded-full border border-red-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                MCA Student
              </span>
              <span className="rounded-full border border-red-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                MERN Developer
              </span>
              <span className="rounded-full border border-red-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                Project Focused Learner
              </span>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/project"
                className="inline-flex items-center gap-2 rounded-full bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-red-600/20 transition duration-300 hover:-translate-y-0.5 hover:bg-red-700"
              >
                View Projects
                <FaArrowRight />
              </Link>
              <Link
                href="/skill"
                className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition duration-300 hover:border-red-300 hover:text-red-600"
              >
                Explore Skills
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-red-100 via-white to-orange-100 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 shadow-[0_30px_80px_rgba(15,23,42,0.22)]">
              <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900 px-5 py-3">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-500" />
                </div>
                <span className="text-xs font-medium uppercase tracking-[0.3em] text-slate-400">
                  satyendra.profile
                </span>
              </div>

              <div className="space-y-4 p-5 font-mono text-sm leading-7 text-slate-200 md:p-7">
                <div className="flex gap-3">
                  <span className="text-red-400">info</span>
                  <span className="text-slate-500">&gt;</span>
                  <span className="text-green-400">$</span>
                  <span className="text-slate-300">whoami</span>
                </div>
                <p className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-slate-300">
                  Full-stack learner focused on building practical and user-friendly experiences.
                </p>

                <div className="flex gap-3">
                  <span className="text-red-400">info</span>
                  <span className="text-slate-500">&gt;</span>
                  <span className="text-green-400">$</span>
                  <span className="text-slate-300">current-focus</span>
                </div>
                <p className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-slate-300">
                  Web development, problem solving, data structures, and stronger software
                  engineering fundamentals.
                </p>

                <div className="flex gap-3">
                  <span className="text-red-400">info</span>
                  <span className="text-slate-500">&gt;</span>
                  <span className="text-green-400">$</span>
                  <span className="text-slate-300">mission</span>
                </div>
                <p className="rounded-2xl border border-red-500/20 bg-gradient-to-r from-red-500/10 to-orange-400/10 px-4 py-3 text-slate-200">
                  Keep growing into a developer who builds reliable products with clarity,
                  consistency, and purpose.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-4 pb-6 md:px-6 md:pb-10">
        <div className="grid gap-6 rounded-[2rem] border border-red-100 bg-white/85 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl md:grid-cols-3 md:p-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-red-600">
              My Journey
            </p>
            <h2 className="mt-3 text-2xl font-bold text-slate-900">Learning by building.</h2>
          </div>
          <div className="space-y-4 text-sm leading-7 text-slate-600 md:col-span-2 md:text-base">
            <p>
              My journey in tech has been shaped by curiosity, self-learning, and practice. I like
              understanding how things work, then applying that knowledge by creating projects that
              solve real problems in a simple way.
            </p>
            <p>
              As I continue my MCA, I&apos;m focused on growing as a full-stack developer with
              stronger fundamentals, better product thinking, and cleaner execution from idea to
              implementation.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-12">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-red-600">
              What Drives Me
            </p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">The qualities I bring to my work</h2>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {strengths.map(({ title, description, icon }) => (
            <article
              key={title}
              className="rounded-[1.75rem] border border-red-100 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_50px_rgba(220,38,38,0.10)]"
            >
              <div className="mb-4 inline-flex rounded-2xl bg-red-50 p-3">{icon}</div>
              <h3 className="text-xl font-bold text-slate-900">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-12">
        <div className="rounded-[2rem] border border-red-100 bg-gradient-to-r from-white via-red-50/60 to-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.07)] md:p-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="rounded-2xl bg-red-100 p-3 text-red-600">
              <FaTrophy />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-red-600">
                Inspiration
              </p>
              <h2 className="text-2xl font-bold text-slate-900">People who motivate my journey</h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {inspirations.map(({ name, image, description }) => (
              <article
                key={name}
                className="flex flex-col gap-5 rounded-[1.75rem] border border-white bg-white p-5 shadow-sm md:flex-row md:items-center"
              >
                <div className="overflow-hidden rounded-[1.5rem] bg-red-50 md:w-44">
                  <Image
                    src={image}
                    alt={name}
                    className="h-64 w-full object-cover md:h-44"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900">{name}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 pt-8 md:px-6 md:pb-20">
        <div className="rounded-[2rem] bg-slate-950 px-6 py-10 text-center text-white shadow-[0_28px_80px_rgba(15,23,42,0.22)] md:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-red-300">
            Next Step
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Let&apos;s turn ideas into meaningful projects.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
            I&apos;m focused on learning, improving, and building work I can be proud of. Explore
            my projects and skills to see what I&apos;ve been creating.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/project"
              className="rounded-full bg-red-600 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-red-700"
            >
              View My Work
            </Link>
            <Link
              href="/certificate"
              className="rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200 transition duration-300 hover:border-red-400 hover:text-white"
            >
              See Certificates
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
