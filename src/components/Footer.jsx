import { useState } from "react";
import EtoLogo from "../assets/ETO_Logo.png"
import { FaArrowRightLong } from "react-icons/fa6";
const Footer = () => {
  const [selected, setSelected] = useState('Home');

const menuItems = [
  { label: 'Home' },
  { label: 'Why us' },
  { label: 'Reviews' }
];
  return (
    <div className="w-full h-full flex flex-col gap-4 px-[8vw] mt-[5vh] mb-[2vh]">
    <div className="w-full h-full flex justify-between items-center pb-[2vh]">
      <div className="w-[15%] h-20 ">
        <img src={EtoLogo} alt="logo" className="w-20 h-full" />
      </div>
      
      <div className="flex gap-14 justify-center items-center w-[60%]">
        {menuItems.map((item) => (
          <button
            key={item.label}
            onClick={() => setSelected(item.label)}
            className="cursor-pointer hover:text-[#222222] text-[#666666] text-[1.1rem] font-semibold"
          >
            {item.label}
          </button>
        ))}
      </div>
      
      <div className="w-[15%]">
        <button className="flex items-center gap-2 py-2 px-4 bg-custom-gradient rounded-3xl font-semibold">
          Download now 
          <span className="p-2 bg-black text-white rounded-full"><FaArrowRightLong /></span>
        </button>
      </div>
    </div>
  
  <div className="flex justify-center items-center border-t-2 pt-2">
    <p className="text-[1rem] text-[#666666]">Copyright © 2024 ETO. All rights reserved.</p>
  </div>
  </div>
  
  )
}

export default Footer
