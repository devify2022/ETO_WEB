import { useState } from "react";
import { Link } from "react-scroll";
import EtoLogo from "../assets/ETO_Logo.png"
const Navbar = () => {
  const [selected, setSelected] = useState('Home');

  const menuItems = [
    { label: 'Home', to: 'home' },
    { label: 'Why us', to: 'why-us' },
    { label: 'Download', to: 'download' }
  ];
  return (
    <div className="flex  justify-center w-full h-fit relative">
      <div className="z-20 absolute w-full h-fit flex flex-row items-center justify-between py-2 lg:px-20 px-2 gap-2">
        <div className="w-20 h-20 ">
          <img src={EtoLogo} alt="logo" className="w-full h-full" />
        </div>
        <div className="absolute lg:right-20 right-2 w-fit h-fit flex lg:gap-6 gap-2 py-2 px-4 rounded-full bg-black text-white">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              to={item.to} // Link to the corresponding component
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setSelected(item.label)}
              className={`cursor-pointer lg:px-4 px-2 py-1 rounded-full transition-colors duration-300 focus:outline-none font-semibold ${selected === item.label
                  ? 'bg-custom-gradient text-black'
                  : 'text-white'
                }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );

}

export default Navbar
