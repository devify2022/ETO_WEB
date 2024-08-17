
import { FaArrowRightLong } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
const Drivers = () => {
  return (
    <div className="w-full h-screen bg-[#F5F5F5] flex lg:px-[8%] gap-12 pt-[5vh] relative">
      <div className="w-[45%] h-full flex flex-col gap-12 py-[8vh] ">
        <div className="flex flex-col h-[25%]">
            <p className="2xl:text-[4rem] xl:text-[4rem] lg:text-[3rem] md:text-[2rem] font-bold">FOR DRIVERS</p>
            <p className="2xl:text-[2rem] xl:text-[1.75rem] lg:text-[1.5rem] md:text-[1rem] font-bold text-[#222222]">DO YOU WANT TO EARN WITH US?</p>
        </div>
        <div className="grid grid-cols-2 gap-4 w-full h-[20%]">
         <div className=" flex gap-2 items-center">
            <div className="numBackground flex justify-center items-center w-[15%] h-[60%]"> <TiTick /></div>
            <div>
                <p className="2xl:text-[1.2rem] font-medium text-[#666666]">No Fee</p>
            </div>
         </div>
         <div className=" flex gap-2 items-center">
            <div className="numBackground flex justify-center items-center w-[15%] h-[60%]"> <TiTick /></div>
            <div>
                <p className="2xl:text-[1.2rem] font-medium text-[#666666]">Minimal Documentention</p>
            </div>
         </div>
         <div className=" flex gap-2 items-center">
            <div className="numBackground flex justify-center items-center w-[15%] h-[60%]"> <TiTick /></div>
            <div>
                <p className="2xl:text-[1.2rem] font-medium text-[#666666]">Fixed Price</p>
            </div>
         </div>
         <div className="flex gap-2 items-center">
            <div className="numBackground flex justify-center items-center w-[15%] h-[60%]"> <TiTick /></div>
            <div>
                <p className="text-[1.2rem] font-medium text-[#666666]">Daily Payment</p>
            </div>
         </div>
        </div>

        <div>
       <button className="flex items-center gap-2 py-2 px-4 bg-custom-gradient rounded-3xl font-semibold"
   > Download now 
   <span className="p-2 bg-black text-white rounded-full"><FaArrowRightLong /></span></button>
  </div>
      </div>
      <div className="group21 w-[45%] h-full"></div>
    </div>
  )
}

export default Drivers
