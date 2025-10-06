import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { RiCloseFill } from "react-icons/ri";
import ToggleButton from "./toggleButton";
const Navbar = ({isDarkMode,toggleTheme}) => {
    const [menu,openMenu]=useState(false);
    const [showMenu,setShowMenu]=useState(false);
  return (
    <nav className={`relative flex flex-wrap justify-between ${isDarkMode? 'bg-[#171d32]  text-white':'bg-white text-black shadow-md'} md:items-center  px-10 pt-6 pb-2  md:px-20`}>
      <span className="text-2xl font-bold tracking-wide">Portfolio <ToggleButton isDarkMode={isDarkMode} handleToggle={toggleTheme}/></span>
      
      <ul className={`
         ${menu?"opacity-100 scale-100 translate-y-0 visible border-2" : "scale-95 opacity-0 -translate-y-5 invisible"} origin-top-right right-0 mr-12 md:opacity-100 md:scale-100 md:translate-y-0 md:visible
          absolute mx-24 py-2 mt-4 font-semibold md:mt-5 px-2 rounded-xl      bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6  transition-all duration-500 ease-in-out ${isDarkMode?'bg-black':'bg-white'}`}>
        <a href="#About">
          <li className="text-md transition-all duration-300 p-1 md:p-0">
            About
          </li>
        </a>
        <a href="#Education">
          <li className="text-md transition-all duration-300 p-1 md:p-0">
            Education
          </li>
        </a>
        <a href="#Skills">
          <li className="text-md transition-all duration-300 p-1 md:p-0">
            Skills
          </li>
        </a>
        <a href="#Projects">
          <li className="text-md transition-all duration-300 p-1 md:p-0">
            Projects
          </li>
        </a>
        <a href="#Contact">
          <li className="text-md transition-all duration-300 p-1 md:p-0">
            Contact Me
          </li>
        </a>
      </ul>
      {showMenu?(<RiCloseFill size={30} className="md:hidden absolute right-10 top-6 transition-all duration-300" onClick={()=>{
        openMenu(!menu)
        setShowMenu(!showMenu)
      }}/>):(<CiMenuFries  size={30} className="md:hidden absolute right-10 top-6 transition-all duration-300"  onClick={()=>{
        openMenu(!menu)
        setShowMenu(!showMenu)}}/>)}
    </nav>
  );
};
export default Navbar; 
