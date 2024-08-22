import { useState } from "react";
import { Link } from "react-scroll";
import EtoLogo from "../assets/ETO_Logo.png"
import { FaArrowRightLong } from "react-icons/fa6";
const Footer = () => {
  const [selected, setSelected] = useState('Home');

const menuItems = [
  { label: 'Home', to: 'home' },
  { label: 'Why us', to: 'why-us' },
  { label: 'Reviews', to: 'reviews' }
];
  return (
    <div className="w-full h-full flex flex-col gap-4 lg:px-[8vw] px-2 mt-[5vh] mb-[2vh] items-center">
    <div className="w-full h-full flex flex-col md:flex-row md:justify-between justify-center items-center pb-[2vh] md:gap-2 gap-6">
      <div className="lg:w-[15%] h-20 md:w-[25%] md:justify-center flex">
        <img src={EtoLogo} alt="logo" className="w-20 h-full" />
      </div>
      
      <div className="flex gap-14 justify-center items-center md:w-[50%] lg:w-[60%]">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            to={item.to} // Link to the corresponding component
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => setSelected(item.label)}
            className="cursor-pointer hover:text-[#222222] text-[#666666] text-[1.1rem] md:text-[1.25rem] font-semibold"
          >
            {item.label}
          </Link>
        ))}
      </div>
      
      <div className="lg:w-[15%] md:w-[25%] md:justify-center flex">
        <button className="flex items-center gap-2 py-2 lg:px-4 md:px-2 px-4 bg-custom-gradient rounded-3xl font-semibold md:text-[1.15rem] lg:text-[1rem]">
          Download now 
          <span className="p-2 bg-black text-white rounded-full"><FaArrowRightLong /></span>
        </button>
      </div>
    </div>
  
  <div className=" w-full flex justify-center items-center border-t-2 pt-2 ">
    <p className="text-[1rem]  text-[#666666]">Copyright © 2024 ETO. All rights reserved.</p>
  </div>
  </div>
  
  )
}

export default Footer
