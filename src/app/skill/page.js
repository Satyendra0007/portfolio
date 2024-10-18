import React from 'react'
import Skillcard from '@/app/components/Skillcard';
import { webSkillData, pgSkillData } from '../data/skillData';


export default function page() {

  return (
    <div>
      <section id="skills" className=" container mx-auto min-h-[72vh] ">
        <h1 className="text-center my-4 text-2xl font-bold">Skills</h1>
        <div className="webDevlopment my-8">
          <h1 className="text-center my-5 text-sm font-semibold">Web Devlopment</h1>
          <div className="flex  justify-center items-center gap-5 flex-wrap">
            {webSkillData.map((skill, index) => {
              return <Skillcard key={index} image={skill.logo} text={skill.name} />
            })}
          </div>
        </div>
        <div className="programing-Language my-8">
          <h1 className="text-center my-5 text-sm font-semibold">Programing Languages</h1>
          <div className="flex  justify-center items-center gap-5 flex-wrap">
            {pgSkillData.map((skill, index) => {
              return <Skillcard key={index} image={skill.logo} text={skill.name} />
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
