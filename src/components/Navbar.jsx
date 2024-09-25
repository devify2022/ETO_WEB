import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import EtoLogo from "../assets/Eto_Logo2.png"
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [selected, setSelected] = useState('Home');
  const [openNav, setOpenNav] = useState(false);
  const navRef = useRef(null);

  const toggleNav = () => {
    setOpenNav(!openNav);
  };

  const menuItems = [
    { label: 'Home', to: 'home' },
    { label: 'Why us', to: 'why-us' },
    { label: 'Download', to: 'download' }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenNav(false);
      }
    };

    if (openNav) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openNav]);

  const handleMenuItemClick = (label) => {
    setSelected(label);
    setOpenNav(false); // Close the navigation menu after selecting an item
  };

  return (
    <div className="flex justify-center w-full h-fit relative">
      <div className="z-20 absolute w-full h-fit flex flex-row items-center justify-between py-2 lg:px-20 px-2 gap-2">
        <div className="w-32 h-28">
          <img src={EtoLogo} alt="logo" className="w-full h-full" />
        </div>
        <div className="block md:hidden absolute right-2">
          <button
            className="text-[2rem] cursor-pointer"
            onClick={toggleNav}
          >
            <GiHamburgerMenu />
          </button>
        </div>
        <div className="hidden md:block absolute lg:right-20 right-2 w-fit h-fit flex lg:gap-6 gap-2 py-3 px-4 rounded-full bg-black text-white">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => handleMenuItemClick(item.label)}
              className={`cursor-pointer lg:px-4 px-2 py-1 rounded-full transition-colors duration-300 focus:outline-none font-semibold ${selected === item.label
                ? 'bg-custom-gradient text-black'
                : 'text-white'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        {openNav && (
          <div
            ref={navRef}
            className="absolute right-1 w-fit h-fit flex gap-2 py-2 px-3 rounded-full bg-black text-white"
          >
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => handleMenuItemClick(item.label)}
                className={`cursor-pointer lg:px-4 px-2 py-1 rounded-full transition-colors duration-300 focus:outline-none font-semibold ${selected === item.label
                  ? 'bg-custom-gradient text-black'
                  : 'text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
