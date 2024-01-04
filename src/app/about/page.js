import Image from "next/image"
import dhoni from '@/app/images/dhoni.jpeg'
import harry from '@/app/images/harry.jpeg'

export default function page() {
  return (
    <>
      <section className=' intro py-7 px-2 '>
        <h1 className='text-xl font-bold text-center'>About me</h1>
        <div className="box ">
          <div className=" about-me text-sm p-3 mt-3 bg-red-100 text-gray-800 rounded-xl shadow-lg md:w-1/2 mx-auto">
            <p className='text-center font-semibold tracking-wider '><span className='text-lg p-1  tracking-wider bg-gradient-to-r from-rose-600 to-purple-600  text-transparent bg-clip-text font-bold'>Hello!</span>
              I am Satyendra, currently pursuing my Bachelor &apos; s in Computer Applications (BCA) and currently in the exciting fifth semester of my academic journey. With a keen interest in the world of programming, I find myself deeply immersed in the intricacies of coding and web development.
            </p>
          </div>
          <div className="image">

          </div>
        </div>
      </section>
      <section className='idials  py-7'>
        <h1 className='text-xl font-bold text-center mb-5'>My Idols</h1>
        <div className='cantainer p-5 space-y-6 md:space-y-0 md:flex justify-center items-center gap-11'>

          <div className="card px-4 py-6 bg-red-100 text-gray-800  backdrop-blur-3xl rounded-xl shadow-lg md:h-[82vh]  md:w-80">
            <div className="img">
              <Image className="w-full h-80" src={dhoni} alt=""></Image>
            </div>
            <div className="content">
              <h1 className="text-lg font-bold text-center my-4 text-primary ">MS Dhoni</h1>
              <p className='text-center text-xs font-semibold tracking-wider '> I&apos;m huge of Mahendra Singh Dhoni, affectionately known as Captain Cool. Hailing from Ranchi, India, Dhoni has etched his name in the annals of cricketing history with his astute captaincy, lightning-quick glovework, and the ability to finish matches with unmatched calmness.</p>
            </div>
          </div>

          <div className="card px-4 py-6 bg-red-100 text-gray-800  backdrop-blur-3xl rounded-xl shadow-lg md:h-[82vh] md:w-80">
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
