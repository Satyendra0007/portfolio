import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function CertificateCard({ icon, name, location, link }) {
  return (
    <div className="flex justify-between items-center border border-gray-300 rounded-md shadow-md w-80 md:w-96 p-2" data-aos="fade-right">
      <div className='flex items-center gap-3 '>
        <div className="icon p-3 bg-gray-200 text-red-600 text-2xl rounded-full  ">
          {icon}
        </div>
        <div className="info">
          <div className="name font-semibold capitalize text-gray-800">
            {name}
          </div>
          <div className="location text-xs ">
            {location}
          </div>
        </div>
      </div>
      <div className="button text-s font-semibold">
        <a href={link} target='_blank'><FaArrowUpRightFromSquare /></a>
      </div>
    </div>
  )
}
