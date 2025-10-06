
import { IoArrowForward } from "react-icons/io5"
const About=({isDarkMode})=>{
return(
<div id="About" className={`md:flex overflow-hidden items-center md:flex-wrap md:justify-center  shadow-xl mx-0 md:mx-20 bg-opacity-30      rounded-xl md:rounded-full p-12 ${isDarkMode?'bg-black text-white':'bg-gray-400 text-gray-900'}`}>
    <div>
        <h2 className="text-2xl md:text-4xl font-bold md:text-center md:mb-5">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
            <ul>
                <div className="flex gap-3 py-4">
                    <IoArrowForward size={30} className="mt-1"/>
                    <span className="w-96">
<h1 className="text-xl md:text-2xl font-semibold leading-normal">Frontend Developer</h1>
<p className="text-sm md:text-md leading-tight">
    As a frontend developer, I specialize in transforming UI/UX designs into high-performing, user-friendly web applications. My expertise lies in HTML, CSS, and modern JavaScript, and I have a strong command of frameworks like React. I am passionate about writing clean, efficient code and creating responsive, accessible digital experiences that users love. I am always eager to learn and adapt to new technologies to build better products.
</p>
                    </span>
                </div>
                <div className="flex gap-3 py-4">
                    <IoArrowForward size={30} className="mt-1"/>
                    <span className="w-96">
<h1 className="text-xl md:text-2xl font-semibold leading-normal">Data Analyst</h1>
<p className="text-sm md:text-md leading-tight">
   Beyond building interfaces, I have a deep passion for data and its power to drive decisions. As a data enthusiast, I am proficient in using SQL to query complex databases and Python—with libraries like Pandas and Matplotlib—to clean, analyze, and visualize information. I enjoy the entire process of uncovering hidden patterns and transforming raw data into actionable insights that solve real-world problems.
</p>
                    </span>
                </div>
                <div className="flex gap-3 py-4">
                    <IoArrowForward size={30} className="mt-1"/>
                    <span className="w-96">
<h1 className="text-xl md:text-2xl font-semibold leading-normal">The Passionate Problem-Solver</h1>
<p className="text-sm md:text-md leading-tight">
   I have a strong passion for problem-solving, which I regularly cultivate through competitive programming. Actively participating in contests on platforms like LeetCode and Codeforces has sharpened my abilities in algorithms, data structures, and logical reasoning. I enjoy the challenge of deconstructing complex problems and translating them into efficient, elegant code under pressure.
</p>
                    </span>
                </div>
            </ul>
        </div>
    </div>
</div>
)
}
export default About