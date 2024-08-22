
import { FaArrowRightLong } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
const Drivers = () => {
  return (
    <div className="w-full lg:h-screen md:h-[80vh] h-[70vh] bg-[#F5F5F5] flex lg:px-[8%] gap-12 pt-[5vh] relative justify-center">
    <div className="md:w-[45%] w-full h-full flex flex-col md:gap-12 gap-8 py-[8vh] ">
      <div className="flex flex-col h-[25%]  items-center md:items-start">
          <p className="2xl:text-[4rem] xl:text-[4rem] lg:text-[3rem] md:text-[3rem] text-[2.5rem] font-bold">FOR DRIVERS</p>
          <p className="2xl:text-[2rem] xl:text-[1.75rem] lg:text-[1.5rem] md:text-[2rem] text-[1.25rem] font-bold text-[#222222]">DO YOU WANT TO EARN WITH US?</p>
      </div>
      <div className="grid grid-cols-2 lg:gap-4 md:gap-0 gap-4 w-full lg:h-[20%] h-[40%] px-4 md:px-0">
       <div className=" flex gap-2 items-center">
          <div className="numBackground flex justify-center items-center w-[15%] h-[60%]"> <TiTick /></div>
          <div>
              <p className="2xl:text-[1.2rem] md:text-[1.15rem] font-medium text-[#666666]">No Fee</p>
          </div>
       </div>
       <div className=" flex gap-2 items-center">
          <div className="numBackground flex justify-center items-center w-[20%] lg:w-[15%] md:w-[22%] h-[60%]"> <TiTick /></div>
          <div>
              <p className="2xl:text-[1.2rem] md:text-[1.15rem] font-medium text-[#666666]">Minimal Documentention</p>
          </div>
       </div>
       <div className=" flex gap-2 items-center">
          <div className="numBackground flex justify-center items-center w-[15%] h-[60%]"> <TiTick /></div>
          <div>
              <p className="2xl:text-[1.2rem]  md:text-[1.15rem] font-medium text-[#666666]">Fixed Price</p>
          </div>
       </div>
       <div className="flex gap-2 items-center">
          <div className="numBackground flex justify-center items-center w-[15%] h-[60%]"> <TiTick /></div>
          <div>
              <p className="2xl:text-[1.2rem]  md:text-[1.15rem] font-medium text-[#666666]">Daily Payment</p>
          </div>
       </div>
      </div>

      <div className="flex justify-center md:justify-start">
     <button className="flex items-center gap-2 py-2 px-4 bg-custom-gradient rounded-3xl font-semibold  md:text-[1.25rem]"
 > Download now 
 <span className="p-2 bg-black text-white rounded-full"><FaArrowRightLong /></span></button>
</div>
    </div>
    <div className="group21 w-[45%] h-full hidden md:block"></div>
  </div>
    
  )
}

export default Drivers
