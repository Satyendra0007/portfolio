import React from 'react'
import Skillcard from '@/app/components/Skillcard';
import { webSkillData, pgSkillData } from '../data/skillData';

export default function page() {
  const skillGroups = [
    {
      eyebrow: 'Core Stack',
      title: 'Modern web development',
      description:
        'Frontend, backend, styling, databases, and product integrations used to build polished full-stack experiences.',
      accent: 'from-rose-500/15 via-orange-400/10 to-transparent',
      skills: webSkillData,
    },
    {
      eyebrow: 'Foundation',
      title: 'Programming languages',
      description:
        'Problem solving, computer science fundamentals, and language fluency that support reliable engineering work.',
      accent: 'from-stone-900/10 via-stone-500/5 to-transparent',
      skills: pgSkillData,
    },
  ];

  return (
    <section
      id="skills"
      className="relative mx-auto min-h-[72vh] max-w-6xl overflow-hidden px-4 py-10 md:px-6 md:py-16"
    >
      <div className="absolute left-0 top-12 h-40 w-40 rounded-full bg-rose-200/30 blur-3xl" />
      <div className="absolute right-0 top-40 h-56 w-56 rounded-full bg-orange-100/50 blur-3xl" />

      <div className="relative rounded-[2rem] border border-stone-200/80 bg-gradient-to-br from-white via-stone-50 to-orange-50/40 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.08)] md:p-10">
        <div className="grid gap-8 border-b border-stone-200/80 pb-8 md:grid-cols-[1.3fr_0.7fr] md:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-rose-500">
              Expertise
            </p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-stone-900 md:text-5xl">
              Skills and technologies I use to build modern web experiences.
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-7 text-stone-600 md:text-base">
              From frontend interfaces to backend logic, these are the tools I work
              with to create responsive, scalable, and user-focused products.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
            <div className="rounded-2xl border border-stone-200 bg-white/80 p-4 shadow-sm">
              <p className="text-xs uppercase tracking-[0.28em] text-stone-400">Total</p>
              <p className="mt-2 text-3xl font-bold text-stone-900">
                {webSkillData.length + pgSkillData.length}
              </p>
              <p className="mt-1 text-sm text-stone-500">Technologies</p>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-stone-900 p-4 text-stone-50 shadow-sm">
              <p className="text-xs uppercase tracking-[0.28em] text-stone-400">Focus</p>
              <p className="mt-2 text-lg font-semibold">Full-stack development</p>
              <p className="mt-1 text-sm text-stone-300">
                React, Next.js, Node.js, MongoDB, and modern UI styling.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-6">
          {skillGroups.map((group) => {
            return (
              <div
                key={group.title}
                className="relative overflow-hidden rounded-[1.75rem] border border-stone-200 bg-white/80 p-6 shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${group.accent}`} />

                <div className="relative grid gap-6 md:grid-cols-[0.38fr_0.62fr]">
                  <div className="flex flex-col justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.34em] text-stone-400">
                        {group.eyebrow}
                      </p>
                      <h2 className="mt-3 text-2xl font-bold text-stone-900">
                        {group.title}
                      </h2>
                      <p className="mt-3 max-w-sm text-sm leading-7 text-stone-600">
                        {group.description}
                      </p>
                    </div>

                    <div className="mt-5 inline-flex w-fit rounded-full border border-stone-200 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">
                      {group.skills.length} skills
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    {group.skills.map((skill, index) => {
                      return (
                        <Skillcard
                          key={skill.name}
                          image={skill.logo}
                          text={skill.name}
                          index={index}
                        />
                      )
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}
