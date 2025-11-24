import React from 'react'
import CertificateCard from '../components/CertificateCard'
import certificateData from '../data/certificatedata'

export default function page() {
  return (
    <div className='min-h-[75vh] md:min-h-[74vh] md:max-w-5xl mx-auto'>
      <div className="head">
        <h1 className="text-center my-6 text-2xl font-bold">Certificates</h1>
      </div>
      <div className="list flex flex-col items-center justify-center gap-2 md:flex-wrap md:flex-row">
        {certificateData.map((certificate, index) => {
          return <CertificateCard key={index} {...certificate} />
        })}
      </div>
    </div>
  )
}
