import { useState,useEffect } from "react";
import TextChange from "./textChange"
import avatarImg from "../assets/avatar.jpg"
const Home=({isDarkMode})=>{
      const [showPopup, setShowPopup] = useState(false);
    useEffect(() => {
        if (showPopup) {
            const timer = setTimeout(() => {
                setShowPopup(false);
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [showPopup]);
return(
    <div className="text-white flex w-full justify-between items-start pt-10 pb-10 pl-10 pr-2 md:p-20">
    <div className="md:w-2/4 md:pt-10">
    <h1 className="text-3xl md:text-6xl  font-bold flex leading-normal tracking-tighter"><TextChange isDarkMode={isDarkMode}/></h1>
    <p className={`text-sm md:text-2xl tracking-tight ${isDarkMode?'text-white':'text-black'}`}>I specialize in transforming complex problems into elegant, high-performing digital solutions.</p>
    <button className="mt-5 md:md-10 text-white py-2 px-3 text-sm md:text-lg  md:py-2 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"  onClick={() => setShowPopup(true)}>Download Resume</button>
    </div>
             <div
                className={`
                    fixed inset-0 flex items-center justify-center z-50 p-4
                    transition-opacity duration-300 ease-in-out
                    ${showPopup ? 'opacity-100' : 'opacity-0 pointer-events-none'}
                `}
            >
                <div className={`absolute inset-0  bg-opacity-70 ${isDarkMode?'bg-black':'bg-white'}`}></div>
                <div
                    className={`
                        ${isDarkMode? 'bg-[#0c0e19]': 'bg-gray-200'} p-8 rounded-2xl shadow-xl shadow-slate-900 relative w-full max-w-md text-center
                        transform transition-all duration-300 ease-in-out
                        ${showPopup ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}
                    `}
                >
                    <h2 className="text-3xl font-bold text-sky-400 mb-4">Coming Soon!</h2>
                </div>
            </div>
            <div>
                <img src={avatarImg} alt="" className="w-100  transition-all duration-300 
                        hover:scale-105 rounded-full
                        hover:shadow-2xl hover:shadow-sky-500/50"/>
            </div>
    </div>
)
}
export default Home

