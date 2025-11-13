import Image from "next/image"
import dhoni from '@/app/images/dhoni.jpeg'
import harry from '@/app/images/harry.jpeg'

export default function page() {
  return (
    <>
      <section className=' intro py-7 px-2 '>
        <h1 className='text-xl font-bold text-center'>About me</h1>

        <div className="terminal md:w-4/6 mx-auto border border-gray-200 my-1 shadow-md rounded-lg">
          <div className="head flex gap-1 p-3 bg-red-100 ">
            <div className="circle h-4 w-4 rounded-full bg-red-600"></div>
            <div className="circle h-4 w-4 rounded-full bg-green-500"></div>
            <div className="circle h-4 w-4 rounded-full bg-yellow-400"></div>
          </div>
          <div className="bottom">
            <div className="content p-2 pb-0 flex text-[16px]">
              <div className="left space-x-1 ">
                <span className='text-red-500'>info</span>
                <span>&gt;</span>
                <span className='text-green-600'>$</span>
              </div>
              <div className="right">
                <span className='ml-3'>About Me</span>
              </div>
            </div>
            <div className="content p-2 pt-0 flex text-[16px]">
              <div className="left space-x-1 ">
                <span className='text-red-500'>info</span>
                <span>&gt;</span>
                <span className='text-green-600'>$</span>
              </div>
              <div className="right text-[16px]">
                <span className='ml-3'>   <span className='text-lg p-1 tracking-wider bg-gradient-to-r from-rose-600 to-purple-600  text-transparent bg-clip-text font-bold'>Hello!</span> I &apos; m Satyendra, currently pursuing my Master &apos; s in Computer Applications (MCA) at Noida International University. As a first-year student, I &apos; m passionate about diving deep into the world of technology and software development. My academic journey is driven by a curiosity for how things work and a desire to create innovative solutions that can make a difference.

                  I &apos; m eager to explore various aspects of computer science, from coding and algorithms to data structures and software engineering. My goal is to build a strong foundation in these areas and develop the skills necessary to excel in the tech industry.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='idials  py-7'>
        <h1 className='text-xl font-bold text-center mb-5'>My Idols</h1>
        <div className='cantainer p-5 space-y-6 md:space-y-0 md:flex justify-center items-center gap-11'>
          <div className="card px-4 py-6 bg-red-50 text-gray-800  backdrop-blur-3xl rounded-xl shadow-lg h-fit  md:w-80">
            <div className="img">
              <Image className="w-full h-80" src={dhoni} alt=""></Image>
            </div>
            <div className="content">
              <h1 className="text-lg font-bold text-center my-4 text-primary ">MS Dhoni</h1>
              <p className='text-center text-xs font-semibold tracking-wider '> I&apos;m huge fan of Mahendra Singh Dhoni, affectionately known as Captain Cool. Hailing from Ranchi, India, Dhoni has etched his name in the annals of cricketing history with his astute captaincy, lightning-quick glovework, and the ability to finish matches with unmatched calmness.</p>
            </div>
          </div>

          <div className="card px-4 py-6 bg-red-50 text-gray-800  backdrop-blur-3xl rounded-xl shadow-lg h-fit md:w-80">
            <div className="img">
              <Image className="w-full h-80" src={harry} alt=""></Image>
            </div>
            <div className="content">
              <h1 className="text-lg font-bold text-center my-4 text-primary ">Harish Khan <span className="text-xs">(CWH)</span></h1>
              <p className='text-center text-xs font-semibold tracking-wider '> Meet my coding idol, the one and only Harish Khan ! (Harry) 🚀  Harry has been my go-to guide in the vast world of programming. From Python to web development, his tutorials are not just informative but also infused with a unique blend of enthusiasm and humor.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
