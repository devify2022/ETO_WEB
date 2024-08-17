import { useState } from "react";

import EtoLogo from "../assets/ETO_Logo.png"
const Navbar = () => {
  const [selected, setSelected] = useState('Home');

  const menuItems = [
    { label: 'Home' },
    { label: 'Why us' },
    { label: 'Download' }
  ];
  return (
    <div className="flex justify-center w-full h-fit relative">
      <div className="z-20 absolute w-full h-fit flex flex-col md:flex-row items-center justify-between py-2 px-20">
        <div className="w-20 h-20 ">
          <img src={EtoLogo} alt="logo" className="w-full h-full" />
        </div>
        <div className="absolute right-20 w-fit h-fit flex gap-6 py-2 px-4 rounded-full bg-black text-white">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => setSelected(item.label)}
              className={`cursor-pointer px-4 py-1 rounded-full transition-colors duration-300 focus:outline-none font-semibold ${selected === item.label
                  ? 'bg-custom-gradient text-black'
                  : 'text-white'
                }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

}

export default Navbar
