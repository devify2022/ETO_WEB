import { FaArrowRightLong } from "react-icons/fa6";
const Home = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between w-full h-screen  ps-20 md:relative ">
<div className="relative w-full md:w-[50%] flex justify-start items-center md:p-0" >
  <div className="flex flex-col">
  <p className="text-[6rem] 2xl:text-[6rem] xl:text-[5rem] lg:text-[4rem] md:text-[3rem] font-bold leading-[6rem] xl:leading-[4rem] 2xl:leading-[5rem] lg:leading-[4rem] md:leading-[3rem]">Ride Smarter, <br /> Live Greener</p>
  <p className="mt-4 text-[1rem] 2xl:text-[1rem] xl:text-[1.2rem] lg:text-[1rem] md:text-[.9rem] text-[#666666]">Embrace a smarter way to travel with our eco-friendly e-rickshaws. <br /> Engineered for efficiency, style, and performance, they are <br /> the perfect choice for modern urban life.</p>
  <div className="mt-4">
   <button className="flex items-center gap-2 py-2 px-4 bg-custom-gradient rounded-3xl font-semibold"
   > Download now 
   <span className="p-2 bg-black text-white rounded-full"><FaArrowRightLong /></span></button>
  </div>
  </div>
  
</div>

    <div className="Map w-[60%] h-screen flex justify-end z-10 md:absolute right-0">
      <div className="Iphone15 w-[85%] h-[80vh] flex self-end">
      </div>
    </div>
    </div>
  )
}

export default Home
