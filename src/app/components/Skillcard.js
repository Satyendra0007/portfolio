import React from 'react'
import Image from 'next/image'

export default function Skillcard({ image, text }) {

  return (
    <div className="card flex justify-around items-center w-72 py-2 border border-gray-300 shadow-xl ">
      <Image className='w-12' src={image} height={20} width={20} alt=''></Image>
      <p className='text-base font-semibold text-primary'>{text.toUpperCase()}</p>
    </div>

  )
}
