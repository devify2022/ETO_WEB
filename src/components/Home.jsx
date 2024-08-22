import { FaArrowRightLong } from "react-icons/fa6";
const Home = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row md:justify-between w-full lg:h-screen md:h-[60vh] h-[80vh] lg:ps-20 md:ps-2 md:relative">
<div className="relative w-full md:w-[50%] flex justify-start items-center lg:p-0 p-4" >
  <div className="flex flex-col">
  <p className="text-[3rem] sm:text-[4.75rem] 2xl:text-[6rem] xl:text-[5rem] lg:text-[4rem] md:text-[3.5rem] font-bold leading-10 sm:leading-[5rem] xl:leading-[4rem] 2xl:leading-[5rem] lg:leading-[4rem] md:leading-[3rem]">Ride Smarter, <br /> Live Greener</p>
  <p className="mt-4 text-[1rem] 2xl:text-[1rem] xl:text-[1.2rem] lg:text-[1rem] md:text-[.9rem] text-[#666666] hidden lg:block">Embrace a smarter way to travel with our eco-friendly e-rickshaws. <br /> Engineered for efficiency, style, and performance, they are <br /> the perfect choice for modern urban life.</p>
  <p className="mt-4 text-[1rem] 2xl:text-[1rem] xl:text-[1.2rem] lg:text-[1rem] md:text-[.9rem] text-[#666666] lg:hidden sm:block">Embrace a smarter way to travel with our eco-friendly e-rickshaws. Engineered for efficiency, style, and performance, they are the perfect choice for modern urban life.</p>
  <div className="mt-4">
   <button className="flex items-center gap-2 py-2 px-4 bg-custom-gradient rounded-3xl font-semibold"
   > Download now 
   <span className="p-2 bg-black text-white rounded-full"><FaArrowRightLong /></span></button>
  </div>
  </div>
  
</div>

    <div className="Map md:w-[60%] w-full lg:h-screen md:h-full h-[40%] flex  justify-end z-10 absolute md:right-0 top-0">
      <div className="Iphone15 w-[85%] lg:h-[80vh] md:h-[70vh] h-[30vh] flex self-end">
      </div>
    </div>
    </div>
  )
}

export default Home
